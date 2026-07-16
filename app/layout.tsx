import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { Cursor } from "./_components/cursor";
import { Footer } from "./_components/footer";
import { Navbar } from "./_components/navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const description =
  "Ayoub Bellaoui is a backend web developer from Casablanca specializing in Laravel, Node.js, Express.js, and MySQL — a career-changer who taught himself to ship real software.";

export const metadata: Metadata = {
  metadataBase: new URL("https://ayoubbellaoui.netlify.app"),
  title: {
    default: "Ayoub Bellaoui — Backend Web Developer",
    template: "%s — Ayoub Bellaoui",
  },
  description,
  keywords: [
    "Ayoub Bellaoui",
    "Backend Web Developer",
    "Full-Stack Developer",
    "Laravel Developer",
    "Node.js Developer",
    "Casablanca Developer",
  ],
  authors: [{ name: "Ayoub Bellaoui" }],
  creator: "Ayoub Bellaoui",
  openGraph: {
    title: "Ayoub Bellaoui — Backend Web Developer",
    description,
    url: "https://ayoubbellaoui.netlify.app",
    siteName: "Ayoub Bellaoui",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayoub Bellaoui — Backend Web Developer",
    description,
    creator: "@mistercowboy70",
  },
};

const themeInitScript = `(function(){try{var t=localStorage.getItem("theme");var m=window.matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.setAttribute("data-theme",t||(m?"dark":"light"))}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <div className="noise-overlay" aria-hidden="true" />
        <Cursor />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
