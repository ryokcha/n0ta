export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 mt-20">
      <div className="max-w-4xl mx-auto px-6 py-8 text-center text-gray-600 dark:text-gray-400">
        <p>&copy; {currentYear} Nakai Ryoka. All rights reserved.</p>
      </div>
    </footer>
  );
}
