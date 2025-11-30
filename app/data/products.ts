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
  // プロダクト 1: Project Alpha
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
  // プロダクト 2: Design System
  // ========================================
  // 詳細ページURL: /products/2
  {
    id: 2,
    title: "Design System",
    description: "再利用可能なコンポーネントとデザインガイドラインを備えた包括的なデザインシステム。",
    fullDescription: "Design Systemは、複数のプロジェクト間で一貫したデザイン言語を実現するために開発された包括的なコンポーネントライブラリとデザインガイドラインです。Figmaでの設計から実装まで、デザインと開発の効率化を実現しています。",
    background: "複数のプロジェクトで同じUIコンポーネントを何度も作成している課題に直面し、統一的で保守性の高いデザインシステムの必要性を感じて開発しました。",
    teamSize: 1,
    role: "デザインシステム設計、Figmaドキュメント作成、コンポーネント実装",
    technologies: ["Figma", "React", "Storybook", "TypeScript", "CSS-in-JS"],
    githubUrl: "https://github.com/ryokcha/design-system",
    status: "Completed",
  },
  // ========================================
  // プロダクト 3: Mobile App
  // ========================================
  // 詳細ページURL: /products/3
  {
    id: 3,
    title: "Mobile App",
    description: "直感的なインターフェースとスムーズなインタラクションを備えたクロスプラットフォームモバイルアプリケーション。",
    fullDescription: "Mobile Appは、iOSとAndroidの両プラットフォームで動作するクロスプラットフォームモバイルアプリケーションです。直感的なナビゲーションとスムーズなアニメーションにより、ユーザーエンゲージメントを高めています。",
    background: "モバイルアプリケーション開発スキルを習得し、幅広いデバイスで動作するアプリケーションの設計・実装方法を学ぶために開発しています。",
    teamSize: 2,
    role: "UI/UXデザイン、アプリケーション開発、ユーザーテスト",
    technologies: ["React Native", "Expo", "TypeScript", "Redux", "Firebase"],
    status: "In Progress",
  },
  // ========================================
  // プロダクト 4: E-commerce Platform
  // ========================================
  // 詳細ページURL: /products/4
  {
    id: 4,
    title: "E-commerce Platform",
    description: "最新のフロントエンドとロバストなバックエンドを備えたフルスタックEコマースソリューション。",
    fullDescription: "E-commerce Platformは、完全なショッピング体験を提供するフルスタックEコマースソリューションです。商品管理、ユーザー認証、決済機能、注文管理など、実際のEコマースビジネスに必要な機能を実装予定です。",
    background: "フルスタック開発スキルを習得し、複雑なビジネスロジックを伴うアプリケーション開発の経験を積むために計画されたプロジェクトです。",
    teamSize: 3,
    role: "アーキテクチャ設計、フロントエンド開発、バックエンドAPI設計",
    technologies: ["Next.js", "Node.js", "Express", "PostgreSQL", "Stripe", "Docker"],
    githubUrl: "https://github.com/ryokcha/ecommerce-platform",
    status: "Planning",
  },


];
