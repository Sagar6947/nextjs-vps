import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Next Js VPS Server Setup"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="flex justify-between py-4 px-10 bg-slate-800">
          <h4 className="logo">Nextjs VPS</h4>
          <nav className="space-x-2.5 [&_a]:hover:underline [&_a]:transition">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
          <Link href="/user/all" class="px-6 py-1.5 rounded-xl bg-blue-600 text-white font-medium shadow-md hover:bg-blue-700 active:scale-95 transition-all duration-200">
            Users
          </Link>

        </header>
        {children}
      </body>
    </html>
  );
}
