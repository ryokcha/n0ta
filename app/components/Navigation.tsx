"use client";

import Link from "next/link";
import { useState } from "react";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { href: "/about", label: "About", id: "about" },
    { href: "/products", label: "Products", id: "products" },
    { href: "/contact", label: "Contact", id: "contact" },
  ] as const;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="rounded-b-[var(--radius-xl)] bg-[var(--color-bg-main)] shadow-[var(--shadow-soft-sm)]">
        <nav className="max-w-4xl mx-auto px-6 py-8 flex justify-between items-center">
          <Link href="/">
            <h1 className="logo text-2xl font-bold text-[var(--color-text-on-main)] hover:text-[var(--color-bg-accent)] transition-colors">
              n0ta
            </h1>
          </Link>

          {/* PC用メニュー */}
          <ul className="hidden md:flex gap-4">
            {links.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.href}
                  className="text-ui-button inline-flex items-center px-6 py-2 rounded-[var(--radius-full)] bg-[var(--color-bg-main-hover)] text-[var(--color-text-on-main)] transition-colors hover:bg-[var(--color-bg-accent)]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* モバイル用ハンバーガーメニュー */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center"
            aria-label="メニューを開く"
            aria-expanded={isMenuOpen}
          >
            <span
              className={`w-6 h-0.5 bg-[var(--color-text-on-main)] transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-[var(--color-text-on-main)] transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-[var(--color-text-on-main)] transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </nav>
      </header>

      {/* モバイルメニューモーダル */}
      {isMenuOpen && (
        <>
          {/* 背景のオーバーレイ */}
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm md:hidden z-40"
            onClick={closeMenu}
          />
          {/* メニューパネル */}
          <div className="fixed inset-0 flex items-center justify-center md:hidden z-50 pointer-events-none" style={{ alignItems: "center" }}>
            <div
              className="pointer-events-auto bg-[var(--color-bg-main)] shadow-[var(--shadow-soft-lg)] rounded-[var(--radius-xl)] p-8 w-11/12 max-w-sm animate-in fade-in zoom-in-95 duration-300"
              style={{ transform: "translateY(60px)" }}
            >
              <ul className="flex flex-col gap-4">
                {links.map((link) => (
                  <li key={link.id}>
                    <Link
                      href={link.href}
                      className="text-ui-button block px-6 py-3 rounded-[var(--radius-full)] bg-[var(--color-bg-accent)] text-[var(--color-text-on-accent)] transition-colors hover:bg-[var(--color-bg-accent-hover)] text-center"
                      onClick={closeMenu}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  );
}
