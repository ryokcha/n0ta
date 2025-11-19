import Link from "next/link";

interface NavigationProps {
  readonly currentPage?: "home" | "about" | "products" | "contact";
}

export function Navigation({ currentPage }: NavigationProps) {
  const links = [
    { href: "/", label: "Home", id: "home" },
    { href: "/about", label: "About", id: "about" },
    { href: "/products", label: "Products", id: "products" },
    { href: "/contact", label: "Contact", id: "contact" },
  ] as const;

  return (
    <header className="border-b border-[#D9DEE2] dark:border-gray-800">
      <nav className="max-w-4xl mx-auto px-6 py-8 flex justify-between items-center">
        <Link href="/">
          <h1 className="text-2xl font-bold text-[#6C8FA3] dark:text-white hover:opacity-80 transition-opacity">
            n0ta
          </h1>
        </Link>
        <ul className="flex gap-8">
          {links.map((link) => (
            <li key={link.id}>
              <Link
                href={link.href}
                className={`transition-colors ${
                  currentPage === link.id
                    ? "text-[#6C8FA3] dark:text-white font-semibold"
                    : "text-[#6C8FA3] dark:text-gray-100 hover:text-[#4A4F52] dark:hover:text-gray-400"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
