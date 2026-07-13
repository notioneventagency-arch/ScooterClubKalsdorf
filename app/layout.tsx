import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Scooter Club Kalsdorf",
  description:
    "Offizielle Website des Scooter Club Kalsdorf. Vespa • Gemeinschaft • Ausfahrten • Events",
  keywords: [
    "Scooter Club Kalsdorf",
    "Vespa",
    "Rollerclub",
    "Scooter",
    "Kalsdorf",
    "Vespa Österreich",
    "Vespa Graz",
    "Scooter Club"
  ],

  authors: [
    {
      name: "Scooter Club Kalsdorf",
    },
  ],

  creator: "Scooter Club Kalsdorf",

  metadataBase: new URL("https://www.scooterclub-kalsdorf.at"),

  openGraph: {
    title: "Scooter Club Kalsdorf",
    description:
      "Offizielle Website des Scooter Club Kalsdorf",
    url: "https://www.scooterclub-kalsdorf.at",
    siteName: "Scooter Club Kalsdorf",
    locale: "de_AT",
    type: "website",

    images: [
      {
        url: "/logo/logo.png",
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Scooter Club Kalsdorf",
    description: "Vespa • Gemeinschaft • Ausfahrten",
    images: ["/logo/logo.png"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={geist.className}>
        {children}

        {process.env.NODE_ENV === "production" && (
          <Analytics />
        )}
      </body>
    </html>
  );
}
