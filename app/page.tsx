export default function Home() {
2
return (
3
<main className="bg-zinc-950 text-white">
4
 
5
{/* NAVBAR */}
6
 
7
<nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
8
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
9
 
10
<div className="flex items-center gap-3">
11
<img
12
src="/logo/logo.png"
13
alt="Scooter Club Kalsdorf"
14
className="w-10 h-10"
15
</div>
16
 
17
<div className="hidden md:flex gap-8 text-sm uppercase tracking-wider">
18
#about
19
Über Uns
20
</a>
21
#events:text-yellow-500">
22
Events
23
</a>
24
<a href="#gallery Galerie
25
</a>
26
#kontakt
27
</div>
28
 
29
</div>
30
</nav>
31
 
32
{/* HERO */}
33
 
34
<section
35
className="relative min-h-screen flex items-center justify-center"
36
style={{
37
backgroundImage: "url('/images/hero.jpg')",
38
backgroundSize: "cover",
39
backgroundPosition: "center",
40
}}
41
>
42
<div className="absolute inset-0 bg-black/75" />
43
 
44
<div className="relative z-10 px-6 text-center max-w-6xl">
45
 
46
/logo/logo.png
47
 
48
<p className="uppercase tracking-[0.4em] text-yellow-500 mb-6">
49
Vespa Lifestyle • Gemeinschaft • Freiheit
50
</p>
51
 
52
<h1 className="text-6xl md:text-8xl font-black leading-none">
53
SCOOTER CLUB
54
<br />
55
KALSDORF
56
</h1>
57
 
58
<p className="mt-8 text-xl md:text-3xl text-zinc-300 max-w-4xl mx-auto">
59
Leidenschaft für klassische Vespas,
60
unvergessliche Touren und echte Freundschaften.
61
</p>
62
 
63
<div className="flex flex-wrap justify-center gap-5 mt-12">
64
 
65
#events
66
 
67
#gallery
68
Galerie ansehen
69
</a>
70
 
71
</div>
72
 
73
<div className="grid grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto">
74
 
75
<div>
76
<h3 className="text-4xl font-black text-yellow-500">50+</h3>
77
<p className="text-zinc-400">Mitglieder</p>
78
</div>
79
 
80
<div>
81
<h3 className="text-4xl font-black text-yellow-500">100+</h3>
82
<p className="text-zinc-400">Touren</p>
83
</div>
84
 
85
<div>
86
<h3 className="text-4xl font-black text-yellow-500">10+</h3>
87
<p className="text-zinc-400">Jahre Leidenschaft</p>
88
</div>
89
 
90
</div>
91
 
92
</div>
93
</section>
94
 
95
{/* ÜBER UNS */}
96
 
97
<section
98
id="about"
99
className="max-w-7xl mx-auto py-28 px-6"
100
>
101
<div className="grid md:grid-cols-2 gap-20 items-center">
102
 
103
<div>
104
 
105
<p className="text-yellow-500 uppercase tracking-widest mb-4">
106
Über Uns
107
</p>
108
 
109
<h2 className="text-5xl font-black mb-6">
110
Mehr als nur ein Rollerclub
111
</h2>
112
 
113
<p className="text-zinc-300 text-lg leading-9">
114
Der Scooter Club Kalsdorf steht für italienischen Lifestyle,
115
kameradschaftliche Gemeinschaft und die Leidenschaft für
116
klassische Vespas.
117
 
118
Unsere Mitglieder organisieren regelmäßig Ausfahrten,
119
Treffen und gemeinsame Veranstaltungen in der gesamten
120
Steiermark.
121
 
122
Was uns verbindet, ist die Freude am Fahren und die Liebe
123
zu zeitlosen Fahrzeugen mit Charakter.
124
</p>
125
 
126
</div>
127
 
128
<img
129
.jpg
130
 
131
</div>
132
</section>
133
 
134
{/* EVENTS */}
135
 
136
<section
137
id="events"
138
className="bg-zinc-900 py-28 px-6"
139
>
140
<div className="max-w-7xl mx-auto">
141
 
142
<h2 className="text-5xl font-black mb-14">
143
Kommende Events
144
</h2>
145
 
146
<div className="grid md:grid-cols-3 gap-8">
147
 
148
<div className="rounded-3xl p-8 bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700">
149
<h3 className="text-2xl font-bold mb-3">
150
Saisonstart
151
</h3>
152
<p className="text-zinc-400">
153
Gemeinsamer Start in die neue Saison.
154
</p>
155
<p className="mt-6 text-yellow-500 font-semibold">
156
April
157
</p>
158
</div>
159
 
160
<div className="rounded-3xl p-8 bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700">
161
<h3 className="text-2xl font-bold mb-3">
162
Vespa Treffen
163
</h3>
164
<p className="text-zinc-400">
165
Regionales Treffen mit befreundeten Clubs.
166
</p>
167
<p className="mt-6 text-yellow-500 font-semibold">
168
Juni
169
</p>
170
</div>
171
 
172
<div className="rounded-3xl p-8 bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700">
173
<h3 className="text-2xl font-bold mb-3">
174
Abschlussfahrt
175
</h3>
176
<p className="text-zinc-400">
177
Gemeinsamer Saisonabschluss.
178
</p>
179
<p className="mt-6 text-yellow-500 font-semibold">
180
Oktober
181
</p>
182
</div>
183
 
184
</div>
185
 
186
</div>
187
</section>
188
 
189
{/* GALERIE */}
190
 
191
<section
192
id="gallery"
193
className="max-w-7xl mx-auto py-28 px-6"
194
>
195
<h2 className="text-5xl font-black mb-14">
196
Unsere Ausfahrten
197
</h2>
198
 
199
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
200
 
201
<div className="overflow-hidden rounded-3xl">
202
<img
203
src="/gallery/1.jpg"
204
ssName="overflow-hidden rounded-3xl">
205
<img
206
src="/gallery/2.jpg"
207
className="ow-hidden rounded-3xl">
208
<img
209
src="/gallery/3.jpg"
210
className="hoverdden rounded-3xl">
211
<img
212
src="/gallery/4.jpg"
213
className="hover:scale-110 duration-500"
214
/>
215
Name="bg-zinc-900 py-24 px-6">
216
 
217
<div className="max-w-7xl mx-auto text-center">
218
 
219
<h2 className="text-5xl font-black mb-6">
220
Folge uns auf Instagram
221
</h2>
222
 
223
<p className="text-zinc-400 mb-10">
224
Die neuesten Bilder und Eindrücke unserer Touren.
225
</p>
226
 
227
www.instagram.com/scooter_club_kalsdorf/"
228
target="_blank"
229
rel="noopener noreferrer"
230
className="bg-yellow-500 text-black px-8 py-4 rounded-2xl font-bold hover:bg-yellow-400"
231
>
232
Instagram besuchen
233
</a>
234
 
235
</div>
236
 
237
</section>
238
 
239
{/* KONTAKT */}
240
 
241
<section
242
id="kontakt"
243
className="py-28 px-6"
244
>
245
<div className="max-w-4xl mx-auto">
246
 
247
<h2 className="text-5xl font-black mb-10">
248
Kontakt
249
</h2>
250
 
251
<p className="mb-3 text-lg">
252
📧 scooter.kalsdorf@gmail.com
253
</p>
254
 
255
<p className="mb-12 text-lg">
256
📞 +43 664 1259454
257
</p>
258
 
259
<form className="space-y-5">
260
 
261
<input
262
placeholder="Name"
263
className="w-full bg-zinc-900 rounded-2xl p-4"
264
/>
265
 
266
<input
267
placeholder="E-Mail"
268
className="w-full bg-zinc-900 rounded-2xl p-4"
269
/>
270
 
271
<textarea
272
rows={6}
273
placeholder="Nachricht"
274
className="w-full bg-zinc-900 rounded-2xl p-4"
275
/>
276
 
277
<button
278
className="bg-yellow-500 text-black px-8 py-4 rounded-2xl font-bold hover:bg-yellow-400"
279
>
280
Nachricht senden
281
</button>
282
 
283
</form>
284
 
285
</div>
286
</section>
287
 
288
{/* FOOTER */}
289
 
290
<footer className="border-t border-zinc-800 py-12">
291
 
292
<div className="text-center">
293
 
294
<p className="text-zinc-500">
295
© 2026 Scooter Club Kalsdorf
296
</p>
297
 
298
<div className="flex justify-center gap-8 mt-6">
299
 
300
https://www.instagram.com/scooter_club_kalsdorf/
301
Instagram
302
</a>
303
 
304
<a
305
cebook.com/p/Scooter-Club-Kalsdorf-61553201203901/
306
Facebook
307
</a>
308
 
309
</div>
310
 
311
</div>
312
 
313
</footer>
314
 
315
</main>
316
)
317
}
