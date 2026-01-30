/**
 * GitHub API クライアント
 * サーバーサイドAPI経由でGitHubデータを取得する（トークン保護）
 */

export interface GithubSkill {
  name: string;
  percentage: number;
  color?: string;
}

/**
 * GitHub言語統計を取得する（サーバーサイドAPI経由）
 * クライアントからは直接GitHub APIを呼び出さず、サーバーサイドAPIを経由する
 */
export async function getGithubLanguages(
  username: string
): Promise<{ languages: GithubSkill[]; frameworks: string[] }> {
  try {
    // サーバーサイドAPI経由でデータを取得
    const response = await fetch(`/api/github?username=${encodeURIComponent(username)}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    return {
      languages: data.languages || [],
      frameworks: data.frameworks || [],
    };
  } catch (error) {
    console.error('Failed to fetch GitHub languages:', error);
    return { languages: [], frameworks: [] };
  }
}
