import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { images } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "お問い合わせ · Contact — Kakushi" },
      { name: "description", content: "Get in touch with the Kakushi editorial team — for travel planning, story pitches, or quiet correspondence." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Write to us"
        title="Contact"
        jp="お問い合わせ"
        intro="旅の相談、寄稿のご提案、ひとことの感想。返事には少し時間をいただきますが、必ずお応えします。"
        image={images.coastalVillage}
        tone="amber"
      />

      <section className="py-24 mx-auto max-w-275 px-6 grid md:grid-cols-2 gap-16">
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-2 block">お名前</label>
            <input className="w-full border-b border-border bg-transparent py-3 focus:outline-none focus:border-forest font-jp" />
          </div>
          <div>
            <label className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-2 block">メールアドレス</label>
            <input type="email" className="w-full border-b border-border bg-transparent py-3 focus:outline-none focus:border-forest" />
          </div>
          <div>
            <label className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-2 block">ご用件</label>
            <select className="w-full border-b border-border bg-transparent py-3 focus:outline-none focus:border-forest font-jp">
              <option>旅の相談</option>
              <option>寄稿の提案</option>
              <option>取材の依頼</option>
              <option>その他</option>
            </select>
          </div>
          <div>
            <label className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-2 block">本文</label>
            <textarea rows={6} className="w-full border-b border-border bg-transparent py-3 focus:outline-none focus:border-forest font-jp resize-none" />
          </div>
          <button className="bg-forest-deep text-stone px-10 py-4 text-[10px] tracking-[0.3em] uppercase hover:bg-forest">
            送信する
          </button>
        </form>

        <aside className="space-y-10">
          <div>
            <div className="label-eyebrow mb-3">— 編集部 —</div>
            <h3 className="font-jp text-2xl text-forest-deep mb-3">Kakushi 編集室</h3>
            <p className="font-jp leading-loose text-foreground/80">
              〒604-8001<br />
              京都市中京区寺町通御池上ル<br />
              二階の小さな窓辺
            </p>
          </div>
          <div>
            <div className="label-eyebrow mb-3">— 連絡先 —</div>
            <p className="font-jp leading-loose text-foreground/80">
              editor@kakushi.jp<br />
              月曜〜金曜 / 十時〜十七時
            </p>
          </div>
          <div>
            <div className="label-eyebrow mb-3">— 取材について —</div>
            <p className="font-jp leading-loose text-foreground/80">
              寄稿は随時受け付けています。一度ご連絡の上、概要をお送りください。
            </p>
          </div>
        </aside>
      </section>
    </SiteLayout>
  );
}
