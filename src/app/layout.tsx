import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Local Roots Property Maintenance",
  description:
    "Professional lawn care, landscaping, and property maintenance in Brevard County, FL. Get a free quote today!",
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Local Roots Property Maintenance | Brevard County", // ✅ 52 chars
    description:
      "Professional lawn care, landscaping, and property maintenance in Brevard County, FL. Get a free quote today!", // ✅ 108 chars
    url: "https://localrootsbrevard.com", // ✅ actual live URL
    siteName: "Local Roots Property Maintenance",
    images: [
      {
        url: "https://localrootsbrevard.com/img/og-logo.png", // ✅ actual live URL
        width: 1200,
        height: 630,
        alt: "Local Roots Property Maintenance Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://localrootsbrevard.com/img/og-logo.png"], // ✅
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${oswald.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
