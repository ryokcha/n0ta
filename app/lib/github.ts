/**
 * GitHub API ユーティリティ
 * ユーザーの言語と技術情報を取得する
 */

interface LanguageData {
  [key: string]: number;
}

interface Repository {
  name: string;
  languages_url: string;
  primary_language?: string;
}

export interface GithubSkill {
  name: string;
  percentage: number;
  color?: string;
}

const SUPPORTED_LANGUAGES = new Set([
  'TypeScript',
  'JavaScript',
  'Python',
  'Go',
  'Rust',
  'Ruby',
  'PHP',
  'HTML',
  'CSS',
  'SCSS',
  'Vue',
  'React',
  'Next.js',
  'Angular',
  'Svelte',
  'Tailwind CSS',
  'GraphQL',
  'PostgreSQL',
  'MySQL',
  'MongoDB',
  'Firebase',
  'Docker',
  'Kubernetes',
  'Git',
]);

export async function getGithubLanguages(
  username: string
): Promise<{ languages: GithubSkill[]; frameworks: string[] }> {
  try {
    const token = process.env.GITHUB_TOKEN;
    const headers: Record<string, string> = {
      Accept: 'application/vnd.github.v3+json',
    };

    if (token) {
      headers.Authorization = `token ${token}`;
    }

    // ユーザーのリポジトリ一覧を取得
    const reposRes = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=100&sort=stars`,
      {
        headers,
        next: { revalidate: 3600 }, // 1時間キャッシュ
      }
    );

    if (!reposRes.ok) {
      throw new Error(`GitHub API error: ${reposRes.status}`);
    }

    const repos = (await reposRes.json()) as Repository[];
    const languageStats: LanguageData = {};

    // 各リポジトリの言語情報を取得
    for (const repo of repos) {
      try {
        const langRes = await fetch(repo.languages_url, {
          headers,
          next: { revalidate: 3600 },
        });

        if (langRes.ok) {
          const languages = (await langRes.json()) as LanguageData;
          for (const [lang, bytes] of Object.entries(languages)) {
            languageStats[lang] = (languageStats[lang] || 0) + bytes;
          }
        }
      } catch {
        // 言語取得エラーを無視して続行
      }
    }

    // 統計情報を計算
    const totalBytes = Object.values(languageStats).reduce(
      (a, b) => a + b,
      0
    );
    const languages: GithubSkill[] = Object.entries(languageStats)
      .map(([lang, bytes]) => ({
        name: lang,
        percentage: Math.round((bytes / totalBytes) * 100),
      }))
      .filter((lang) => lang.percentage >= 1)
      .sort((a, b) => b.percentage - a.percentage);

    // フレームワークを検出（リポジトリの説明と言語から推測）
    const frameworks = detectFrameworks(repos, Object.keys(languageStats));

    return { languages, frameworks };
  } catch (error) {
    console.error('Failed to fetch GitHub languages:', error);
    return { languages: [], frameworks: [] };
  }
}

function detectFrameworks(
  repos: Repository[],
  languages: string[]
): string[] {
  const frameworks = new Set<string>();

  // 言語ベースのフレームワーク検出
  const frameworksByLanguage: Record<string, string[]> = {
    TypeScript: ['React', 'Next.js', 'Vue', 'Angular', 'Svelte'],
    JavaScript: ['React', 'Vue', 'Angular', 'Express'],
    Python: ['Django', 'Flask', 'FastAPI'],
    Go: ['Gin', 'Echo'],
    Rust: ['Actix', 'Rocket'],
    Java: ['Spring', 'Maven'],
  };

  for (const lang of languages) {
    if (frameworksByLanguage[lang]) {
      frameworksByLanguage[lang].forEach((fw) => frameworks.add(fw));
    }
  }

  // リポジトリの説明からフレームワークを検出
  for (const repo of repos) {
    const description = repo.name.toLowerCase();
    if (
      description.includes('react') ||
      description.includes('nextjs') ||
      description.includes('next-js')
    ) {
      frameworks.add('React');
      frameworks.add('Next.js');
    }
    if (description.includes('vue')) {
      frameworks.add('Vue');
    }
    if (description.includes('tailwind') || description.includes('css')) {
      frameworks.add('Tailwind CSS');
    }
  }

  return Array.from(frameworks).slice(0, 8);
}

