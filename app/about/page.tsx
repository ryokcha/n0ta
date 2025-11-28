'use client';

import { useState, useEffect } from 'react';
import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiPostgresql,
  SiAffinityphoto,
  SiAffinitydesigner,
  SiDavinciresolve,
  SiFigma,
  SiPython,
  SiGo,
  SiRust,
  SiPhp,
  SiRuby,
  SiVuedotjs,
  SiAngular,
  SiSvelte,
  SiGraphql,
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiDocker,
  SiKubernetes,
  SiGit,
  SiSass,
} from 'react-icons/si';
import {
  FaPalette,
  FaPaintBrush,
  FaCamera,
} from 'react-icons/fa';
import { getGithubLanguages } from '@/app/lib/github';

const LANGUAGE_TO_ICON: Record<string, React.ComponentType<{ className?: string }>> = {
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  Python: SiPython,
  Go: SiGo,
  Rust: SiRust,
  PHP: SiPhp,
  Ruby: SiRuby,
  HTML: SiHtml5,
  CSS: SiCss3,
  SCSS: SiSass,
  Vue: SiVuedotjs,
  React: SiReact,
  'Next.js': SiNextdotjs,
  Angular: SiAngular,
  Svelte: SiSvelte,
  'Tailwind CSS': SiTailwindcss,
  GraphQL: SiGraphql,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  MongoDB: SiMongodb,
  Firebase: SiFirebase,
  Docker: SiDocker,
  Kubernetes: SiKubernetes,
  Git: SiGit,
};

const designAndCreativeSkills = [
  { name: 'UI/UX Design', icon: FaPalette },
  { name: 'Visual Design', icon: FaPaintBrush },
  { name: 'Figma', icon: SiFigma },
  { name: 'Affinity Photo', icon: SiAffinityphoto },
  { name: 'Affinity Designer', icon: SiAffinitydesigner },
  { name: 'DaVinci Resolve', icon: SiDavinciresolve },
  { name: 'Photography', icon: FaCamera },
];

interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

function SkillCard({ skill }: { skill: Skill }) {
  const IconComponent = skill.icon;
  return (
    <div className="group flex flex-col items-center">
      <div className="relative w-12 h-12 flex items-center justify-center">
        <IconComponent
          className="text-[#6C8FA3] text-3xl group-hover:text-[#D5848C] transition-colors duration-300"
        />
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-[#6C8FA3] text-white text-xs px-2 py-1 rounded whitespace-nowrap">
            {skill.name}
          </div>
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-[#6C8FA3]"></div>
        </div>
      </div>
    </div>
  );
}

export default function About() {
  const [githubLanguages, setGithubLanguages] = useState<Array<{ name: string; percentage: number }>>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGithubData() {
      try {
        const { languages } = await getGithubLanguages('ryokcha');
        setGithubLanguages(languages);
      } catch (error) {
        console.error('Failed to fetch GitHub data:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchGithubData();
  }, []);

  // GitHub言語データからスキルを構築
  const codingLanguages: Skill[] = githubLanguages
    .slice(0, 8)
    .map((lang) => ({
      name: lang.name,
      icon: LANGUAGE_TO_ICON[lang.name] || SiGit,
    }))
    .filter((skill) => LANGUAGE_TO_ICON[skill.name]);

  return (
    <>
      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-20">
        {/* Page Title */}
        <section className="mb-16">
          <h2 className="text-5xl font-bold text-[#6C8FA3] mb-8">
            About Me
          </h2>
          <p className="text-xl text-[#4A4F52]">
            Learning and growing.
          </p>
        </section>

        {/* Profile Section */}
        <section className="mb-16 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-3xl font-bold text-[#6C8FA3] mb-6">
              Nakai Ryoka
            </h3>
            <p className="text-[#4A4F52] mb-4 leading-relaxed">
              UIデザインを考えることが大好きです。
            </p>
            <p className="text-[#4A4F52] mb-4 leading-relaxed">
              開発の経験は少ないながらに様々なことに関心を持っているため、学習と挑戦を続けています。現在はフロントエンド開発を中心に学習を続けていますが、将来的にはフルスタックエンジニアを目指しています。
            </p>
            <p className="text-[#4A4F52] leading-relaxed">
              趣味は写真撮影やダンス。開発以外では英語を中心とした語学とビジネスについて学習しています。
            </p>
          </div>
          <div className="bg-gradient-to-br from-[#fcf7f8]/50 to-[#D9DEE2]/50 backdrop-blur-lg rounded-2xl p-8 flex items-center justify-center min-h-80">
            <div className="text-center">
              <div className="text-8xl mb-4">✨</div>
              <p className="text-[#4A4F52] font-medium">
                Nakai Ryoka
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold text-[#6C8FA3] mb-8">
            Key
          </h3>
          <div className="space-y-8">
            {/* Design & UI/UX Section */}
            <div className="bg-[#fcf7f8]/50 backdrop-blur-lg p-8 rounded-2xl">
              <h4 className="text-lg font-semibold text-[#6C8FA3] mb-6">
                Design & UI/UX
              </h4>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-8 md:gap-6">
                {designAndCreativeSkills.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </div>
            </div>

            {/* Coding & Development Section */}
            <div className="bg-[#fcf7f8]/50 backdrop-blur-lg p-8 rounded-2xl">
              <h4 className="text-lg font-semibold text-[#6C8FA3] mb-6">
                Coding & Development
              </h4>
              {loading ? (
                <div className="flex items-center justify-center py-8">
                  <p className="text-[#4A4F52]">GitHub データを読み込み中...</p>
                </div>
              ) : codingLanguages.length > 0 ? (
                <div className="grid grid-cols-3 md:grid-cols-6 gap-8 md:gap-6">
                  {codingLanguages.map((skill) => (
                    <SkillCard key={skill.name} skill={skill} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-[#4A4F52]">GitHub データの取得に失敗しました</p>
                </div>
              )}
            </div>

            {/* Languages & Tools Section */}
            <div className="bg-[#fcf7f8]/50 backdrop-blur-lg p-8 rounded-2xl">
              <h4 className="text-lg font-semibold text-[#6C8FA3] mb-6">
                Languages & Tools
              </h4>
              {loading ? (
                <div className="flex items-center justify-center py-8">
                  <p className="text-[#4A4F52]">GitHub データを読み込み中...</p>
                </div>
              ) : githubLanguages.length > 0 ? (
                <div className="space-y-3">
                  {githubLanguages.slice(0, 5).map((lang) => (
                    <div key={lang.name} className="flex items-center gap-3">
                      <div className="w-32">
                        <p className="text-sm font-medium text-[#6C8FA3]">
                          {lang.name}
                        </p>
                      </div>
                      <div className="flex-1 bg-[#E8EDF2]/50 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-[#6C8FA3] to-[#D5848C] h-2 rounded-full transition-all duration-500"
                          style={{ width: `${lang.percentage}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-[#4A4F52] w-12 text-right">
                        {lang.percentage}%
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-[#4A4F52]">GitHub データの取得に失敗しました</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section>
          <h3 className="text-3xl font-bold text-[#6C8FA3] mb-8">
            Experience
          </h3>
          <div className="space-y-8">
            <div className="border-l-4 border-[#D5848C] pl-6 py-2">
              <h4 className="text-xl font-semibold text-[#6C8FA3]">
                Creative Professional
              </h4>
              <p className="text-[#4A4F52]">2023 - 現在</p>
              <p className="text-[#4A4F52] mt-2">
                ユーザー体験と最新テクノロジーに焦点を当てた、デジタルソリューションの開発とデザインを行っています。
              </p>
            </div>
            <div className="border-l-4 border-[#D5848C] pl-6 py-2">
              <h4 className="text-xl font-semibold text-[#6C8FA3]">
                成長と学習
              </h4>
              <p className="text-[#4A4F52]">継続中</p>
              <p className="text-[#4A4F52] mt-2">
                業界トレンドに対応するため、スキルを継続的に向上させ、新しいテクノロジーを探索しています。
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
