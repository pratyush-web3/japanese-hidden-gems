import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { cafes, images } from "@/data/site";

export const Route = createFileRoute("/cafes")({
  head: () => ({
    meta: [
      { title: "里の喫茶 · Rural Café Guide — Kakushi" },
      { name: "description", content: "A guide to the hidden rural cafés of Japan — kominka coffee, mountain tea houses, and slow afternoons." },
      { property: "og:url", content: "/cafes" },
    ],
    links: [{ rel: "canonical", href: "/cafes" }],
  }),
  component: CafesPage,
});

function CafesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="One Cup, One Place"
        title="Rural Café Guide"
        jp="里の喫茶"
        intro="街の喫茶店ではなく、山と海の片隅にある一杯。築百年の古民家、漁港の二階、雪国の茶寮。場所が違えば、珈琲も茶も、その意味を変える。"
        image={images.ruralCafe}
      />

      <section className="py-24 mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {cafes.map((c, i) => (
            <article key={c.name} className="group">
              <div className="relative overflow-hidden aspect-[4/5] mb-5">
                <img src={c.image} alt={c.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute top-4 left-4 text-stone text-[10px] tracking-[0.3em] uppercase bg-forest-deep/60 px-2 py-1">
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>
              <div className="flex items-baseline gap-3 mb-3">
                <h2 className="font-jp text-2xl text-forest-deep">{c.name}</h2>
                <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">{c.town}</span>
              </div>
              <p className="font-jp text-sm leading-relaxed text-foreground/75">{c.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-24 bg-secondary/40">
        <div className="mx-auto max-w-[900px] px-6">
          <div className="label-eyebrow mb-4">— 喫茶の作法 —</div>
          <h2 className="font-jp text-3xl md:text-4xl text-forest-deep mb-8">古民家カフェで過ごす時間</h2>
          <p className="font-jp text-base md:text-lg leading-loose text-foreground/80">
            田舎の喫茶店は、街のそれとは流れる時間が違う。注文してから珈琲が出てくるまで、二十分かかることもある。それは遅いのではなく、その店の速度がそうであるというだけのこと。店主と話したり、窓の外を眺めたり、何もしないでいたりするための時間が、ここには含まれている。
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
