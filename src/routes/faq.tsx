import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { images } from "@/data/site";
import { useState } from "react";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "よくある質問 · FAQ — Kakushi" },
      { name: "description", content: "Frequently asked questions about traveling Japan's hidden countryside with Kakushi." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
  }),
  component: FAQPage,
});

const faqs = [
  { q: "Kakushiが紹介する場所は予約制ですか？", a: "ほとんどの場所は予約不要で訪れることができますが、宿泊施設や一部の喫茶店は、特に冬季や繁忙期には事前予約をお勧めします。各記事の中で予約方法を記載しています。" },
  { q: "英語は通じますか？", a: "都市部の宿や駅では英語の案内がありますが、村の小さな宿や喫茶店では、日本語のみの場合が多いです。基本的な挨拶と注文の言葉を覚えておくと、旅がより豊かになります。「旅の手引き」に簡単な言葉集を掲載しています。" },
  { q: "車がなくても旅できますか？", a: "ローカル線とバスで多くの場所を訪れることができます。ただし、本数が限られる地域もあるため、事前に時刻表を確認することをお勧めします。一部の集落はレンタカーが便利です。" },
  { q: "冬の旅は厳しいですか？", a: "雪国の村は氷点下になりますが、その分、雪化粧した茅葺き屋根や、灯火のともる温泉街など、冬にしか見られない景色があります。十分な防寒具と滑りにくい靴の準備を。" },
  { q: "子ども連れでも大丈夫ですか？", a: "古民家宿や喫茶店の多くは子連れも歓迎していますが、静寂を大切にする場所では、年齢制限を設けているところもあります。各記事に注意点を記載しています。" },
  { q: "写真撮影は自由ですか？", a: "屋外は基本的に自由ですが、村人の暮らしや顔を撮影する際は、必ず一言声をかけてください。寺院の本堂や一部の宿の内部は撮影禁止の場合があります。" },
  { q: "Kakushiは予約サービスを提供していますか？", a: "いいえ。Kakushiは編集を行う旅誌であり、予約や手配は行いません。記事の情報を元に、ご自身で計画を立てていただく形になります。" },
  { q: "宿泊施設からの紹介料はありますか？", a: "Kakushiはいかなる宿泊施設、飲食店、観光協会からも紹介料を受け取っていません。掲載するすべての場所は、編集部が自費で訪ね、自らの判断で選んでいます。" },
];

function FAQPage() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Frequently Asked"
        title="FAQ"
        jp="よくある質問"
        image={images.ruralCafe}
        tone="moss"
      />
      <section className="py-24 mx-auto max-w-225 px-6">
        <div className="space-y-2">
          {faqs.map((f, i) => (
            <div key={i} className="border-b border-border">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left py-7 flex items-start justify-between gap-6 group"
              >
                <div className="flex items-start gap-5">
                  <span className="font-display text-forest text-sm mt-1.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-jp text-lg md:text-xl text-forest-deep group-hover:text-forest">
                    {f.q}
                  </span>
                </div>
                <span className="font-display text-2xl text-forest opacity-60">
                  {open === i ? "−" : "+"}
                </span>
              </button>
              {open === i && (
                <div className="pb-8 pl-12 pr-4 font-jp leading-loose text-foreground/80 animate-fade-in">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
