"use client";

import { FaTwitter, FaGithub } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="rounded-t-3xl bg-[#567282]/80 backdrop-blur-lg dark:bg-[#567282]/80 min-h-[50vh] flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-6 py-12 text-center">
        <h1 className="footer-title text-4xl font-bold text-[#c8d8db] mb-4">
          ご覧いただきありがとうございました
        </h1>
        <p className="text-xl text-[#c8d8db] mb-8">
          Thank you for taking time for me!
        </p>

        {/* SNS Links */}
        <div className="flex gap-6 justify-center mb-8">
          <a
            href="https://twitter.com/Nakai_0r314"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[#c8d8db] text-[#567282] hover:bg-[#D5848C] hover:text-white transition-colors"
            aria-label="Twitter"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://github.com/ryokcha"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[#c8d8db] text-[#567282] hover:bg-[#D5848C] hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}
