import type { Metadata } from "next";
import { Zen_Maru_Gothic, Noto_Sans_JP, Zen_Kaku_Gothic_New } from "next/font/google";
import { Navigation } from "@/app/components/Navigation";
import { Footer } from "@/app/components/Footer";
import "./globals.css";

// Design System typography — heading/body/ui roles (see app/styles/tokens.css)
// Only the weights the Design System's text styles actually use (regular/medium/bold).
const zenMaruGothic = Zen_Maru_Gothic({
  variable: "--font-zen-maru-gothic",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const zenKakuGothicNew = Zen_Kaku_Gothic_New({
  variable: "--font-zen-kaku-gothic-new",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "n0ta",
  description: "Who is nakai?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${zenMaruGothic.variable} ${notoSansJP.variable} ${zenKakuGothicNew.variable} antialiased`}
      >
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
