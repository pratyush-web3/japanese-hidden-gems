import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { images } from "@/data/site";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "プライバシーポリシー · Privacy — Kakushi" },
      { name: "description", content: "Kakushi privacy policy." },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Legal" title="Privacy Policy" jp="プライバシーポリシー" image={images.seasonWinter} />
      <article className="py-24 mx-auto max-w-[760px] px-6 space-y-10 font-jp text-base leading-loose text-foreground/85">
        <p>Kakushi編集室（以下、当方）は、本ウェブサイトを通じて取得する利用者の個人情報を、以下の方針に基づき適切に取り扱います。最終更新日：2026年4月1日。</p>

        <section>
          <h2 className="font-display text-2xl text-forest-deep mb-4">第一条 取得する情報</h2>
          <p>当方は、ニュースレター登録、お問い合わせフォーム、寄稿の応募の際に、氏名、メールアドレス、連絡先、本文を取得することがあります。これら以外の情報を強制的に取得することはありません。</p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-forest-deep mb-4">第二条 利用目的</h2>
          <p>取得した個人情報は、利用者への返信、ニュースレターの配信、寄稿に関する連絡、サイト運営の改善以外の目的では使用しません。第三者への譲渡・販売は一切行いません。</p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-forest-deep mb-4">第三条 クッキー</h2>
          <p>本サイトはアクセス解析のために最小限のクッキーを使用します。利用者はブラウザの設定によりクッキーの利用を拒否することができますが、その場合、一部機能が制限されることがあります。</p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-forest-deep mb-4">第四条 開示・訂正・削除</h2>
          <p>利用者は、自身の個人情報の開示、訂正、削除を編集部に求めることができます。editor@kakushi.jp までご連絡ください。本人確認の上、合理的な期間内に対応します。</p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-forest-deep mb-4">第五条 改訂</h2>
          <p>本ポリシーは法令の変更または運営方針の変更に応じて改訂されることがあります。重要な変更がある場合は、本ページにて告知します。</p>
        </section>
      </article>
    </SiteLayout>
  );
}
