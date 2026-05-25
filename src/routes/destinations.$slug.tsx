import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { destinations, type Destination } from "@/data/site";

export const Route = createFileRoute("/destinations/$slug")({
  loader: ({ params }): Destination => {
    const d = destinations.find((x) => x.slug === params.slug);
    if (!d) throw notFound();
    return d;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.name ?? ""} ${loaderData?.nameEn ?? ""} — Kakushi` },
      { name: "description", content: loaderData?.excerpt ?? "" },
      { property: "og:title", content: `${loaderData?.name} — Kakushi` },
      { property: "og:description", content: loaderData?.excerpt ?? "" },
      { property: "og:type", content: "article" },
      { property: "og:image", content: loaderData?.image ?? "" },
    ],
  }),
  component: DestinationPage,
  notFoundComponent: () => (
    <SiteLayout>
      <div className="min-h-[60vh] flex items-center justify-center">
        <Link to="/destinations" className="text-forest underline">← Back</Link>
      </div>
    </SiteLayout>
  ),
});

function DestinationPage() {
  const d = Route.useLoaderData() as Destination;
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative h-[85vh] min-h-[600px] overflow-hidden">
        <img src={d.image} alt={d.name} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-deep/30 to-forest-deep/80" />
        <div className="relative h-full mx-auto max-w-[1400px] px-6 md:px-10 flex flex-col justify-end pb-20">
          <div className="text-stone/80 text-[10px] tracking-[0.4em] uppercase mb-6">
            {d.region} · {d.prefecture}
          </div>
          <h1 className="font-jp text-stone text-7xl md:text-[9rem] leading-none mb-4">{d.name}</h1>
          <div className="font-display italic text-stone/80 text-3xl mb-6">{d.nameEn}</div>
          <p className="font-jp text-stone/90 text-xl md:text-2xl max-w-2xl leading-relaxed">{d.tagline}</p>
        </div>
      </section>

      {/* Facts strip */}
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 grid md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-border">
          {[
            { label: "Best Season", value: d.bestSeason },
            { label: "Travel Time", value: d.travelTime },
            { label: "Region", value: d.region },
            { label: "Prefecture", value: d.prefecture },
          ].map((f) => (
            <div key={f.label} className="p-8">
              <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-2">{f.label}</div>
              <div className="font-jp text-lg text-forest-deep">{f.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="py-24 md:py-32 mx-auto max-w-[820px] px-6">
        <div className="label-eyebrow mb-6">— 物語 · The Story —</div>
        <h2 className="font-jp text-4xl md:text-5xl text-forest-deep mb-12 leading-tight">
          風土の記憶
        </h2>
        <div className="space-y-8">
          {d.story.map((p, i) => (
            <p key={i} className="font-jp text-lg md:text-xl leading-loose text-foreground/85 first-letter:font-display first-letter:text-5xl first-letter:float-left first-letter:mr-3 first-letter:leading-none first-letter:text-forest">
              {p}
            </p>
          ))}
        </div>
      </section>

      <div className="ink-rule max-w-xs mx-auto" />

      {/* History + Access */}
      <section className="py-24 mx-auto max-w-[1200px] px-6 grid md:grid-cols-2 gap-16">
        <div>
          <div className="label-eyebrow mb-4">— 歴史 · History —</div>
          <h3 className="font-jp text-3xl text-forest-deep mb-6">背景</h3>
          <p className="font-jp text-base leading-loose text-foreground/80">{d.history}</p>
        </div>
        <div>
          <div className="label-eyebrow mb-4">— 交通 · Access —</div>
          <h3 className="font-jp text-3xl text-forest-deep mb-6">行き方</h3>
          <p className="font-jp text-base leading-loose text-foreground/80">{d.access}</p>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 bg-secondary/40">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="label-eyebrow mb-4">— 名所 · Highlights —</div>
          <h3 className="font-jp text-3xl md:text-4xl text-forest-deep mb-12">訪ねたい場所</h3>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-5">
            {d.highlights.map((h, i) => (
              <div key={i} className="flex items-baseline gap-5 border-b border-border pb-4">
                <span className="font-display text-forest text-xl">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-jp text-lg text-foreground/85">{h}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cafes & Temples */}
      <section className="py-24 mx-auto max-w-[1200px] px-6 grid md:grid-cols-2 gap-16">
        <div>
          <div className="label-eyebrow mb-4">— 喫茶 —</div>
          <h3 className="font-jp text-3xl text-forest-deep mb-8">里の喫茶</h3>
          <div className="space-y-6">
            {d.cafes.map((c) => (
              <div key={c.name} className="border-l-2 border-forest/40 pl-5">
                <div className="font-jp text-xl text-forest-deep mb-1">{c.name}</div>
                <p className="font-jp text-sm leading-relaxed text-foreground/70">{c.note}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="label-eyebrow mb-4">— 寺社 —</div>
          <h3 className="font-jp text-3xl text-forest-deep mb-8">古寺と神社</h3>
          <div className="space-y-6">
            {d.temples.map((t) => (
              <div key={t.name} className="border-l-2 border-vermilion/60 pl-5">
                <div className="font-jp text-xl text-forest-deep mb-1">{t.name}</div>
                <p className="font-jp text-sm leading-relaxed text-foreground/70">{t.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Itinerary */}
      <section className="py-24 bg-forest-deep text-stone relative overflow-hidden">
        <div className="grain" />
        <div className="mx-auto max-w-[1000px] px-6">
          <div className="text-stone/60 text-[10px] tracking-[0.4em] uppercase mb-4">— 旅程 · Suggested Itinerary —</div>
          <h3 className="font-jp text-4xl md:text-5xl mb-14">提案する旅程</h3>
          <div className="space-y-12">
            {d.itinerary.map((it) => (
              <div key={it.day} className="grid md:grid-cols-12 gap-6 border-b border-stone/15 pb-12">
                <div className="md:col-span-2">
                  <div className="font-display text-3xl text-stone/90">{it.day}</div>
                </div>
                <div className="md:col-span-10">
                  <h4 className="font-jp text-2xl mb-3">{it.title}</h4>
                  <p className="font-jp text-base leading-loose opacity-80">{it.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 mx-auto max-w-[1200px] px-6 text-center">
        <Link to="/destinations" className="text-sm tracking-[0.25em] uppercase text-forest border-b border-forest/40 pb-1">
          ← すべての隠れた地へ
        </Link>
      </section>
    </SiteLayout>
  );
}
