import Link from "next/link";

export default function Products() {
  const products = [
    {
      id: 1,
      title: "Project Alpha",
      description: "レスポンシブデザインとユーザー中心のアプローチを展示している最新のWebアプリケーション。",
      tags: ["React", "Next.js", "Tailwind CSS"],
      status: "Completed",
    },
    {
      id: 2,
      title: "Design System",
      description: "再利用可能なコンポーネントとデザインガイドラインを備えた包括的なデザインシステム。",
      tags: ["UI/UX", "Design", "Documentation"],
      status: "Completed",
    },
    {
      id: 3,
      title: "Mobile App",
      description: "直感的なインターフェースとスムーズなインタラクションを備えたクロスプラットフォームモバイルアプリケーション。",
      tags: ["Mobile", "UI Design", "Development"],
      status: "In Progress",
    },
    {
      id: 4,
      title: "E-commerce Platform",
      description: "最新のフロントエンドとロバストなバックエンドを備えたフルスタックEコマースソリューション。",
      tags: ["Full-Stack", "React", "Node.js"],
      status: "Planning",
    },
  ].sort((a, b) => b.id - a.id);

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="border-b border-gray-200">
        <nav className="max-w-4xl mx-auto px-6 py-8 flex justify-between items-center">
          <Link href="/">
            <h1 className="text-2xl font-bold text-black hover:opacity-80 transition-opacity">n0ta</h1>
          </Link>
          <ul className="flex gap-8 items-center">
            <li>
              <Link
                href="/about"
                className="text-gray-900 hover:text-gray-600 transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="text-gray-900 font-semibold hover:text-gray-600 transition-colors"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-gray-900 hover:text-gray-600 transition-colors"
              >
                Contact
              </Link>
            </li>
            <li>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-20">
        {/* Page Title */}
        <section className="mb-16">
          <h2 className="text-5xl font-bold text-black mb-8">
            Products & Projects
          </h2>
          <p className="text-xl text-gray-600">
            A showcase of my recent work and creative projects.
          </p>
        </section>

        {/* Projects Grid */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow"
              >
                {/* Project Header */}
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-black">
                    {product.title}
                  </h3>
                  <span
                    className={`text-sm font-medium px-3 py-1 rounded-full ${
                      product.status === "Completed"
                        ? "bg-green-100 text-green-800"
                        : product.status === "In Progress"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-gray-200 text-gray-800"
                    }`}
                  >
                    {product.status}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-sm px-3 py-1 bg-gray-200 text-gray-800 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Closing Message */}
        <section className="bg-gray-50 rounded-lg p-12 text-center">
          <p className="text-xl text-gray-700 leading-relaxed">
            これからもどんどん更新ができるよう、成長していきます
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-20">
        <div className="max-w-4xl mx-auto px-6 py-8 text-center text-gray-600">
          <p>&copy; 2024 Nakai Ryoka. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
