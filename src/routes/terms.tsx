import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { images } from "@/data/site";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "利用規約 · Terms of Use — Kakushi" },
      { name: "description", content: "Kakushi terms of use." },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Legal" title="Terms of Use" jp="利用規約" image={images.seasonSpring} />
      <article className="py-24 mx-auto max-w-[760px] px-6 space-y-10 font-jp text-base leading-loose text-foreground/85">
        <p>本利用規約（以下、本規約）は、Kakushi編集室（以下、当方）が本ウェブサイト上で提供するすべての情報、サービスの利用条件を定めるものです。利用者は本サイトを利用することにより、本規約に同意したものとみなします。</p>

        <section>
          <h2 className="font-display text-2xl text-forest-deep mb-4">第一条 著作権</h2>
          <p>本サイトに掲載されているすべての文章、写真、地図、図表の著作権は、当方または正当な権利者に帰属します。無断転載、複製、改変を禁じます。引用の場合は、出典を明記の上、合理的な範囲内で行ってください。</p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-forest-deep mb-4">第二条 情報の正確性</h2>
          <p>本サイトに掲載する情報（営業時間、交通手段、料金など）は、取材時点のものです。利用者は実際の利用にあたり、各施設に最新情報を確認してください。掲載情報の変更によって生じた損害について、当方は責任を負いません。</p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-forest-deep mb-4">第三条 旅行に関する責任</h2>
          <p>本サイトの情報は旅行の参考としてご利用ください。実際の旅行に伴う計画立案、予約、移動、滞在中の安全管理は、すべて利用者自身の責任において行うものとします。</p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-forest-deep mb-4">第四条 禁止事項</h2>
          <p>本サイトの情報を、紹介された地域住民の平穏を害する目的、または商業的な無断利用に使用することを禁じます。記事に登場する施設や住民への過度な接触、写真撮影など、迷惑となる行為は固くお断りします。</p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-forest-deep mb-4">第五条 準拠法</h2>
          <p>本規約の解釈および適用は、日本法に準拠します。本サイトの利用に関して紛争が生じた場合、京都地方裁判所を専属的合意管轄裁判所とします。</p>
        </section>
      </article>
    </SiteLayout>
  );
}
