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
    <div className="min-h-screen bg-[#F4F6F7]">
      {/* Header/Navigation */}
      <header className="border-b border-[#D9DEE2] backdrop-blur-md">
        <nav className="max-w-4xl mx-auto px-6 py-8 flex justify-between items-center">
          <Link href="/">
            <h1 className="text-2xl font-bold text-[#6C8FA3] hover:text-[#D5848C] transition-colors">n0ta</h1>
          </Link>
          <ul className="flex gap-4 items-center">
            <li>
              <Link
                href="/about"
                className="px-6 py-2 bg-[#6C8FA3] text-[#F4F6F7] rounded-full font-medium hover:bg-[#D5848C] transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="px-6 py-2 bg-[#6C8FA3] text-[#F4F6F7] rounded-full font-medium hover:bg-[#D5848C] transition-colors"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="px-6 py-2 bg-[#6C8FA3] text-[#F4F6F7] rounded-full font-medium hover:bg-[#D5848C] transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>

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
              <div
                key={product.id}
                className="bg-[#E9EEF0] rounded-lg p-8 hover:shadow-lg transition-shadow"
              >
                {/* Project Header */}
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-[#6C8FA3]">
                    {product.title}
                  </h3>
                  <span
                    className={`text-sm font-medium px-3 py-1 rounded-full ${
                      product.status === "Completed"
                        ? "bg-[#D5848C] text-[#F4F6F7]"
                        : product.status === "In Progress"
                          ? "bg-[#6C8FA3] text-[#F4F6F7]"
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
            ))}
          </div>
        </section>

        {/* Closing Message */}
        <section className="bg-[#E9EEF0] rounded-lg p-12 text-center">
          <p className="text-xl text-[#4A4F52] leading-relaxed">
            Un roseau pensant
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#D9DEE2] mt-20">
        <div className="max-w-4xl mx-auto px-6 py-8 text-center text-[#4A4F52]">
          <p>&copy; 2024 Nakai Ryoka. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
