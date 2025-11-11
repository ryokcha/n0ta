import Link from "next/link";

export default function About() {
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
                className="text-gray-900 font-semibold hover:text-gray-600 transition-colors"
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
            About Me
          </h2>
          <p className="text-xl text-gray-600">
            Learning and growing through creative work.
          </p>
        </section>

        {/* Profile Section */}
        <section className="mb-16 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-3xl font-bold text-black mb-6">
              Nakai Ryoka
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              美しく機能的なデジタル体験を構築することに情熱を持つクリエイティブプロフェッショナルです。デザインと開発に対する強い関心を持ちながら、美学的に優れ、ユーザーに焦点を当てた作品を作成することを目指しています。
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              クリエイティブな分野での経験を通じて、継続的な学習と成長の重要性を学びました。協力の力を信じており、思慮深い実行を通じてアイデアを現実のものにすることに力を入れています。
            </p>
            <p className="text-gray-600 leading-relaxed">
              プロジェクトに取り組んでいないときは、新しいテクノロジーの探索、デザイントレンドの実験、そしてクリエイティブコミュニティへの貢献を楽しんでいます。
            </p>
          </div>
          <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg p-8 flex items-center justify-center min-h-80">
            <div className="text-center">
              <div className="text-8xl mb-4">✨</div>
              <p className="text-gray-600 font-medium">
                Nakai Ryoka
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold text-black mb-8">
            Skills & Expertise
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-black mb-4">
                Design
              </h4>
              <ul className="text-gray-600 space-y-2">
                <li>• UI/UX Design</li>
                <li>• Visual Design</li>
                <li>• Responsive Design</li>
                <li>• Design Systems</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-black mb-4">
                Development
              </h4>
              <ul className="text-gray-600 space-y-2">
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
          <h3 className="text-3xl font-bold text-black mb-8">
            Experience
          </h3>
          <div className="space-y-8">
            <div className="border-l-4 border-black pl-6 py-2">
              <h4 className="text-xl font-semibold text-black">
                Creative Professional
              </h4>
              <p className="text-gray-600">2023 - 現在</p>
              <p className="text-gray-600 mt-2">
                ユーザー体験と最新テクノロジーに焦点を当てた、デジタルソリューションの開発とデザインを行っています。
              </p>
            </div>
            <div className="border-l-4 border-black pl-6 py-2">
              <h4 className="text-xl font-semibold text-black">
                成長と学習
              </h4>
              <p className="text-gray-600">継続中</p>
              <p className="text-gray-600 mt-2">
                業界トレンドに対応するため、スキルを継続的に向上させ、新しいテクノロジーを探索しています。
              </p>
            </div>
          </div>
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
