# n0ta Portfolio

中井涼日（なかいりょうか/Nakai Ryoka）のポートフォリオサイトです。

## 🎨 デザイン

- **カラースキーム**:
  - メイン: `#6C8FA3`
  - 背景: `#F4F6F7`
  - アクセント: `#D5848C`
  - テキスト: `#4A4F52`
  - ボーダー: `#D9DEE2`

- **デザイン原則**: Apple Liquid Glass（ブラー効果、丸みのあるコーナー、透明度）
- **レスポンシブ**: モバイル対応（Tailwind CSS）
- **テクスチャ**: スケッチブック風のざらざらした質感

## 📁 プロジェクト構造

```
app/
├── components/
│   ├── Navigation.tsx       # ナビゲーションヘッダー
│   └── Footer.tsx           # フッター
├── data/
│   └── products.ts          # プロダクトデータ一元管理
├── products/
│   ├── page.tsx             # プロダクト一覧ページ
│   └── [id]/
│       └── page.tsx         # プロダクト詳細ページ（動的ルーティング）
├── about/
│   └── page.tsx             # About ページ
├── contact/
│   └── page.tsx             # Contact ページ
├── page.tsx                 # ホームページ
├── globals.css              # グローバルスタイル
└── layout.tsx               # レイアウト
```

## 🎯 ページ一覧

| ページ | URL | 説明 |
|-------|-----|------|
| ホーム | `/` | ポートフォリオのトップページ |
| About | `/about` | 自己紹介、スキル、経歴 |
| Products | `/products` | プロダクト一覧 |
| Products 詳細 | `/products/{id}` | 個別プロダクトの詳細情報 |
| Contact | `/contact` | SNS・メール連絡先 |

## 📦 プロダクト管理ガイド

### プロダクトデータの管理場所

すべてのプロダクト情報は **`app/data/products.ts`** で一元管理されています。

```typescript
export interface Product {
  id: number;                    // プロダクトID（詳細ページURL用）
  title: string;                 // プロダクト名
  description: string;           // 短い説明（一覧ページ用）
  fullDescription: string;       // 長い説明（詳細ページ用）
  background: string;            // プロジェクト開始の背景
  teamSize: number;              // 制作人数
  role: string;                  // 担当箇所
  technologies: string[];        // 使用技術
  githubUrl?: string;            // GitHub リンク（オプション）
  tags: string[];                // タグ
  status: "Completed" | "In Progress" | "Planning";
}
```

### 新しいプロダクトを追加する方法

#### ステップ 1: `app/data/products.ts` を開く

#### ステップ 2: 新しいプロダクトオブジェクトを追加

ファイルの末尾に下記のテンプレートを参考に追加してください：

```typescript
// ========================================
// プロダクト 5: 新しいプロジェクト名
// ========================================
// 詳細ページURL: /products/5
{
  id: 5,
  title: "新しいプロダクト名",
  description: "一覧ページで表示される短い説明文（1-2行程度）",
  fullDescription: "詳細ページで表示される長い説明文。プロジェクトについて詳しく説明してください。複数段落可。",
  background: "このプロジェクトを始めた理由や背景。何を学ぶため、何を達成するためのプロジェクトか。",
  teamSize: 2,
  role: "このプロジェクトでの自分の役割。例：フロントエンド開発、UI/UXデザイン、プロジェクト管理",
  technologies: ["React", "Next.js", "TypeScript"],
  githubUrl: "https://github.com/ryokcha/project-name", // オプション（なくても可）
  tags: ["React", "Web", "Design"],
  status: "In Progress" // "Completed" | "In Progress" | "Planning"
},
```

#### ステップ 3: 詳細ページで確認

追加後、自動的に以下のURLでアクセス可能になります：
```
/products/5
```

### プロダクト情報の各フィールド説明

| フィールド | 説明 | 例 |
|-----------|------|-----|
| `id` | 一意のID（詳細ページのURL に使用） | `5` |
| `title` | プロダクト名 | `"E-commerce Platform"` |
| `description` | 一覧ページで表示される短い説明 | `"最新のフロントエンドとロバストなバックエンドを備えたフルスタックEコマースソリューション。"` |
| `fullDescription` | 詳細ページで表示される長い説明 | `"E-commerce Platformは、完全なショッピング体験を...複数段落可。"` |
| `background` | プロジェクト開始の背景・理由 | `"フルスタック開発スキルを習得し、複雑なビジネスロジックを..."` |
| `teamSize` | 制作に関わった人数 | `3` |
| `role` | このプロジェクトでの自分の役割 | `"アーキテクチャ設計、フロントエンド開発、バックエンドAPI設計"` |
| `technologies` | 使用した技術のリスト | `["Next.js", "Node.js", "PostgreSQL"]` |
| `githubUrl` | GitHub リポジトリのURL（オプション） | `"https://github.com/ryokcha/ecommerce-platform"` |
| `tags` | タグ（複数可） | `["Full-Stack", "React", "Node.js"]` |
| `status` | プロジェクトのステータス | `"Completed"` \| `"In Progress"` \| `"Planning"` |

### プロダクト情報の表示箇所

```
一覧ページ（/products）
├── title              ✓
├── description        ✓
├── tags               ✓
└── status             ✓

詳細ページ（/products/{id}）
├── title              ✓
├── description        ✓
├── fullDescription    ✓
├── background         ✓
├── teamSize           ✓
├── role               ✓
├── technologies       ✓
├── githubUrl          ✓（ボタンとして表示）
├── tags               ✓
└── status             ✓
```

### プロダクト表示順序

- **一覧ページ**: ID の降順（新しい順）で表示されます
- **詳細ページ**: URL の ID に基づいて表示されます（例：`/products/1`）

## 🚀 技術スタック

- **フレームワーク**: Next.js
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **アイコン**: React Icons
- **フォント**: Geist (Google Fonts)

## 🎭 Liquid Glass デザイン実装

サイト全体に Apple Liquid Glass の設計原則を適用しています：

### コーナーの丸み（Rounded Corners）
- ボタン: `rounded-xl` (12px)
- カード: `rounded-2xl` (16px)
- 大きなセクション: `rounded-3xl` (24px)

### ブラー効果（Backdrop Blur）
- ヘッダー: `backdrop-blur-xl`
- カード: `backdrop-blur-lg`
- ボタン: `backdrop-blur-lg`

### 透明度（Opacity）
- カード背景: `/50` 修飾子（50% 透明）
- 白い背景: `/50` 修飾子（50% 透明）

## 📝 コメント例

コード内に詳細なコメントが記載されています。以下のファイルを参照：

- `app/data/products.ts` - プロダクトデータの構造と追加方法
- `app/products/page.tsx` - 一覧ページの説明
- `app/products/[id]/page.tsx` - 詳細ページの説明

## 🔄 データフロー

```
app/data/products.ts（データ一元管理）
    ↓
    ├→ app/products/page.tsx（一覧表示）
    │   └→ ユーザーがクリック
    │       ↓
    └→ app/products/[id]/page.tsx（詳細表示）
```

## 📱 レスポンシブ対応

すべてのページはモバイル・タブレット・デスクトップに対応しています。
Tailwind CSS の `md:` ブレークポイントを使用して、768px 以上での異なるレイアウトを実装しています。

## 🎨 カラーリファレンス

カラーは CSS 変数として `app/globals.css` で管理されています：

```css
:root {
  --background: #F4F6F7;      /* 背景色 */
  --foreground: #6C8FA3;      /* メインテキスト色 */
  --primary: #6C8FA3;         /* プライマリボタン色 */
  --accent: #D5848C;          /* アクセント色 */
  --text-secondary: #4A4F52;  /* サブテキスト色 */
  --borders: #D9DEE2;         /* ボーダー色 */
  --shadow: rgba(0,0,0,0.06); /* シャドウ色 */
}
```

## 💡 開発時の注意点

1. **プロダクト ID は一意である必要があります** - 新しいプロダクトを追加する際は、使用されていない ID を使用してください

2. **description は短く** - 一覧ページで複数行にならないよう、1-2 行程度にしてください

3. **technologies は配列です** - 複数の技術を含めることができます

4. **status の値は正確に** - `"Completed"` \| `"In Progress"` \| `"Planning"` のいずれかを使用してください

5. **githubUrl はオプション** - GitHub リンクがない場合は、このフィールドを削除してください

## 📞 連絡先

- **Twitter**: https://x.com/Nakai_0r314
- **GitHub**: https://github.com/ryokcha
- **Email**: 922ryouka@gmail.com

---

**最終更新**: 2025年11月20日
