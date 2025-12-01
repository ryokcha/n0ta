import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <main className="h-screen flex items-center justify-center px-6">
        <section className="text-center">
          <h2 className="text-7xl font-bold text-[#6C8FA3] mb-8">
            Nakai Ryoka
          </h2>
          <p className="text-3xl text-[#4A4F52] mb-12">
            Portfolio
          </p>
          <div className="flex gap-6 justify-center">
            <Link
              href="/about"
              className="px-10 py-4 bg-[#6C8FA3]/80 backdrop-blur-lg text-[#c8d8db] rounded-xl font-medium text-lg hover:bg-[#D5848C] transition-colors"
            >
              About Me
            </Link>
            <Link
              href="/contact"
              className="px-10 py-4 border-2 border-[#6C8FA3] text-[#6C8FA3] rounded-xl font-medium text-lg hover:bg-[#F7E3E5] hover:backdrop-blur-lg transition-colors"
            >
              Get In Touch
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
