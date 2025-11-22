import Link from "next/link";
import { products as allProducts } from "@/app/data/products";

/**
 * Products ページ
 *
 * プロダクト一覧を表示するページです。
 * データ管理：app/data/products.ts で一元管理
 * 詳細ページ：各プロダクトをクリックで /products/{id} に遷移
 */
export default function Products() {
  // ID の降順（新しい順）でソート
  const products = allProducts.sort((a, b) => b.id - a.id);

  return (
    <>
      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-20">
        {/* Page Title */}
        <section className="mb-16">
          <h2 className="text-5xl font-bold text-[#6C8FA3] mb-8">
            Products & Projects
          </h2>
          <p className="text-xl text-[#4A4F52]">
            A showcase of my recent work and creative projects.
          </p>
        </section>

        {/* Projects Grid */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="block"
              >
                <div className="bg-[#fcf7f8]/50 backdrop-blur-lg rounded-2xl p-8 hover:shadow-lg transition-shadow cursor-pointer h-full hover:bg-[#fcf7f8]/70">
                  {/* Project Header */}
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-[#6C8FA3]">
                      {product.title}
                    </h3>
                    <span
                      className={`text-sm font-medium px-3 py-1 rounded-full ${
                        product.status === "Completed"
                          ? "bg-[#D5848C] text-[#c8d8db]"
                          : product.status === "In Progress"
                            ? "bg-[#6C8FA3] text-[#c8d8db]"
                            : "bg-[#D9DEE2] text-[#4A4F52]"
                      }`}
                    >
                      {product.status}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-[#4A4F52] mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {product.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-sm px-3 py-1 bg-[#D9DEE2] text-[#4A4F52] rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Closing Message */}
        <section className="bg-[#fcf7f8]/50 backdrop-blur-lg rounded-3xl p-12 text-center">
          <h2 className="text-4xl text-[#6C8FA3] leading-relaxed">
            Un roseau pensant
          </h2>
        </section>
      </main>
    </>
  );
}
