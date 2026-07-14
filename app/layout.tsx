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
    "Offizielle Website des Scooter Club Kalsdorf. Vespa, Ausfahrten, Treffen, Gemeinschaft und italienischer Lifestyle.",

  keywords: [
    "Scooter Club Kalsdorf",
    "Vespa Kalsdorf",
    "Vespa Graz",
    "Vespa Österreich",
    "Scooter Club",
    "Rollerclub",
    "Vespa Treffen",
    "Vespa Ausfahrt",
    "Kalsdorf",
    "Steiermark",
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

  category: "Verein",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",

    locale: "de_AT",

    url: "https://www.scooterclub-kalsdorf.at",

    title: "Scooter Club Kalsdorf",

    description:
      "Leidenschaft für Vespa, Gemeinschaft und unvergessliche Ausfahrten in der Steiermark.",

    siteName: "Scooter Club Kalsdorf",

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

    description:
      "Vespa • Gemeinschaft • Ausfahrten • Leidenschaft",

    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
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
