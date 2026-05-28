import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { stories, images } from "@/data/site";

export const Route = createFileRoute("/journal")({
  head: () => ({
    meta: [
      { title: "紀行 · Journal — Kakushi" },
      {
        name: "description",
        content: "Travel essays and quiet field notes from across Japan's hidden countryside.",
      },
      { property: "og:url", content: "/journal" },
    ],
    links: [{ rel: "canonical", href: "/journal" }],
  }),
  component: JournalPage,
});

function JournalPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Field Notes & Travel Essays"
        title="The Journal"
        jp="紀行"
        intro="編集部が訪ねた村、宿、寺、列車。長い文章と、ひとつの写真。観光記事ではない、旅の手記をお届けします。"
        image={images.localTrain}
        tone="indigo"
      />

      <section className="py-24 mx-auto max-w-275 px-6">
        <div className="space-y-20">
          {stories.map((s, i) => (
            <article key={s.slug} className="grid md:grid-cols-12 gap-10 group cursor-pointer">
              <div className="md:col-span-5">
                <div className="relative overflow-hidden aspect-4/5">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="md:col-span-7 flex flex-col justify-center">
                <div className="flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-5">
                  <span>No. {String(i + 1).padStart(2, "0")}</span>
                  <span>·</span>
                  <span>{s.category}</span>
                  <span>·</span>
                  <span>{s.date}</span>
                  <span>·</span>
                  <span>{s.readTime}</span>
                </div>
                <h2 className="font-jp text-4xl md:text-5xl text-forest-deep mb-6 leading-tight group-hover:text-forest transition-colors">
                  {s.title}
                </h2>
                <p className="font-jp text-lg leading-loose text-foreground/80 mb-6">{s.excerpt}</p>
                <div className="space-y-4 text-base font-jp text-foreground/75 leading-loose">
                  {s.body.slice(0, 2).map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>
                <Link
                  to="/journal"
                  className="mt-8 inline-flex self-start text-sm tracking-[0.25em] uppercase text-forest border-b border-forest/40 pb-1"
                >
                  続きを読む →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
