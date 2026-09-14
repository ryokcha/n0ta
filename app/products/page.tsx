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
      <div className="container container--medium py-20">
        {/* Page Title */}
        <section className="mb-16">
          <h2 className="text-heading-display mb-8">
            Products & Projects
          </h2>
          <p className="text-body-large text-[var(--color-text-secondary)]">
            What did I do? If you wanna know, check it out now.
          </p>
        </section>

        {/* Projects Grid */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="block h-full"
              >
                <div className="paper-outline card card--elevated card--fluid h-full transition-shadow hover:shadow-[var(--shadow-soft-lg)]">
                  {/* Project Header */}
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="card__title">
                      {product.title}
                    </h3>
                    <span
                      className={`text-ui-caption px-3 py-1 rounded-[var(--radius-full)] whitespace-nowrap ${
                        product.status === "Completed"
                          ? "bg-[var(--color-bg-accent)] text-[var(--color-text-on-accent)]"
                          : product.status === "In Progress"
                            ? "bg-[var(--color-bg-main)] text-[var(--color-text-on-main)]"
                            : "bg-[var(--color-bg-surface-muted)] text-[var(--color-text-secondary)]"
                      }`}
                    >
                      {product.status}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="card__body">
                    {product.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
