export default function Home() {
2
return (
3
<main className="bg-zinc-950 text-white">
4
{/* NAVBAR */}
5
 
6
<nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-lg border-b border-white/10">
7
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
8
<div className="flex items-center gap-3">
9
<img
10
src="/logo/logo.png"
11
alt Scooter Club Kalsdorf
12
</span>
13
</div>
14
 
15
<div className="hidden md:flex gap-8">
16
#aboutÜber Uns</a>
17
#events>
18
#gallery
19
#kontakt
20
</div>
21
</div>
22
</nav>
23
 
24
{/* HERO */}
25
 
26
<section
27
className="relative min-h-screen flex items-center justify-center"
28
style={{
29
backgroundImage: "url('/images/hero.jpg')",
30
backgroundSize: "cover",
31
backgroundPosition: "center",
32
}}
33
>
34
<div className="absolute inset-0 bg-black/70" />
35
 
36
<div className="relative z-10 text-center px-6 max-w-5xl">
37
/logo/logo.pngmx-auto w-40 mb-8"
38
/>
39
 
40
<p className="uppercase tracking-[0.3em] text-yellow-500">
41
Vespa Lifestyle · Gemeinschaft · Freiheit
42
</p>
43
 
44
<h1 className="text-6xl md:text-8xl font-black mt-8">
45
SCOOTER CLUB
46
<br />
47
KALSDORF
48
</h1>
49
 
50
<p className="mt-8 text-xl text-zinc-300">
51
Leidenschaft für klassische Vespas,
52
unvergessliche Touren und echte Freundschaften.
53
</p>
54
 
55
<div className="flex justify-center gap-4 mt-10 flex-wrap">
56
<a
57
href="#chste Ausfahrt
58
</a>
59
 
60
#gallery="border border-white px-8 py-4 rounded-2xl"
61
>
62
Galerie
63
</a>
64
</div>
65
 
66
<div className="grid grid-cols-3 gap-8 mt-20">
67
<div>
68
<h3 className="text-4xl font-black text-yellow-500">
69
50+
70
</h3>
71
<p>Mitglieder</p>
72
</div>
73
 
74
<div>
75
<h3 className="text-4xl font-black text-yellow-500">
76
100+
77
</h3>
78
<p>Touren</p>
79
</div>
80
 
81
<div>
82
<h3 className="text-4xl font-black text-yellow-500">
83
10+
84
</h3>
85
<p>Jahre Leidenschaft</p>
86
</div>
87
</div>
88
</div>
89
</section>
90
 
91
{/* ÜBER UNS */}
92
 
93
<section
94
id="about"
95
className="max-w-7xl mx-auto py-28 px-6"
96
>
97
<div className="grid md:grid-cols-2 gap-20 items-center">
98
<div>
99
<p className="text-yellow-500 uppercase mb-4">
100
Über Uns
101
</p>
102
 
103
<h2 className="text-5xl font-black mb-6">
104
Mehr als nur ein Rollerclub
105
</h2>
106
 
107
<p className="text-zinc-300 leading-9">
108
Der Scooter Club Kalsdorf steht für
109
italienischen Lifestyle, Gemeinschaft
110
und Leidenschaft für klassische Vespas.
111
 
112
Regelmäßig organisieren wir Ausfahrten,
113
Clubabende und Treffen in der gesamten
114
Steiermark.
115
</p>
116
</div>
117
 
118
/images/about.jpg
119
</div>
120
</section>
121
 
122
{/* EVENTS */}
123
 
124
<section
125
id="events"
126
className="bg-zinc-900 py-28 px-6"
127
>
128
<div className="max-w-7xl mx-auto">
129
<h2 className="text-5xl font-black mb-12">
130
Kommende Events
131
</h2>
132
 
133
<div className="grid md:grid-cols-3 gap-8">
134
<div className="card-premium p-8">
135
<h3 className="text-2xl font-bold">
136
Saisonstart
137
</h3>
138
 
139
<p className="mt-4 text-zinc-400">
140
April
141
</p>
142
</div>
143
 
144
<div className="card-premium p-8">
145
<h3 className="text-2xl font-bold">
146
Vespa Treffen
147
</h3>
148
 
149
<p className="mt-4 text-zinc-400">
150
Juni
151
</p>
152
</div>
153
 
154
<div className="card-premium p-8">
155
<h3 className="text-2xl font-bold">
156
Abschlussfahrt
157
</h3>
158
 
159
<p className="mt-4 text-zinc-400">
160
Oktober
161
</p>
162
</div>
163
</div>
164
</div>
165
</section>
166
 
167
{/* GALERIE */}
168
 
169
<section
170
id="gallery"
171
className="max-w-7xl mx-auto py-28 px-6"
172
>
173
<h2 className="text-5xl font-black mb-12">
174
Galerie
175
</h2>
176
 
177
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
178
/gallery/1.jpg
179
 
180
/gallery/2.jpg alt=""
181
className="rounded-3xl hover:scale-105 duration-300"
182
/>
183
 
184
/3.jpg"
185
alt=""
186
className="rounded-3xl hover:scale-105 duration-300"
187
/>
188
 
189
/gallery/4.jpg
190
</div>
191
</section>
192
 
193
{/* INSTAGRAM */}
194
 
195
<section className="bg-zinc-900 py-24 px-6">
196
<div className="max-w-5xl mx-auto text-center">
197
<h2 className="text-5xl font-black mb-6">
198
Instagram
199
</h2>
200
 
201
<p className="text-zinc-400 mb-10">
202
Folge unseren neuesten Ausfahrten.
203
</p>
204
 
205
<a
206
href="https://www.instagram.com/scooter_club_kalsdorf/"
207
target="_blank"
208
rel="noopener noreferrer"
209
className="bg-yellow-500 text-black px-8 py-4 rounded-2xl font-bold"
210
>
211
Instagram besuchen
212
</a>
213
</div>
214
</section>
215
 
216
{/* KONTAKT */}
217
 
218
<section
219
id="kontakt"
220
className="py-28 px-6"
221
>
222
<div className="max-w-4xl mx-auto">
223
<h2 className="text-5xl font-black mb-10">
224
Kontakt
225
</h2>
226
 
227
<p className="mb-3">
228
📧 scooter.kalsdorf@gmail.com
229
</p>
230
 
231
<p className="mb-10">
232
📞 +43 664 1259454
233
</p>
234
 
235
<form className="space-y-5">
236
<input
237
placeholder="Name"
238
className="w-full bg-zinc-900 rounded-2xl p-4"
239
/>
240
 
241
<input
242
placeholder="E-Mail"
243
className="w-full bg-zinc-900 rounded-2xl p-4"
244
/>
245
 
246
<textarea
247
rows={6}
248
placeholder="Nachricht"
249
className="w-full bg-zinc-900 rounded-2xl p-4"
250
/>
251
 
252
<button
253
className="bg-yellow-500 text-black px-8 py-4 rounded-2xl font-bold"
254
>
255
Nachricht senden
256
</button>
257
</form>
258
</div>
259
</section>
260
 
261
{/* FOOTER */}
262
 
263
<footer className="border-t border-zinc-800 py-10">
264
<div className="text-center">
265
<p className="text-zinc-500">
266
© 2026 Scooter Club Kalsdorf
267
</p>
268
 
269
<div className="flex justify-center gap-8 mt-6">
270
<a
271
href="https://www.instagram.com/scooter_club_kalsdorf/"
272
target="_blank"
273
rel="noopener noreferrer"
274
>
275
Instagram
276
</a>
277
 
278
https://www.facebook.com/p/Scooter-Club-Kalsdorf-61553201203901/
279
</div>
280
</div>
281
</footer>
282
</main>
283
);
284
}
