import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ScriptMarket — Buy & Sell Browser Automation Scripts",
  description: "Marketplace for pre-built Puppeteer and Playwright scripts with revenue sharing for developers and QA engineers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="3361f2f6-bc33-4627-bbfc-1b6e6d1674ff"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
