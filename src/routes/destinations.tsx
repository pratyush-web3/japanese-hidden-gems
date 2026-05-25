import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { destinations, images } from "@/data/site";

export const Route = createFileRoute("/destinations")({
  head: () => ({
    meta: [
      { title: "隠れた地 · Hidden Destinations — Kakushi" },
      { name: "description", content: "An editorial index of Japan's hidden villages, mountain towns, coastal hamlets and rural retreats." },
      { property: "og:title", content: "Hidden Destinations — Kakushi" },
      { property: "og:url", content: "/destinations" },
    ],
    links: [{ rel: "canonical", href: "/destinations" }],
  }),
  component: DestinationsPage,
});

function DestinationsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="No. 014 — Destinations"
        title="Hidden Destinations"
        jp="隠れた地"
        intro="観光案内に載らない、しかし確かにそこにある場所。北の温泉郷から南の島まで、Kakushiが訪ね歩いた小さな旅の目録です。"
        image={images.heroVillage}
        tone="amber"
      />
      <section className="py-24 mx-auto max-w-350 px-6 md:px-10">
        <div className="space-y-32">
          {destinations.map((d, i) => {
            const reverse = i % 2 === 1;
            return (
              <article key={d.slug} className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
                <div className={`md:col-span-7 ${reverse ? "md:order-2" : ""}`}>
                  <Link to="/destinations/$slug" params={{ slug: d.slug }} className="block group overflow-hidden">
                    <img src={d.image} alt={d.name} loading="lazy" className="w-full aspect-4/3 object-cover transition-transform duration-1000 group-hover:scale-105" />
                  </Link>
                </div>
                <div className="md:col-span-5">
                  <div className="text-xs tracking-[0.3em] uppercase text-forest mb-4">
                    No. {String(i + 1).padStart(2, "0")} — {d.prefecture}
                  </div>
                  <div className="flex items-baseline gap-3 mb-4 flex-wrap">
                    <h2 className="font-jp text-5xl text-forest-deep">{d.name}</h2>
                    <span className="font-display italic text-2xl text-muted-foreground">{d.nameEn}</span>
                  </div>
                  <p className="font-jp text-xl leading-snug text-forest mb-6">{d.tagline}</p>
                  <p className="font-jp text-base leading-loose text-foreground/80 mb-8">{d.excerpt}</p>
                  <div className="grid grid-cols-2 gap-4 mb-8 text-sm">
                    <div>
                      <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-1">Best season</div>
                      <div className="font-jp">{d.bestSeason}</div>
                    </div>
                    <div>
                      <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-1">Access</div>
                      <div className="font-jp">{d.travelTime}</div>
                    </div>
                  </div>
                  <Link to="/destinations/$slug" params={{ slug: d.slug }} className="inline-flex items-center text-sm tracking-[0.25em] uppercase text-forest border-b border-forest/40 pb-1 hover:border-forest">
                    詳しく読む →
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </SiteLayout>
  );
}
