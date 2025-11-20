export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="rounded-t-3xl bg-[#567282]/80 backdrop-blur-lg dark:bg-[#567282]/80 min-h-[50vh] flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-6 py-8 text-center text-[#4A4F52] dark:text-gray-400">
        <p>&copy; {currentYear} Nakai Ryoka. All rights reserved.</p>
      </div>
    </footer>
  );
}
