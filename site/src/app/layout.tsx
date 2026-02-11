import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jan Jancen — AI Engineer",
  description:
    "AI Engineer building production systems at the intersection of large language models, agent architectures, and developer tooling.",
  metadataBase: new URL("https://janjancen.com"),
  openGraph: {
    title: "Jan Jancen — AI Engineer",
    description:
      "AI Engineer building production systems at the intersection of LLMs, agent architectures, and developer tooling.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#f0ece4" />
      </head>
      <body className={`${ibmPlexMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
