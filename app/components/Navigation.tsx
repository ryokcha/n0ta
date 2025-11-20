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
    <header className="rounded-b-3xl bg-[#F4F6F7]/80 backdrop-blur-xl dark:bg-gray-900/80">
      <nav className="max-w-4xl mx-auto px-6 py-8 flex justify-between items-center">
        <Link href="/">
          <h1 className="text-2xl font-bold text-[#6C8FA3] dark:text-white hover:text-[#D5848C] dark:hover:text-[#D5848C] transition-colors">
            n0ta
          </h1>
        </Link>
        <ul className="flex gap-4">
          {links.map((link) => (
            <li key={link.id}>
              <Link
                href={link.href}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  currentPage === link.id
                    ? "bg-[#6C8FA3] text-[#F4F6F7] dark:bg-white dark:text-black"
                    : "bg-[#6C8FA3] text-[#F4F6F7] dark:bg-gray-700 dark:text-gray-100 hover:bg-[#D5848C] dark:hover:bg-gray-600"
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
