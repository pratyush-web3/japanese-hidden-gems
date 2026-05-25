import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { seasons, images } from "@/data/site";

export const Route = createFileRoute("/seasonal")({
  head: () => ({
    meta: [
      { title: "四季の旅 · Seasonal Travel — Kakushi" },
      { name: "description", content: "Travel Japan through its four seasons — cherry blossoms, summer paddies, autumn maples, and snowbound onsens." },
      { property: "og:url", content: "/seasonal" },
    ],
    links: [{ rel: "canonical", href: "/seasonal" }],
  }),
  component: SeasonalPage,
});

function SeasonalPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="The Year in Four Movements"
        title="Seasonal Travel"
        jp="四季の旅"
        intro="日本の旅は、季節に従う。春の桜、夏の青田、秋の紅葉、冬の雪。それぞれの時に、それぞれの場所が、もっとも美しく現れる。"
        image={images.seasonAutumn}
      />

      <div className="space-y-0">
        {seasons.map((s, i) => (
          <section key={s.key} className={`grid md:grid-cols-2 ${i % 2 === 1 ? "bg-secondary/40" : ""}`}>
            <div className={`relative min-h-[60vh] ${i % 2 === 1 ? "md:order-2" : ""}`}>
              <img src={s.image} alt={s.label} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="p-12 md:p-20 flex flex-col justify-center">
              <div className="label-eyebrow mb-4">— {s.subtitle} —</div>
              <h2 className="font-jp text-6xl md:text-8xl text-forest-deep mb-8">{s.label}</h2>
              <p className="font-jp text-lg md:text-xl leading-loose text-foreground/85 mb-10">{s.note}</p>
              <div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-3">
                  Suggested Destinations
                </div>
                <div className="flex gap-3 flex-wrap">
                  {s.places.map((p) => (
                    <span key={p} className="font-jp text-base border border-forest/40 px-4 py-2 text-forest-deep">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="py-32 mx-auto max-w-[900px] px-6 text-center">
        <div className="label-eyebrow mb-6">— 季語 · Words of the Season —</div>
        <p className="font-jp text-2xl md:text-3xl leading-loose text-forest-deep italic">
          「春は曙。夏は夜。秋は夕暮。冬はつとめて。」
        </p>
        <p className="text-sm tracking-[0.2em] text-muted-foreground mt-6">— 清少納言『枕草子』</p>
      </section>
    </SiteLayout>
  );
}
