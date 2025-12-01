/**
 * Product インターフェース
 *
 * プロダクト情報の型定義。Products ページと詳細ページ（/products/[id]）で使用されます。
 *
 * 使用箇所：
 * - app/products/page.tsx: プロダクト一覧の表示
 * - app/products/[id]/page.tsx: プロダクト詳細ページの表示
 */
export interface Product {
  id: number; // プロダクトのID（詳細ページのURLに使用: /products/{id}）
  title: string; // プロダクトのタイトル
  description: string; // 短い説明（一覧ページで表示）
  fullDescription: string; // 長い説明（詳細ページで表示）
  background: string; // プロジェクトを始めた背景・理由
  teamSize: number; // 制作人数
  role: string; // このプロジェクトでの自分の担当箇所
  technologies: string[]; // 使用した技術スタック
  githubUrl?: string; // GitHubリンク（オプション）
  images?: string[]; // プロダクトの画像パス配列（オプション）
  status: "Completed" | "In Progress" | "Planning"; // プロジェクトのステータス
}

/**
 * プロダクトデータベース
 *
 * このファイルでプロダクト情報を一元管理しています。
 * 新しいプロダクトを追加する際は、このリストに追加してください。
 *
 * 例：
 * {
 *   id: 5,
 *   title: "新しいプロダクト名",
 *   description: "一行での簡単な説明",
 *   fullDescription: "詳細ページに表示される長い説明文",
 *   background: "このプロジェクトを始めた理由や背景",
 *   teamSize: 2,
 *   role: "担当箇所（例：フロントエンド開発、デザイン等）",
 *   technologies: ["React", "Next.js", "TypeScript"],
 *   githubUrl: "https://github.com/ryokcha/project-name",
 *   status: "In Progress"
 * }
 */
export const products: Product[] = [
  // ========================================
  // プロダクト 1: Discord Bot Maker
  // ========================================
  // 一覧ページに表示される順序：ID の降順（新しい順）
  // 詳細ページURL: /products/1
  {
    id: 1,
    title: "Discord Bot Maker",
    description: "Discord Botの作成を簡単にするためのWebアプリケーション。",
    fullDescription: "Discord Bot Makerはノーコード、もしくはローコードでDiscord Botを作成できるWebアプリケーションです。作成の際につまづくポイントを徹底的に排除するために、細部までガイドを入れたり、必要なサイトに簡単にアクセスできる動線を作ったり、ユーザーフレンドリーなWebアプリを目指しました。",
    background: "技育CAMPハッカソンvol.14にて制作したプロジェクトです。初めてのチーム開発で、GitHubをよりよく活用する方法を学びました。",
    teamSize: 2,
    role: "フロントエンド開発、UI/UXデザイン",
    technologies: ["Next.js", "TypeScript", "GitHubOAuth", "Vercel"],
    githubUrl: "https://github.com/dokkiitech/Discordbot-maker",
    status: "Completed",
  },
  // ========================================
  // プロダクト 2: Portfolio
  // ========================================
  // 詳細ページURL: /products/2
  {
    id: 2,
    title: "Portfolio",
    description: "このポートフォリオサイト。デザインの統一感とかわいらしさをこだわりました。",
    fullDescription: "n0taは苗字の「なかい」からトナカイを連想し、ラテン語でトナカイを示す「nota」をもじって名付けました。GitHubから自分の使用している技術をリアルタイムで見られるようにするなど、細部で新しい技術を取り入れるようにしました。自らの活動に応じて随時更新し、私の成長の足跡を残そうと考えています。デザインは若さや可能性を示す青を基調に、女性らしさを演出するために差し色としてピンクを用いています。",
    background: "さまざまな方と出会う機会が増えたため、自分についてもっと知ってもらうためのポートフォリオサイトを作成しました。",
    teamSize: 1,
    role: "プロジェクト全体",
    technologies: ["React", "TypeScript","Github API", "Vercel"],
    githubUrl: "https://github.com/ryokcha/n0ta",
    status: "In Progress",
  },
  // ========================================
  // プロダクト 3: Design System
  // ========================================
  // 詳細ページURL: /products/3
  {
    id: 3,
    title: "Design System",
    description: "私らしさと使いやすさを考えたデザインシステム。",
    fullDescription: "デザインシステムは、私のプロダクトに一貫性を持たせるために作成されたガイドラインとコンポーネントのセットです。これにより、開発プロセスが効率化され、ユーザー体験が向上します。",
    background: "さまざまなプロダクトの開発を行うにつれてデザインを1から考えることに不便さを感じたため、私のプロダクトに一貫性を持たせるデザインシステムを作ろうと考えました。",
    teamSize: 1,
    role: "全体の設計とコンポーネント作成",
    technologies: ["Figma"],
    status: "planning",
  },

];
