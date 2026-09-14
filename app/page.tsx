import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <main className="min-h-screen flex items-center justify-center px-5 py-8 relative overflow-hidden md:px-8">
        <section
          className="paper-outline paper-outline-home home-crayon-card text-center relative z-10 rounded-[var(--radius-xl)] px-6 py-[2.4rem] w-full md:w-[70%] md:px-10 md:py-16 lg:px-12 lg:py-[4.8rem]"
        >
          <h2 className="text-heading-display text-[var(--color-bg-main)] mb-[1.5rem] md:mb-6">
            Nakai Ryoka
          </h2>
          <p className="text-body-large mb-[2.4rem] md:mb-10">
            Portfolio
          </p>
          <div className="flex gap-4 md:gap-6 justify-center flex-wrap">
            <Link
              href="/about"
              className="btn btn--lg btn--primary"
            >
              About Me
            </Link>
            <Link
              href="/contact"
              className="btn btn--lg btn--outline"
            >
              Get In Touch
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
