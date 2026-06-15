import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <main className="min-h-screen flex items-center justify-center px-5 py-8 relative overflow-hidden md:px-8">
        <section
          className="paper-outline paper-outline-home home-crayon-card text-center relative z-10 rounded-3xl px-6 py-[2.4rem] w-full md:w-[70%] md:px-10 md:py-16 lg:px-12 lg:py-[4.8rem]"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-[#6C8FA3] mb-[1.5rem] md:mb-6">
            Nakai Ryoka
          </h2>
          <p className="text-2xl md:text-3xl text-[#4A4F52] mb-[2.4rem] md:mb-10">
            Portfolio
          </p>
          <div className="flex gap-4 md:gap-6 justify-center flex-wrap">
            <Link
              href="/about"
              className="px-10 py-4 bg-[#6C8FA3]/80 backdrop-blur-lg text-[#c8d8db] rounded-xl font-medium text-lg hover:bg-[#567282] transition-colors"
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
