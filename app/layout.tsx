import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.scooterclub-kalsdorf.at"),

  title: {
    default: "Scooter Club Kalsdorf",
    template: "%s | Scooter Club Kalsdorf",
  },

  description:
    "Offizielle Website des Scooter Club Kalsdorf. Vespa • Gemeinschaft • Ausfahrten • Events • Leidenschaft auf zwei Rädern.",

  keywords: [
    "Scooter Club",
    "Scooter Club Kalsdorf",
    "Vespa",
    "Vespa Österreich",
    "Vespa Graz",
    "Rollerclub",
    "Scooter",
    "Kalsdorf",
    "Ausfahrten",
    "Vespa Treffen",
  ],

  authors: [
    {
      name: "Scooter Club Kalsdorf",
      url: "https://www.scooterclub-kalsdorf.at",
    },
  ],

  creator: "Scooter Club Kalsdorf",

  publisher: "Scooter Club Kalsdorf",

  applicationName: "Scooter Club Kalsdorf",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "de_AT",
    url: "https://www.scooterclub-kalsdorf.at",
    siteName: "Scooter Club Kalsdorf",

    title: "Scooter Club Kalsdorf",

    description:
      "Vespa • Gemeinschaft • Ausfahrten • Events",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Scooter Club Kalsdorf",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Scooter Club Kalsdorf",
    description: "Vespa • Gemeinschaft • Ausfahrten",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#111111",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className={geist.className}>
        {children}

        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
