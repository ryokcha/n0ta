import Link from "next/link";

export default function About() {
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
                className="text-gray-900 dark:text-gray-100 font-semibold hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
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
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Learning and growing through creative work.
          </p>
        </section>

        {/* Profile Section */}
        <section className="mb-16 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-3xl font-bold text-black dark:text-white mb-6">
              Nakai Ryoka
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              I am a creative professional dedicated to building beautiful, functional digital experiences. With a passion for design and development, I strive to create work that is both aesthetically pleasing and user-focused.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              My journey in the creative field has taught me the importance of continuous learning and growth. I believe in the power of collaboration and bringing ideas to life through thoughtful execution.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              When I am not working on projects, I enjoy exploring new technologies, experimenting with design trends, and contributing to the creative community.
            </p>
          </div>
          <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 rounded-lg p-8 flex items-center justify-center min-h-80">
            <div className="text-center">
              <div className="text-8xl mb-4">✨</div>
              <p className="text-gray-600 dark:text-gray-400 font-medium">
                Nakai Ryoka
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold text-black dark:text-white mb-8">
            Skills & Expertise
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-black dark:text-white mb-4">
                Design
              </h4>
              <ul className="text-gray-600 dark:text-gray-400 space-y-2">
                <li>• UI/UX Design</li>
                <li>• Visual Design</li>
                <li>• Responsive Design</li>
                <li>• Design Systems</li>
              </ul>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-black dark:text-white mb-4">
                Development
              </h4>
              <ul className="text-gray-600 dark:text-gray-400 space-y-2">
                <li>• Frontend Development</li>
                <li>• React / Next.js</li>
                <li>• TypeScript</li>
                <li>• Tailwind CSS</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section>
          <h3 className="text-3xl font-bold text-black dark:text-white mb-8">
            Experience
          </h3>
          <div className="space-y-8">
            <div className="border-l-4 border-black dark:border-white pl-6 py-2">
              <h4 className="text-xl font-semibold text-black dark:text-white">
                Creative Professional
              </h4>
              <p className="text-gray-600 dark:text-gray-400">2023 - Present</p>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Developing and designing digital solutions with focus on user experience and modern technologies.
              </p>
            </div>
            <div className="border-l-4 border-black dark:border-white pl-6 py-2">
              <h4 className="text-xl font-semibold text-black dark:text-white">
                Growing & Learning
              </h4>
              <p className="text-gray-600 dark:text-gray-400">Ongoing</p>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Continuously improving skills and exploring new technologies to stay updated with industry trends.
              </p>
            </div>
          </div>
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
