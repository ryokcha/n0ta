"use client";

import { FaTwitter, FaGithub, FaFacebook } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="rounded-t-[var(--radius-xl)] bg-[var(--color-bg-main)] min-h-[50vh] flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-6 py-12 text-center">
        <h1 className="footer-title font-bold text-[var(--color-text-on-main)] mb-4 text-[clamp(1.5rem,5vw,2.5rem)] leading-relaxed">
          ご覧いただき
          <br />
          ありがとうございました
        </h1>
        <p className="text-body-large text-[var(--color-text-on-main)] mb-8">
          Thank you for visiting!
        </p>

        {/* SNS Links */}
        <div className="flex gap-6 justify-center mb-8">
          <a
            href="https://twitter.com/Nakai_0r314"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-12 h-12 rounded-[var(--radius-md)] bg-[var(--color-bg-surface)] text-[var(--color-bg-main)] transition-colors hover:bg-[var(--color-bg-accent)] hover:text-[var(--color-text-on-accent)]"
            aria-label="Twitter"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://www.facebook.com/ryokcha"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-12 h-12 rounded-[var(--radius-md)] bg-[var(--color-bg-surface)] text-[var(--color-bg-main)] transition-colors hover:bg-[var(--color-bg-accent)] hover:text-[var(--color-text-on-accent)]"
            aria-label="Facebook"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://github.com/ryokcha"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-12 h-12 rounded-[var(--radius-md)] bg-[var(--color-bg-surface)] text-[var(--color-bg-main)] transition-colors hover:bg-[var(--color-bg-accent)] hover:text-[var(--color-text-on-accent)]"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}
