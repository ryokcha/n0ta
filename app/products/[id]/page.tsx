import Link from "next/link";
import { products } from "@/app/data/products";

/**
 * プロダクト詳細ページ
 *
 * 動的ルーティングで個別プロダクト情報を表示します。
 *
 * URL パターン：
 * - /products/1 → Project Alpha の詳細
 * - /products/2 → Design System の詳細
 * - /products/3 → Mobile App の詳細
 * - /products/4 → E-commerce Platform の詳細
 *
 * データソース：
 * - app/data/products.ts から該当プロダクトの情報を取得
 *
 * 表示項目：
 * - プロダクト名、ステータス
 * - 詳細説明（fullDescription）
 * - 作成背景（background）
 * - 制作人数、担当箇所
 * - 使用技術
 * - タグ
 * - GitHub リンク
 */

interface ProductDetailPageProps {
  params: {
    id: string;
  };
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const product = products.find((p) => p.id === parseInt(params.id));

  if (!product) {
    return (
      <div className="min-h-screen bg-[#c8d8db]">
        <header className="border-b border-[#D9DEE2] backdrop-blur-xl">
          <nav className="max-w-4xl mx-auto px-6 py-8 flex justify-between items-center">
            <Link href="/">
              <h1 className="text-2xl font-bold text-[#6C8FA3] hover:text-[#D5848C] transition-colors">
                n0ta
              </h1>
            </Link>
          </nav>
        </header>

        <main className="max-w-4xl mx-auto px-6 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-[#6C8FA3] mb-4">
              プロダクトが見つかりません
            </h1>
            <p className="text-lg text-[#4A4F52] mb-8">
              申し訳ありません。このプロダクトは存在しません。
            </p>
            <Link
              href="/products"
              className="inline-block px-8 py-3 bg-[#6C8FA3] text-[#c8d8db] rounded-xl font-medium hover:bg-[#D5848C] transition-colors"
            >
              プロダクト一覧に戻る
            </Link>
          </div>
        </main>
      </div>
    );
  }

  const statusColor = {
    Completed: "bg-[#D5848C]",
    "In Progress": "bg-[#6C8FA3]",
    Planning: "bg-[#D9DEE2]",
  };

  const statusTextColor = {
    Completed: "text-[#c8d8db]",
    "In Progress": "text-[#c8d8db]",
    Planning: "text-[#4A4F52]",
  };

  return (
    <div className="min-h-screen bg-[#c8d8db]">
      {/* Header/Navigation */}
      <header className="border-b border-[#D9DEE2] backdrop-blur-xl">
        <nav className="max-w-4xl mx-auto px-6 py-8 flex justify-between items-center">
          <Link href="/">
            <h1 className="text-2xl font-bold text-[#6C8FA3] hover:text-[#D5848C] transition-colors">
              n0ta
            </h1>
          </Link>
          <Link
            href="/products"
            className="text-[#6C8FA3] hover:text-[#D5848C] transition-colors flex items-center gap-2"
          >
            <span>←</span>
            <span>プロダクト一覧</span>
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-20">
        {/* Product Header */}
        <section className="mb-12">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-5xl font-bold text-[#6C8FA3] mb-4">
                {product.title}
              </h1>
              <p className="text-xl text-[#4A4F52] leading-relaxed mb-6">
                {product.description}
              </p>
            </div>
            <span
              className={`text-sm font-medium px-4 py-2 rounded-full whitespace-nowrap ${
                statusColor[product.status]
              } ${statusTextColor[product.status]}`}
            >
              {product.status}
            </span>
          </div>

          {/* GitHub Link Button */}
          {product.githubUrl && (
            <a
              href={product.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#6C8FA3]/80 backdrop-blur-lg text-[#c8d8db] rounded-xl font-medium hover:bg-[#D5848C] transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.343-3.369-1.343-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.547 2.91 1.186.092-.923.35-1.546.636-1.903-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0110 4.817c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.137 18.193 20 14.44 20 10.017 20 4.484 15.522 0 10 0z"
                  clipRule="evenodd"
                />
              </svg>
              GitHub で見る
            </a>
          )}
        </section>

        {/* Full Description */}
        <section className="mb-12">
          <div className="bg-[#fcf7f8]/50 backdrop-blur-lg rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-[#6C8FA3] mb-4">
              プロジェクト概要
            </h2>
            <p className="text-[#4A4F52] leading-relaxed">
              {product.fullDescription}
            </p>
          </div>
        </section>

        {/* Project Info Grid */}
        <section className="mb-12 grid md:grid-cols-2 gap-8">
          {/* Background */}
          <div className="bg-[#fcf7f8]/50 backdrop-blur-lg rounded-2xl p-8">
            <h3 className="text-xl font-bold text-[#6C8FA3] mb-4">
              作成背景
            </h3>
            <p className="text-[#4A4F52] leading-relaxed">
              {product.background}
            </p>
          </div>

          {/* Team & Role */}
          <div className="bg-[#fcf7f8]/50 backdrop-blur-lg rounded-2xl p-8">
            <h3 className="text-xl font-bold text-[#6C8FA3] mb-6">
              プロジェクト情報
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-semibold text-[#6C8FA3] mb-1">
                  制作人数
                </p>
                <p className="text-[#4A4F52]">{product.teamSize} 人</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#6C8FA3] mb-1">
                  担当箇所
                </p>
                <p className="text-[#4A4F52]">{product.role}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="mb-12">
          <div className="bg-[#fcf7f8]/50 backdrop-blur-lg rounded-2xl p-8">
            <h3 className="text-xl font-bold text-[#6C8FA3] mb-6">
              使用技術
            </h3>
            <div className="flex flex-wrap gap-3">
              {product.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-[#D9DEE2] text-[#4A4F52] rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Tags */}
        <section className="mb-12">
          <div className="bg-[#fcf7f8]/50 backdrop-blur-lg rounded-2xl p-8">
            <h3 className="text-xl font-bold text-[#6C8FA3] mb-6">
              タグ
            </h3>
            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-[#6C8FA3] text-[#c8d8db] rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="mt-16 pt-12 border-t border-[#D9DEE2]">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#6C8FA3]/80 backdrop-blur-lg text-[#c8d8db] rounded-xl font-medium hover:bg-[#D5848C] transition-colors"
          >
            <span>←</span>
            <span>プロダクト一覧に戻る</span>
          </Link>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#D9DEE2] mt-20">
        <div className="max-w-4xl mx-auto px-6 py-8 text-center text-[#4A4F52]">
          <p>&copy; 2025 Nakai Ryoka. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
