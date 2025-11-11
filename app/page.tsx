import Link from "next/link";

export default function Home() {
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
                className="text-gray-900 hover:text-gray-600 transition-colors"
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
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="max-w-4xl mx-auto px-6 py-20">
        <section className="text-center mb-20">
          <h2 className="text-5xl font-bold text-black mb-6">
            Nakai Ryoka
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Portfolio & Creative Work
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/about"
              className="px-8 py-3 bg-black text-white rounded-lg font-medium hover:opacity-80 transition-opacity"
            >
              About Me
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 border-2 border-black text-black rounded-lg font-medium hover:bg-black hover:text-white transition-colors"
            >
              Get In Touch
            </Link>
          </div>
        </section>

        {/* Featured Section */}
        <section className="mb-20">
          <h3 className="text-3xl font-bold text-black mb-4">
            Welcome
          </h3>
          <p className="text-gray-600 mb-4 leading-relaxed">
            I am Nakai Ryoka, a creative professional passionate about building
            beautiful and functional digital experiences.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Explore my portfolio to see my recent projects and works. Feel free
            to reach out if you would like to collaborate or discuss ideas.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-20">
        <div className="max-w-4xl mx-auto px-6 py-8 text-center text-gray-600">
          <p>&copy; 2025 Nakai Ryoka. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
