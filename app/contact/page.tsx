import Link from "next/link";

export default function Contact() {
  const socialLinks = [
    {
      name: "Twitter",
      url: "https://x.com/Nakai_0r314",
      icon: "𝕏",
      color: "hover:text-black dark:hover:text-white",
    },
    {
      name: "GitHub",
      url: "https://github.com/ryokcha",
      icon: "🐙",
      color: "hover:text-black dark:hover:text-white",
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
                className="text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-gray-900 dark:text-gray-100 font-semibold hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
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
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Feel free to reach out and connect with me on social media.
          </p>
        </section>

        {/* Contact Information */}
        <section className="mb-16">
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-12">
            <h3 className="text-3xl font-bold text-black dark:text-white mb-8">
              Connect With Me
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 leading-relaxed">
              I am always interested in hearing about new projects and collaborations. Whether you have a question or just want to say hello, feel free to get in touch through the links below.
            </p>

            {/* Social Links */}
            <div className="space-y-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 border-2 border-gray-200 dark:border-gray-700 rounded-lg hover:border-black dark:hover:border-white transition-colors group"
                >
                  <span className="text-4xl group-hover:scale-110 transition-transform">
                    {link.icon}
                  </span>
                  <div>
                    <h4 className="text-lg font-semibold text-black dark:text-white">
                      {link.name}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {link.url.replace("https://", "")}
                    </p>
                  </div>
                  <span className="ml-auto text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                    →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Direct Message Section */}
        <section>
          <h3 className="text-3xl font-bold text-black dark:text-white mb-8">
            Send a Message
          </h3>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-black dark:text-white mb-2">
                Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-black dark:text-white focus:outline-none focus:border-black dark:focus:border-white transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-black dark:text-white mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-black dark:text-white focus:outline-none focus:border-black dark:focus:border-white transition-colors"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-black dark:text-white mb-2">
                Message
              </label>
              <textarea
                rows={6}
                className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-black dark:text-white focus:outline-none focus:border-black dark:focus:border-white transition-colors resize-none"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              className="w-full px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg font-medium hover:opacity-80 transition-opacity"
            >
              Send Message
            </button>
          </form>
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
