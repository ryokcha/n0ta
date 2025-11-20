import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <main className="max-w-4xl mx-auto px-6 py-20">
        <section className="text-center mb-20">
          <h2 className="text-5xl font-bold text-[#6C8FA3] mb-6">
            Nakai Ryoka
          </h2>
          <p className="text-xl text-[#4A4F52] mb-8">
            Portfolio & Creative Work
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/about"
              className="px-8 py-3 bg-[#6C8FA3]/80 backdrop-blur-lg text-[#F4F6F7] rounded-xl font-medium hover:bg-[#D5848C] transition-colors"
            >
              About Me
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 border-2 border-[#6C8FA3] text-[#6C8FA3] rounded-xl font-medium hover:bg-[#F7E3E5] hover:backdrop-blur-lg transition-colors"
            >
              Get In Touch
            </Link>
          </div>
        </section>

        {/* Featured Section */}
        <section className="mb-20 text-center">
          <h3 className="text-3xl font-bold text-[#6C8FA3] mb-4">
            Welcome
          </h3>
          <p className="text-[#4A4F52] mb-4 leading-relaxed">
            I am Nakai Ryoka, a creative professional passionate about building
            beautiful and functional digital experiences.
          </p>
          <p className="text-[#4A4F52] leading-relaxed">
            Explore my portfolio to see my recent projects and works. Feel free
            to reach out if you would like to collaborate or discuss ideas.
          </p>
        </section>
      </main>
    </>
  );
}
