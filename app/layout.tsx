import type { Metadata, Viewport } from "next";
2
import { Geist } from "next/font/google";
3
import { Analytics } from "@vercel/analytics/next";
4
 
5
import "./globals.css";
6
 
7
const geist = Geist({
8
subsets: ["latin"],
9
display: "swap",
10
});
11
 
12
export const metadata: Metadata = {
13
metadataBase: new URL("https://www.scooterclub-kalsdorf.at"),
14
 
15
title: {
16
default: "Scooter Club Kalsdorf",
17
template: "%s | Scooter Club Kalsdorf",
18
},
19
 
20
description:
21
"Offizielle Website des Scooter Club Kalsdorf. Vespa, Ausfahrten, Treffen, Gemeinschaft und italienischer Lifestyle.",
22
 
23
keywords: [
24
"Scooter Club Kalsdorf",
25
"Vespa Kalsdorf",
26
"Vespa Graz",
27
"Vespa Österreich",
28
"Scooter Club",
29
"Rollerclub",
30
"Vespa Treffen",
31
"Vespa Ausfahrt",
32
"Kalsdorf",
33
"Steiermark",
34
],
35
 
36
authors: [
37
{
38
name: "Scooter Club Kalsdorf",
39
url: "https://www.scooterclub-kalsdorf.at",
40
},
41
],
42
 
43
creator: "Scooter Club Kalsdorf",
44
 
45
publisher: "Scooter Club Kalsdorf",
46
 
47
applicationName: "Scooter Club Kalsdorf",
48
 
49
category: "Verein",
50
 
51
alternates: {
52
canonical: "/",
53
},
54
 
55
robots: {
56
index: true,
57
follow: true,
58
googleBot: {
59
index: true,
60
follow: true,
61
"max-image-preview": "large",
62
"max-snippet": -1,
63
"max-video-preview": -1,
64
},
65
},
66
 
67
openGraph: {
68
type: "website",
69
 
70
locale: "de_AT",
71
 
72
url: "https://www.scooterclub-kalsdorf.at",
73
 
74
title: "Scooter Club Kalsdorf",
75
 
76
description:
77
"Leidenschaft für Vespa, Gemeinschaft und unvergessliche Ausfahrten in der Steiermark.",
78
 
79
siteName: "Scooter Club Kalsdorf",
80
 
81
images: [
82
{
83
url: "/og-image.jpg",
84
width: 1200,
85
height: 630,
86
alt: "Scooter Club Kalsdorf",
87
},
88
],
89
},
90
 
91
twitter: {
92
card: "summary_large_image",
93
 
94
title: "Scooter Club Kalsdorf",
95
 
96
description:
97
"Vespa • Gemeinschaft • Ausfahrten • Leidenschaft",
98
 
99
images: ["/og-image.jpg"],
100
},
101
 
102
icons: {
103
icon: "/favicon.ico",
104
shortcut: "/favicon.ico",
105
apple: "/apple-touch-icon.png",
106
},
107
};
108
 
109
export const viewport: Viewport = {
110
themeColor: "#050505",
111
};
112
 
113
export default function RootLayout({
114
children,
115
}: Readonly<{
116
children: React.ReactNode;
117
}>) {
118
return (
119
<html lang="de">
120
<body className={geist.className}>
121
{children}
122
 
123
{process.env.NODE_ENV === "production" && (
124
<Analytics />
125
)}
126
</body>
127
</html>
128
);
129
}
130
`
