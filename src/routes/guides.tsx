import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { images } from "@/data/site";

export const Route = createFileRoute("/guides")({
  head: () => ({
    meta: [
      { title: "旅の手引き · Travel Guides — Kakushi" },
      {
        name: "description",
        content:
          "Practical guides for slow travel in rural Japan — local trains, ryokan etiquette, seasonal planning, and packing for the countryside.",
      },
      { property: "og:url", content: "/guides" },
    ],
    links: [{ rel: "canonical", href: "/guides" }],
  }),
  component: GuidesPage,
});

const guides = [
  {
    num: "01",
    jp: "ローカル線の旅",
    en: "Local Train Journeys",
    note: "本数の少ない地方鉄道を、目的ではなく時間として楽しむための一日の組み方。",
    read: "10分",
  },
  {
    num: "02",
    jp: "古民家宿の作法",
    en: "Kominka Ryokan Etiquette",
    note: "玄関、囲炉裏、共同浴場での過ごし方。古い宿で快く過ごすための小さな知識。",
    read: "7分",
  },
  {
    num: "03",
    jp: "季節別の持ち物",
    en: "Seasonal Packing",
    note: "山あいの冬は氷点下、夏の島は強い日差し。各季節と地形に合わせた荷造り。",
    read: "8分",
  },
  {
    num: "04",
    jp: "言葉の旅",
    en: "A Few Words of Japanese",
    note: "村で交わされる挨拶、注文、感謝の最小限の表現集。発音と意味のメモ付き。",
    read: "12分",
  },
  {
    num: "05",
    jp: "予算の組み方",
    en: "Budgeting a Slow Trip",
    note: "三泊四日の田舎旅に、現実的にいくら必要か。宿、食事、交通、見学料の目安。",
    read: "9分",
  },
  {
    num: "06",
    jp: "写真の撮り方",
    en: "Photographing Quietly",
    note: "村人の暮らしを侵さず、風景の静けさを残すための撮影の心得。",
    read: "6分",
  },
];

export function GuidesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Practical Guides"
        title="Travel Guides"
        jp="旅の手引き"
        intro="行き方、泊まり方、過ごし方。田舎を旅するために知っておきたい、小さな手引きをまとめました。"
        image={images.localTrain}
        tone="amber"
      />

      <section className="py-24 mx-auto max-w-300 px-6">
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
          {guides.map((g) => (
            <article key={g.num} className="group border-t border-border pt-8">
              <div className="flex items-baseline justify-between mb-4">
                <div className="font-display text-sm text-forest opacity-60">No. {g.num}</div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
                  {g.read} read
                </div>
              </div>
              <h2 className="font-jp text-3xl text-forest-deep mb-2">{g.jp}</h2>
              <div className="font-display italic text-muted-foreground mb-5">{g.en}</div>
              <p className="font-jp text-base leading-loose text-foreground/80 mb-5">{g.note}</p>
              <Link
                to="/guides"
                className="text-xs tracking-[0.25em] uppercase text-forest border-b border-forest/40 pb-1"
              >
                読む →
              </Link>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
