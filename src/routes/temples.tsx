import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { temples, images } from "@/data/site";

export const Route = createFileRoute("/temples")({
  head: () => ({
    meta: [
      { title: "古寺巡礼 · Hidden Temples — Kakushi" },
      { name: "description", content: "Forgotten temples and quiet shrines off Japan's tourist trail — moss gardens, mountain pilgrimage paths, and the silence of old wood." },
      { property: "og:url", content: "/temples" },
    ],
    links: [{ rel: "canonical", href: "/temples" }],
  }),
  component: TemplesPage,
});

function TemplesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Off the Pilgrim's Path"
        title="Hidden Temples"
        jp="古寺巡礼"
        intro="清水寺でも金閣寺でもない、地図の隅に小さく書かれた寺。苔の参道、千年の杉、誰もいない本堂の前で聞こえる、自分の呼吸の音。"
        image={images.hiddenTemple}
      />

      <section className="py-24 mx-auto max-w-[1200px] px-6">
        <div className="grid md:grid-cols-2 gap-10">
          {temples.map((t, i) => (
            <article key={t.name} className="group border-t border-border pt-8">
              <div className="flex items-baseline justify-between mb-4">
                <div className="font-display text-sm text-forest opacity-60">
                  No. {String(i + 1).padStart(2, "0")}
                </div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
                  {t.era}
                </div>
              </div>
              <h2 className="font-jp text-4xl text-forest-deep mb-2">{t.name}</h2>
              <div className="font-display italic text-muted-foreground mb-5">{t.town}</div>
              <p className="font-jp text-base leading-loose text-foreground/80">{t.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-24 bg-forest-deep text-stone">
        <div className="mx-auto max-w-[900px] px-6">
          <div className="text-stone/60 text-[10px] tracking-[0.4em] uppercase mb-6">— 巡礼の心得 · A Note on Visiting —</div>
          <h2 className="font-jp text-3xl md:text-4xl mb-8 leading-snug">古寺を訪ねるときの、小さな約束</h2>
          <ul className="space-y-5 font-jp text-base md:text-lg leading-loose opacity-85">
            <li>— 山門で一礼してから境内に入る。出るときも同じく。</li>
            <li>— 本堂では大きな声を出さない。携帯の電源は切る。</li>
            <li>— 写真撮影が禁じられている堂がある。表示を必ず確かめる。</li>
            <li>— 賽銭は静かに置く。投げ入れる音を避ける。</li>
            <li>— 朝早く、または夕暮れに訪ねると、寺の本来の時間に出会える。</li>
          </ul>
        </div>
      </section>
    </SiteLayout>
  );
}
