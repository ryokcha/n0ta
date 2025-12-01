import Link from "next/link";
import { DotsBackground } from "@/app/components/DotsBackground";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <main className="h-screen flex items-center justify-center px-6 relative overflow-hidden">
        <DotsBackground />
        <section className="text-center relative z-10 bg-white/30 backdrop-blur-md rounded-3xl px-12 py-16 w-full md:w-[70%]">
          <h2 className="text-7xl font-bold text-[#6C8FA3] mb-8">
            Nakai Ryoka
          </h2>
          <p className="text-3xl text-[#4A4F52] mb-12">
            Portfolio
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
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
