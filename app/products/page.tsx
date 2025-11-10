import Link from "next/link";

export default function Products() {
  const products = [
    {
      id: 1,
      title: "Project Alpha",
      description: "A modern web application showcasing responsive design and user-centered approach.",
      tags: ["React", "Next.js", "Tailwind CSS"],
      status: "Completed",
    },
    {
      id: 2,
      title: "Design System",
      description: "Comprehensive design system with reusable components and design guidelines.",
      tags: ["UI/UX", "Design", "Documentation"],
      status: "Completed",
    },
    {
      id: 3,
      title: "Mobile App",
      description: "Cross-platform mobile application with intuitive interface and smooth interactions.",
      tags: ["Mobile", "UI Design", "Development"],
      status: "In Progress",
    },
    {
      id: 4,
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with modern frontend and robust backend.",
      tags: ["Full-Stack", "React", "Node.js"],
      status: "Planning",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Header/Navigation */}
      <header className="border-b border-gray-200 dark:border-gray-800">
        <nav className="max-w-4xl mx-auto px-6 py-8 flex justify-between items-center">
          <Link href="/">
            <h1 className="text-2xl font-bold text-black dark:text-white hover:opacity-80 transition-opacity">n0ta</h1>
          </Link>
          <ul className="flex gap-8">
            <li>
              <Link
                href="/"
                className="text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="text-gray-900 dark:text-gray-100 font-semibold hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
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
          <h2 className="text-5xl font-bold text-black dark:text-white mb-8">
            Products & Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            A showcase of my recent work and creative projects.
          </p>
        </section>

        {/* Projects Grid */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-gray-50 dark:bg-gray-900 rounded-lg p-8 hover:shadow-lg dark:hover:shadow-2xl transition-shadow"
              >
                {/* Project Header */}
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-black dark:text-white">
                    {product.title}
                  </h3>
                  <span
                    className={`text-sm font-medium px-3 py-1 rounded-full ${
                      product.status === "Completed"
                        ? "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100"
                        : product.status === "In Progress"
                          ? "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100"
                          : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100"
                    }`}
                  >
                    {product.status}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-sm px-3 py-1 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full"
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
        <section className="bg-gray-50 dark:bg-gray-900 rounded-lg p-12 text-center">
          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            これからもどんどん更新ができるよう、成長していきます
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-4">
            I will continue to grow so I can keep updating.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 mt-20">
        <div className="max-w-4xl mx-auto px-6 py-8 text-center text-gray-600 dark:text-gray-400">
          <p>&copy; 2024 Nakai Ryoka. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
