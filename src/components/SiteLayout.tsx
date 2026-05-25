import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const NAV = [
  { to: "/", label: "Home", jp: "表紙" },
  { to: "/destinations", label: "Destinations", jp: "隠れた地" },
  { to: "/seasonal", label: "Seasonal", jp: "四季の旅" },
  { to: "/temples", label: "Temples", jp: "古寺巡礼" },
  { to: "/cafes", label: "Cafés", jp: "里の喫茶" },
  { to: "/guides", label: "Guides", jp: "案内" },
  { to: "/journal", label: "Journal", jp: "紀行" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [path]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/55 backdrop-blur-2xl border-b border-border/50 shadow-[0_14px_40px_rgba(9,18,35,0.08)]"
          : "bg-linear-to-b from-ink/55 via-ink/18 to-transparent"
      }`}
    >
      <div className="mx-auto max-w-375 px-4 md:px-8 py-4">
        <div className={`h-20 md:h-22 px-4 md:px-6 rounded-full border flex items-center justify-between gap-4 ${scrolled ? "border-border/70 bg-stone/72" : "border-stone/15 bg-stone/8 backdrop-blur-2xl"}`}>
        <Link to="/" className="group flex items-center gap-3">
          <span className="seal text-base">隠</span>
          <div className={`leading-tight ${scrolled ? "text-foreground" : "text-stone"}`}>
            <div className="font-display text-xl tracking-wide">Kakushi</div>
            <div className="text-[10px] tracking-[0.3em] uppercase opacity-70">Hidden Japan</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-2 rounded-full border border-border/40 px-2 py-1.5 bg-background/40 backdrop-blur-md">
          {NAV.map((n) => {
            const active = path === n.to;
            return (
              <Link
                key={n.to}
                to={n.to}
                className={`group relative rounded-full px-3 py-2 text-[13px] tracking-wide transition-all ${
                  active
                    ? "bg-ink text-stone shadow-sm"
                    : scrolled
                      ? "text-foreground/75 hover:bg-ink/5 hover:text-foreground"
                      : "text-stone/85 hover:bg-stone/10 hover:text-stone"
                }`}
              >
                <span className="font-jp text-[15px] mr-1">{n.jp}</span>
                <span className="opacity-60 text-[11px]">{n.label}</span>
                {active && (
                  <span className="absolute -bottom-2 left-0 right-0 h-px bg-current opacity-60" />
                )}
              </Link>
            );
          })}
        </nav>

        <Link
          to="/contact"
          className={`hidden md:inline-flex items-center rounded-full text-[11px] tracking-[0.25em] uppercase border px-5 py-3 transition-colors ${
            scrolled
              ? "border-ink/20 bg-ink text-stone hover:bg-river"
              : "border-stone/35 text-stone hover:bg-stone hover:text-ink"
          }`}
        >
          旅の相談 · Plan a Journey
        </Link>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden p-2 rounded-full border ${scrolled ? "text-foreground border-border/60 bg-stone/80" : "text-stone border-stone/20 bg-stone/10"}`}
        >
          <div className="w-6 h-px bg-current mb-1.5" />
          <div className="w-6 h-px bg-current mb-1.5" />
          <div className="w-4 h-px bg-current" />
        </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border/60 shadow-[0_24px_50px_rgba(9,18,35,0.12)]">
          <nav className="px-6 py-6 flex flex-col gap-3">
            {NAV.map((n) => (
              <Link key={n.to} to={n.to} className="flex items-baseline gap-3 rounded-2xl px-4 py-3 text-foreground hover:bg-secondary/60">
                <span className="font-jp text-lg">{n.jp}</span>
                <span className="text-xs uppercase tracking-widest opacity-60">{n.label}</span>
              </Link>
            ))}
            <Link to="/contact" className="mt-2 inline-flex w-fit rounded-full bg-ink px-5 py-3 text-xs uppercase tracking-widest text-stone">
              旅の相談 →
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-linear-to-br from-ink via-forest-deep to-ink text-stone/85 mt-32">
      <div className="mx-auto max-w-350 px-6 md:px-10 py-20 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="flex items-center gap-3 mb-6">
            <span className="seal">隠</span>
            <div>
              <div className="font-display text-2xl text-stone">Kakushi</div>
              <div className="text-[10px] tracking-[0.3em] uppercase opacity-60">Hidden Japan Journal</div>
            </div>
          </div>
          <p className="font-jp text-sm leading-loose opacity-80 max-w-sm">
            日本の片隅に残る、まだ誰も知らない場所を訪ねるための、静かな旅の案内。観光ガイドではなく、暮らしの中へそっと入っていくための小さな手帖です。
          </p>
        </div>

        <div className="md:col-span-2">
          <div className="text-[10px] tracking-[0.3em] uppercase opacity-50 mb-4">旅の入口</div>
          <ul className="space-y-2.5 text-sm font-jp">
            <li><Link to="/destinations" className="hover:text-stone">隠れた地</Link></li>
            <li><Link to="/seasonal" className="hover:text-stone">四季の旅</Link></li>
            <li><Link to="/temples" className="hover:text-stone">古寺巡礼</Link></li>
            <li><Link to="/cafes" className="hover:text-stone">里の喫茶</Link></li>
            <li><Link to="/guides" className="hover:text-stone">旅の手引き</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <div className="text-[10px] tracking-[0.3em] uppercase opacity-50 mb-4">読みもの</div>
          <ul className="space-y-2.5 text-sm font-jp">
            <li><Link to="/journal" className="hover:text-stone">紀行</Link></li>
            <li><Link to="/about" className="hover:text-stone">私たちについて</Link></li>
            <li><Link to="/faq" className="hover:text-stone">よくある質問</Link></li>
            <li><Link to="/contact" className="hover:text-stone">お問い合わせ</Link></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <div className="text-[10px] tracking-[0.3em] uppercase opacity-50 mb-4">便りを受け取る</div>
          <p className="font-jp text-sm opacity-80 mb-4 leading-relaxed">
            季節ごとに、まだ知られていない宿、喫茶、神社をひとつだけ、手紙のようにお送りします。
          </p>
          <form className="flex border border-stone/30 bg-stone/5" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="your@email.jp"
              className="bg-transparent flex-1 px-4 py-3 text-sm placeholder:text-stone/40 focus:outline-none"
            />
            <button className="px-5 text-[10px] tracking-[0.3em] uppercase bg-stone text-ink hover:bg-stone/90">
              送る
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-stone/15">
        <div className="mx-auto max-w-350 px-6 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] opacity-60">
          <div>© 2026 Kakushi · 隠し旅誌 — Made quietly in Kyoto.</div>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-stone">Privacy</Link>
            <Link to="/terms" className="hover:text-stone">Terms</Link>
            <Link to="/contact" className="hover:text-stone">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </>
  );
}

export function PageHero({
  eyebrow,
  title,
  jp,
  intro,
  image,
  tone = "moss",
}: {
  eyebrow: string;
  title: string;
  jp: string;
  intro?: string;
  image: string;
  tone?: "moss" | "amber" | "indigo" | "stone";
}) {
  const toneStyles = {
    moss: {
      overlay: "from-ink/62 via-forest-deep/34 to-river/35",
      label: "text-stone/90",
      chip: "border-stone/25 bg-stone/10 text-stone/90",
    },
    amber: {
      overlay: "from-ink/60 via-earth/38 to-vermilion/30",
      label: "text-stone/95",
      chip: "border-stone/20 bg-stone/12 text-stone/95",
    },
    indigo: {
      overlay: "from-ink/66 via-river/32 to-forest-deep/45",
      label: "text-stone/90",
      chip: "border-stone/25 bg-stone/10 text-stone/90",
    },
    stone: {
      overlay: "from-ink/52 via-forest-deep/24 to-ink/58",
      label: "text-stone/90",
      chip: "border-stone/20 bg-stone/8 text-stone/90",
    },
  }[tone];

  return (
    <section className="relative h-[68vh] min-h-120 w-full overflow-hidden">
      <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover scale-[1.03]" />
      <div className={`absolute inset-0 bg-linear-to-b ${toneStyles.overlay}`} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.08),transparent_30%)]" />
      <div className="relative h-full mx-auto max-w-350 px-6 md:px-10 flex flex-col justify-end pb-16">
        <div className="mb-6 inline-flex items-center gap-3">
          <span className={`h-px w-10 ${toneStyles.label}`} />
          <div className={`text-[10px] tracking-[0.4em] uppercase ${toneStyles.label}`}>{eyebrow}</div>
        </div>
        <div className="flex items-end gap-10 flex-wrap">
          <h1 className="font-jp text-stone text-5xl md:text-7xl leading-tight">{jp}</h1>
          <div className="text-stone/75 font-display text-2xl md:text-3xl pb-2">— {title}</div>
        </div>
        {intro && (
          <p className="mt-6 max-w-2xl text-stone/85 font-jp text-base md:text-lg leading-loose">
            {intro}
          </p>
        )}
        <div className={`mt-8 inline-flex self-start rounded-full border px-4 py-2 text-[10px] tracking-[0.35em] uppercase ${toneStyles.chip}`}>
          Edited in Kyoto
        </div>
      </div>
    </section>
  );
}
