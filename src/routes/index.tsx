import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { SiteLayout } from "@/components/SiteLayout";
import { destinations, stories, seasons, cafes, images } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kakushi · 隠し — A Journal of Hidden Japan" },
      { name: "description", content: "An editorial guide to Japan's hidden villages, rural cafés, forgotten temples and quiet seasonal journeys." },
      { property: "og:title", content: "Kakushi · 隠し — A Journal of Hidden Japan" },
      { property: "og:description", content: "知られざる日本 — 静かな村、山の喫茶、隠れた古寺。" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  const featured = destinations.slice(0, 3);
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative h-screen min-h-170 w-full overflow-hidden">
        <img
          src={images.heroVillage}
          alt="霧に包まれた美山の茅葺き集落"
          width={1920}
          height={1280}
          className="absolute inset-0 w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-br from-ink/68 via-ink/22 to-river/22" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.16),transparent_26%),radial-gradient(circle_at_80%_18%,rgba(235,176,106,0.22),transparent_26%),radial-gradient(circle_at_70%_82%,rgba(93,165,207,0.18),transparent_28%)]" />
        <div className="absolute inset-0 grain" />

        <div className="relative h-full mx-auto max-w-375 px-6 md:px-10 flex flex-col justify-between pt-32 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-stone/95 max-w-4xl"
          >
            <div className="inline-flex items-center gap-3 mb-8 rounded-full border border-stone/20 bg-stone/12 px-4 py-2 backdrop-blur-md">
              <span className="h-px w-10 bg-stone/80" />
              <div className="text-[10px] tracking-[0.5em] uppercase opacity-90">No. 014 — Winter Issue</div>
            </div>
            <h1 className="font-jp text-stone text-[12vw] md:text-[7vw] leading-[0.9] mb-6 max-w-5xl">
              知られざる<br />日本へ。
            </h1>
            <div className="font-display text-stone/88 text-2xl md:text-4xl italic max-w-2xl mb-10">
              A quiet journal of villages, temples, and the slow trains that carry you to them.
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/destinations"
                className="group inline-flex items-center gap-3 rounded-full border border-stone/20 bg-stone/12 px-5 py-3 text-sm tracking-[0.25em] uppercase text-stone backdrop-blur-md transition-colors hover:bg-stone hover:text-ink"
              >
                旅をはじめる <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <Link to="/journal" className="rounded-full border border-stone/15 bg-white/5 px-5 py-3 text-sm tracking-[0.25em] uppercase text-stone/85 backdrop-blur-md hover:text-stone">
                Read the journal
              </Link>
            </div>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-3 max-w-5xl">
            {[
              { label: "Issue", value: "014", note: "Winter editorial" },
              { label: "Mood", value: "Brass & Ink", note: "premium palette" },
              { label: "Focus", value: "Quiet Japan", note: "slow travel stories" },
            ].map((item) => (
              <div key={item.label} className="panel-frame rounded-3xl bg-stone/10 px-5 py-4 text-stone backdrop-blur-md">
                <div className="text-[10px] tracking-[0.35em] uppercase opacity-60 mb-2">{item.label}</div>
                <div className="font-display text-2xl md:text-3xl mb-1">{item.value}</div>
                <div className="text-xs tracking-[0.2em] uppercase opacity-60">{item.note}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-stone/70 text-[10px] tracking-[0.4em] uppercase animate-pulse">
          scroll ↓
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="py-32 md:py-44 mx-auto max-w-275 px-6 md:px-10 text-center">
        <div className="label-eyebrow mb-6">— 序文 · Foreword —</div>
        <h2 className="font-jp text-4xl md:text-6xl leading-snug text-forest-deep mb-10">
          観光地ではなく、<br />誰かの暮らしへ。
        </h2>
        <p className="font-jp text-lg md:text-xl leading-loose text-foreground/80 max-w-3xl mx-auto">
          京都の有名な寺ではなく、その北に隠れる苔の庭を。富士山の麓ではなく、信州の山あいで一日に二本の列車を待つ駅を。Kakushiは、観光案内に載らない日本を、季節とともに、ゆっくりと記録していく小さな旅誌です。
        </p>
        <div className="ink-rule mt-16 max-w-xs mx-auto" />
      </section>

      {/* FEATURED DESTINATIONS — magazine grid */}
      <section className="py-24 bg-secondary/40">
        <div className="mx-auto max-w-350 px-6 md:px-10">
          <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
            <div>
              <div className="label-eyebrow mb-4">— 隠れた地 · Featured Villages —</div>
              <h2 className="font-jp text-4xl md:text-5xl text-forest-deep">この冬、訪ねたい三つの里</h2>
            </div>
            <Link to="/destinations" className="text-sm tracking-[0.25em] uppercase text-forest hover:text-forest-deep border-b border-forest/40 pb-1">
              すべて見る →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {featured.map((d, i) => (
              <motion.div
                key={d.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
              >
                <Link to="/destinations/$slug" params={{ slug: d.slug }} className="group block">
                  <div className="relative overflow-hidden aspect-4/5 mb-6 panel-frame image-halo rounded-3xl">
                    <img
                      src={d.image}
                      alt={d.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-[1.4s] group-hover:scale-105"
                    />
                    <div className={`absolute inset-0 bg-linear-to-t ${[
                      "from-ink/42 via-transparent to-transparent",
                      "from-earth/35 via-transparent to-transparent",
                      "from-river/30 via-transparent to-transparent",
                    ][i % 3]}`} />
                    <div className="absolute top-4 left-4 text-stone text-[10px] tracking-[0.3em] uppercase">
                      {String(i + 1).padStart(2, "0")} / {d.prefecture}
                    </div>
                  </div>
                  <div className="flex items-baseline gap-3 mb-3">
                    <h3 className="font-jp text-3xl text-forest-deep">{d.name}</h3>
                    <span className="font-display italic text-muted-foreground">{d.nameEn}</span>
                  </div>
                  <p className="font-jp text-base leading-relaxed text-foreground/75 mb-4">
                    {d.tagline}
                  </p>
                  <div className="text-xs tracking-widest uppercase text-forest opacity-80">
                    {d.bestSeason}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* REGION SHOWCASE */}
      <section className="py-32 mx-auto max-w-350 px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <div className="label-eyebrow mb-4">— 日本地図 · Across the Islands —</div>
            <h2 className="font-jp text-4xl md:text-5xl text-forest-deep mb-8 leading-tight">
              北の雪国から、<br />南の島々まで。
            </h2>
            <p className="font-jp text-lg leading-loose text-foreground/80 mb-10">
              東北の温泉郷、信州の宿場町、京都の隠れ里、丹後の海辺、瀬戸内の島。八つの地方それぞれに、ひっそりと息づく場所があります。
            </p>
            <Link to="/destinations" className="inline-flex items-center text-sm tracking-[0.25em] uppercase border-b border-forest pb-2 text-forest hover:text-forest-deep">
              地図で探す →
            </Link>
          </div>

          <div className="md:col-span-7 grid grid-cols-2 gap-px bg-border">
            {[
              { jp: "東北", en: "Tohoku", count: "12", accent: "border-river/30" },
              { jp: "中部", en: "Chubu", count: "18", accent: "border-earth/30" },
              { jp: "近畿", en: "Kinki", count: "21", accent: "border-forest/30" },
              { jp: "中国", en: "Chugoku", count: "9", accent: "border-vermilion/30" },
              { jp: "四国", en: "Shikoku", count: "11", accent: "border-river/25" },
              { jp: "九州", en: "Kyushu", count: "14", accent: "border-earth/25" },
            ].map((r, index) => (
              <div key={r.en} className={`bg-background p-8 hover:bg-secondary/50 transition-colors cursor-pointer group ${index % 2 === 0 ? "panel-frame" : ""} ${r.accent}`}>
                <div className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2">{r.en}</div>
                <div className="font-jp text-3xl text-forest-deep mb-4">{r.jp}</div>
                <div className="font-display text-lg text-forest opacity-70 group-hover:opacity-100">
                  {r.count} 箇所
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAFE SPOTLIGHT — split */}
      <section className="relative">
        <div className="grid md:grid-cols-2 min-h-150">
          <div className="relative overflow-hidden">
            <img src={images.ruralCafe} alt="rural cafe interior" loading="lazy" className="absolute inset-0 w-full h-full object-cover scale-105" />
            <div className="absolute inset-0 bg-linear-to-br from-river/35 via-transparent to-ink/45" />
            <div className="absolute top-6 left-6 rounded-full border border-stone/25 bg-ink/20 px-4 py-2 text-[10px] tracking-[0.35em] uppercase text-stone backdrop-blur-sm">
              Slow Cup / Still Water
            </div>
          </div>
          <div className="bg-forest-deep text-stone p-12 md:p-20 flex flex-col justify-center">
            <div className="label-eyebrow text-stone/70 mb-6">— 里の喫茶 · Rural Café Guide —</div>
            <h2 className="font-jp text-4xl md:text-5xl leading-tight mb-8">
              山と海の喫茶店、<br />それぞれの一杯。
            </h2>
            <p className="font-jp text-base md:text-lg leading-loose opacity-80 mb-10 max-w-lg">
              築百八十年の古民家で焙煎される深煎り、舟屋の二階で海面と同じ高さに置かれる珈琲、雪見障子のある茶房で出される薄茶。場所が違えば、一杯の意味も変わる。
            </p>
            <div className="space-y-5 mb-10">
              {cafes.slice(0, 4).map((c) => (
                <div key={c.name} className="flex items-baseline gap-4 border-b border-stone/15 pb-4">
                  <div className="font-jp text-xl">{c.name}</div>
                  <div className="text-[10px] tracking-[0.3em] uppercase opacity-50">{c.town}</div>
                </div>
              ))}
            </div>
            <Link to="/cafes" className="self-start text-sm tracking-[0.25em] uppercase border-b border-stone/60 pb-2 hover:border-stone">
              喫茶の手帖を読む →
            </Link>
          </div>
        </div>
      </section>

      {/* SEASONS */}
      <section className="py-32 mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="text-center mb-20">
          <div className="label-eyebrow mb-4">— 四季 · The Four Seasons —</div>
          <h2 className="font-jp text-4xl md:text-6xl text-forest-deep">めぐる季節の、旅</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {seasons.map((s, i) => (
            <motion.div
              key={s.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-3/4 mb-5 panel-frame image-halo rounded-3xl">
                <img src={s.image} alt={s.label} loading="lazy" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className={`absolute inset-0 bg-linear-to-t ${[
                  "from-vermilion/55 via-transparent to-transparent",
                  "from-river/55 via-transparent to-transparent",
                  "from-earth/55 via-transparent to-transparent",
                  "from-ink/70 via-transparent to-transparent",
                ][i % 4]}`} />
                <div className="absolute bottom-5 left-5 right-5 text-stone">
                  <div className="font-jp text-5xl mb-1">{s.label}</div>
                  <div className="text-[10px] tracking-[0.3em] uppercase opacity-80">{s.subtitle}</div>
                </div>
              </div>
              <p className="font-jp text-sm leading-relaxed text-foreground/80">{s.note}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TEMPLE / TRAIN editorial */}
      <section className="bg-secondary/40 py-32">
        <div className="mx-auto max-w-350 px-6 md:px-10 grid md:grid-cols-2 gap-16">
          <Link to="/temples" className="group">
            <div className="relative overflow-hidden aspect-16/10 mb-6 panel-frame image-halo rounded-[28px]">
              <img src={images.hiddenTemple} alt="hidden temple" loading="lazy" className="w-full h-full object-cover transition-transform duration-[1.4s] group-hover:scale-105" />
              <div className="absolute inset-0 bg-linear-to-br from-forest-deep/35 via-transparent to-ink/45" />
            </div>
            <div className="label-eyebrow mb-3">— 古寺巡礼 —</div>
            <h3 className="font-jp text-3xl md:text-4xl text-forest-deep mb-4">忘れられた古寺</h3>
            <p className="font-jp text-base leading-loose text-foreground/75 max-w-lg">
              観光地化されない山深い寺院。苔の参道、千年の杉、誰もいない本堂。鐘の音だけが響く朝の時間。
            </p>
          </Link>

          <Link to="/guides" className="group">
            <div className="relative overflow-hidden aspect-16/10 mb-6 panel-frame image-halo rounded-[28px]">
              <img src={images.localTrain} alt="local train" loading="lazy" className="w-full h-full object-cover transition-transform duration-[1.4s] group-hover:scale-105" />
              <div className="absolute inset-0 bg-linear-to-br from-river/28 via-transparent to-vermilion/25" />
            </div>
            <div className="label-eyebrow mb-3">— ローカル線 · Local Lines —</div>
            <h3 className="font-jp text-3xl md:text-4xl text-forest-deep mb-4">一両編成の旅</h3>
            <p className="font-jp text-base leading-loose text-foreground/75 max-w-lg">
              三両、二両、一両。本数の少ない地方鉄道に揺られる一日。窓の外を流れる稲穂、川、誰もいない無人駅。
            </p>
          </Link>
        </div>
      </section>

      {/* JOURNAL */}
      <section className="py-32 mx-auto max-w-350 px-6 md:px-10">
        <div className="flex items-end justify-between mb-14 flex-wrap gap-6">
          <div>
            <div className="label-eyebrow mb-4">— 紀行 · From the Journal —</div>
            <h2 className="font-jp text-4xl md:text-5xl text-forest-deep">編集部の旅日記</h2>
          </div>
          <Link to="/journal" className="text-sm tracking-[0.25em] uppercase text-forest border-b border-forest/40 pb-1">
            すべての記事 →
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {stories.slice(0, 3).map((s) => (
            <article key={s.slug} className="group">
              <div className="relative overflow-hidden aspect-5/6 mb-6">
                <img src={s.image} alt={s.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              </div>
              <div className="flex items-center gap-3 text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-3">
                <span>{s.category}</span><span>·</span><span>{s.date}</span>
              </div>
              <h3 className="font-jp text-2xl text-forest-deep mb-3 leading-snug group-hover:text-forest transition-colors">
                {s.title}
              </h3>
              <p className="font-jp text-sm leading-relaxed text-foreground/70">{s.excerpt}</p>
            </article>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-32 bg-forest-deep text-stone relative overflow-hidden">
        <div className="grain" />
        <div className="mx-auto max-w-275 px-6 md:px-10 text-center">
          <div className="text-stone/60 text-[10px] tracking-[0.4em] uppercase mb-8">— 旅人の声 · From Our Readers —</div>
          <div className="font-jp text-2xl md:text-4xl leading-loose mb-12 italic">
            「観光ガイドが教えてくれない日本がここにあった。三日間、ただ静かに、村の時間に身を任せた。」
          </div>
          <div className="text-stone/70 text-sm tracking-widest uppercase">— Aiko M. / Tokyo</div>
          <div className="mt-16 grid md:grid-cols-3 gap-10 text-left">
            {[
              { quote: "丁寧に選ばれた宿、丁寧に書かれた言葉。ページをめくるたびに、まだ見ぬ場所への憧れが静かに育つ。", who: "Marc D. / Paris" },
              { quote: "妻籠の夜の提灯、忘れられない。Kakushiがなければ、私たちはここに来なかった。", who: "Sarah W. / Melbourne" },
              { quote: "美山の囲炉裏端で過ごした三日間は、人生で最も静かな時間だった。", who: "Hiroshi T. / Osaka" },
            ].map((t) => (
              <div key={t.who} className="border-l border-stone/20 pl-5">
                <p className="font-jp text-base leading-relaxed opacity-85 mb-4">「{t.quote}」</p>
                <div className="text-[10px] tracking-[0.3em] uppercase opacity-50">— {t.who}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-32 mx-auto max-w-375 px-6">
        <div className="text-center mb-16">
          <div className="label-eyebrow mb-4">— 写景帖 · Scenic Gallery —</div>
          <h2 className="font-jp text-4xl md:text-5xl text-forest-deep">風景の記憶</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[images.heroVillage, images.seasonAutumn, images.coastalVillage, images.hiddenTemple, images.seasonWinter, images.localTrain, images.seasonSummer, images.seasonSpring].map((img, i) => (
            <div key={i} className={`relative overflow-hidden panel-frame ${i % 5 === 0 ? "row-span-2 aspect-3/4" : "aspect-square"}`}>
              <img src={img} alt="" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
              <div className={`absolute inset-0 bg-linear-to-t ${[
                "from-ink/25 via-transparent to-transparent",
                "from-vermilion/18 via-transparent to-transparent",
                "from-river/20 via-transparent to-transparent",
                "from-earth/18 via-transparent to-transparent",
              ][i % 4]}`} />
            </div>
          ))}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-32 mx-auto max-w-225 px-6 text-center">
        <div className="label-eyebrow mb-6">— お便り · Letters from Kakushi —</div>
        <h2 className="font-jp text-4xl md:text-5xl text-forest-deep mb-8 leading-tight">
          季節ごとに、<br />一通の手紙を。
        </h2>
        <p className="font-jp text-base md:text-lg leading-loose text-foreground/75 mb-10 max-w-xl mx-auto">
          年に四回、その季節にもっとも訪ねたい一つの場所だけを、手紙のようにお届けします。広告も、宣伝もありません。
        </p>
        <form className="flex max-w-md mx-auto border border-forest/40" onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="your@email.jp" className="flex-1 px-5 py-4 bg-transparent focus:outline-none text-sm" />
          <button className="px-6 bg-forest text-stone text-[10px] tracking-[0.3em] uppercase hover:bg-forest-deep">
            登録する
          </button>
        </form>
      </section>
    </SiteLayout>
  );
}
