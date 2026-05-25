import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { images } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "私たちについて · About — Kakushi" },
      { name: "description", content: "Kakushi is a quiet editorial journal from Kyoto, dedicated to the hidden corners of rural Japan." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="From Kyoto, Quietly"
        title="About Us"
        jp="私たちについて"
        image={images.hiddenTemple}
      />
      <section className="py-24 mx-auto max-w-[820px] px-6">
        <div className="space-y-8 font-jp text-lg leading-loose text-foreground/85">
          <p className="first-letter:font-display first-letter:text-6xl first-letter:float-left first-letter:mr-3 first-letter:leading-none first-letter:text-forest">
            Kakushi（隠し）は、京都の小さな編集室から生まれた旅誌です。観光案内に載らない、しかし確かにそこにある日本の場所を、季節とともに記録していくことを目的としています。
          </p>
          <p>
            私たちの基準は単純です。一、人の暮らしが今も続いていること。二、観光地化されていないこと。三、訪れる者がその場の静けさを乱さない作法を持って入れる場所であること。この三つを満たす場所だけを、Kakushiは紹介します。
          </p>
          <p>
            創刊は二〇二二年の春。京都府美山町の茅葺き屋根の集落で、編集長の祖母が淹れてくれた珈琲が、この旅誌のはじまりでした。観光バスの音が届かないその村で、私たちは「日本にはまだ、こういう場所が残っている」ということを、もっと丁寧に伝えたいと願いました。
          </p>
          <p>
            年に四回、季節ごとに新しい号を発行しています。広告は載せません。ホテルや宿泊施設からの紹介料も受け取りません。記事の場所はすべて、編集部が自分の足で訪ね、自分の言葉で書いたものです。
          </p>
        </div>

        <div className="ink-rule my-20" />

        <div className="grid md:grid-cols-3 gap-10 text-center">
          {[
            { num: "12", label: "発行号数" },
            { num: "67", label: "紹介した村と町" },
            { num: "4", label: "編集部の旅人" },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-display text-6xl text-forest mb-2">{s.num}</div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-forest-deep text-stone">
        <div className="mx-auto max-w-[900px] px-6 text-center">
          <div className="text-stone/60 text-[10px] tracking-[0.4em] uppercase mb-6">— 編集理念 —</div>
          <p className="font-jp text-2xl md:text-3xl leading-loose italic">
            「観光ではなく、出会いを。<br />消費ではなく、敬意を。<br />速さではなく、時間を。」
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
