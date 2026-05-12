'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import type { IconType } from 'react-icons';
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
  SiC,
  SiCplusplus,
  SiDart,
  SiJson,
  SiJupyter,
  SiKotlin,
  SiLua,
  SiMarkdown,
  SiPerl,
  SiR,
  SiScala,
  SiShell,
  SiSwift,
  SiYaml,
  SiAstro,
  SiBun,
  SiNodedotjs,
  SiExpress,
  SiPrisma,
  SiSupabase,
} from 'react-icons/si';
import {
  FaPalette,
  FaPaintBrush,
  FaCamera,
} from 'react-icons/fa';
import { getGithubLanguages } from '@/app/lib/github';

type LanguageIconMeta = {
  icon: IconType;
  color: string;
};

const LANGUAGE_TO_ICON: Record<string, LanguageIconMeta> = {
  TypeScript: { icon: SiTypescript, color: '#3178C6' },
  JavaScript: { icon: SiJavascript, color: '#F7DF1E' },
  Python: { icon: SiPython, color: '#3776AB' },
  Go: { icon: SiGo, color: '#00ADD8' },
  Rust: { icon: SiRust, color: '#000000' },
  PHP: { icon: SiPhp, color: '#777BB4' },
  Ruby: { icon: SiRuby, color: '#CC342D' },
  HTML: { icon: SiHtml5, color: '#E34F26' },
  CSS: { icon: SiCss3, color: '#1572B6' },
  SCSS: { icon: SiSass, color: '#CC6699' },
  Sass: { icon: SiSass, color: '#CC6699' },
  C: { icon: SiC, color: '#A8B9CC' },
  'C++': { icon: SiCplusplus, color: '#00599C' },
  Dart: { icon: SiDart, color: '#0175C2' },
  JSON: { icon: SiJson, color: '#5E5C5C' },
  'Jupyter Notebook': { icon: SiJupyter, color: '#F37626' },
  Kotlin: { icon: SiKotlin, color: '#7F52FF' },
  Lua: { icon: SiLua, color: '#2C2D72' },
  Markdown: { icon: SiMarkdown, color: '#000000' },
  Perl: { icon: SiPerl, color: '#39457E' },
  R: { icon: SiR, color: '#276DC3' },
  Scala: { icon: SiScala, color: '#DC322F' },
  Shell: { icon: SiShell, color: '#89E051' },
  'Shell Script': { icon: SiShell, color: '#89E051' },
  Swift: { icon: SiSwift, color: '#F05138' },
  YAML: { icon: SiYaml, color: '#CB171E' },
  Vue: { icon: SiVuedotjs, color: '#4FC08D' },
  'Vue.js': { icon: SiVuedotjs, color: '#4FC08D' },
  React: { icon: SiReact, color: '#61DAFB' },
  'Next.js': { icon: SiNextdotjs, color: '#111111' },
  Angular: { icon: SiAngular, color: '#DD0031' },
  Svelte: { icon: SiSvelte, color: '#FF3E00' },
  'Tailwind CSS': { icon: SiTailwindcss, color: '#06B6D4' },
  GraphQL: { icon: SiGraphql, color: '#E10098' },
  PostgreSQL: { icon: SiPostgresql, color: '#4169E1' },
  MySQL: { icon: SiMysql, color: '#4479A1' },
  MongoDB: { icon: SiMongodb, color: '#47A248' },
  Firebase: { icon: SiFirebase, color: '#FFCA28' },
  Docker: { icon: SiDocker, color: '#2496ED' },
  Kubernetes: { icon: SiKubernetes, color: '#326CE5' },
  Git: { icon: SiGit, color: '#F05032' },
  Astro: { icon: SiAstro, color: '#FF5D01' },
  Bun: { icon: SiBun, color: '#FBF0DF' },
  'Node.js': { icon: SiNodedotjs, color: '#5FA04E' },
  Express: { icon: SiExpress, color: '#000000' },
  Prisma: { icon: SiPrisma, color: '#2D3748' },
  Supabase: { icon: SiSupabase, color: '#3ECF8E' },
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
  icon: IconType;
  color?: string;
}

function SkillCard({ skill }: { skill: Skill }) {
  const IconComponent = skill.icon;
  return (
    <div className="group flex flex-col items-center">
      <div className="relative w-12 h-12 flex items-center justify-center">
        <IconComponent
          className={skill.color
            ? 'text-3xl transition-transform duration-300 group-hover:scale-110'
            : 'text-[#6C8FA3] text-3xl group-hover:text-[#D5848C] transition-colors duration-300'}
          style={skill.color ? { color: skill.color } : undefined}
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
    .flatMap((lang): Skill[] => {
      const languageMeta = LANGUAGE_TO_ICON[lang.name];

      if (!languageMeta) {
        return [];
      }

      return [
        {
          name: lang.name,
          icon: languageMeta.icon,
          color: languageMeta.color,
        },
      ];
    });

  return (
    <>
      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-20">
        {/* Page Title */}
        <section className="mb-16">
          <h2 className="text-5xl font-bold text-[#6C8FA3] mb-8">
            About Me
          </h2>
          <p className="text-xl text-[#6C8FA3]">
            Un roseau pensant.
          </p>
        </section>

        {/* Profile Section */}
        <section className="mb-16 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-3xl font-bold text-[#6C8FA3] mb-2">
              Nakai Ryoka
            </h3>
            <p className="text-lg text-[#6C8FA3] mb-6">
              中井涼日
            </p>
            <div className="space-y-[1.6rem] text-[#4A4F52] leading-[1.6]">
              <p>
                ことばとデザインとお勉強が大好きなヒトです。
              </p>
              <p>
                開発の経験は多くはありませんが、論理と想像で何かをつくるために学び続けています。
              </p>
              <p>
                趣味は写真撮影とダンス。私生活ではお猫さまのしもべをしています。
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/images/plofile.png"
              alt="Nakai Ryoka"
              width={280}
              height={280}
              className="rounded-lg object-cover shadow-2xl"
            />
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold text-[#6C8FA3] mb-8">
            Key
          </h3>
          <div className="space-y-8">
            {/* Design & UI/UX Section */}
            <div className="paper-outline bg-[#fcf7f8]/50 backdrop-blur-lg p-8 rounded-2xl">
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
            <div className="paper-outline bg-[#fcf7f8]/50 backdrop-blur-lg p-8 rounded-2xl">
              <h4 className="text-lg font-semibold text-[#6C8FA3] mb-6">
                Coding & Development
              </h4>
              {loading ? (
                <div className="flex items-center justify-center py-8">
                  <p className="text-[#4A4F52]">Now Loading</p>
                </div>
              ) : codingLanguages.length > 0 ? (
                <div className="grid grid-cols-3 md:grid-cols-6 gap-8 md:gap-6">
                  {codingLanguages.map((skill) => (
                    <SkillCard key={skill.name} skill={skill} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-[#4A4F52]">GitHubデータ取得に失敗。</p>
                </div>
              )}
            </div>

            {/* Languages & Tools Section */}
            <div className="paper-outline bg-[#fcf7f8]/50 backdrop-blur-lg p-8 rounded-2xl">
              <h4 className="text-lg font-semibold text-[#6C8FA3] mb-6">
                Languages & Tools
              </h4>
              {loading ? (
                <div className="flex items-center justify-center py-8">
                  <p className="text-[#4A4F52]">Now Loading...</p>
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
                  <p className="text-[#4A4F52]">GitHubデータ取得に失敗。</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
