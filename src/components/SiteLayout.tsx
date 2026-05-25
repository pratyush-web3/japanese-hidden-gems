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
          ? "bg-background/85 backdrop-blur-md border-b border-border/60"
          : "bg-gradient-to-b from-black/40 to-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="group flex items-center gap-3">
          <span className="seal text-base">隠</span>
          <div className={`leading-tight ${scrolled ? "text-foreground" : "text-stone"}`}>
            <div className="font-display text-xl tracking-wide">Kakushi</div>
            <div className="text-[10px] tracking-[0.3em] uppercase opacity-70">Hidden Japan</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {NAV.map((n) => {
            const active = path === n.to;
            return (
              <Link
                key={n.to}
                to={n.to}
                className={`group relative text-[13px] tracking-wide transition-colors ${
                  scrolled ? "text-foreground/80 hover:text-foreground" : "text-stone/90 hover:text-stone"
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
          className={`hidden md:inline-flex items-center text-[11px] tracking-[0.25em] uppercase border px-4 py-2.5 transition-colors ${
            scrolled
              ? "border-foreground/40 text-foreground hover:bg-foreground hover:text-background"
              : "border-stone/60 text-stone hover:bg-stone hover:text-forest-deep"
          }`}
        >
          旅の相談 · Plan a Journey
        </Link>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden p-2 ${scrolled ? "text-foreground" : "text-stone"}`}
        >
          <div className="w-6 h-px bg-current mb-1.5" />
          <div className="w-6 h-px bg-current mb-1.5" />
          <div className="w-4 h-px bg-current" />
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border">
          <nav className="px-6 py-6 flex flex-col gap-4">
            {NAV.map((n) => (
              <Link key={n.to} to={n.to} className="flex items-baseline gap-3 text-foreground">
                <span className="font-jp text-lg">{n.jp}</span>
                <span className="text-xs uppercase tracking-widest opacity-60">{n.label}</span>
              </Link>
            ))}
            <Link to="/contact" className="mt-2 text-xs uppercase tracking-widest text-forest">
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
    <footer className="bg-forest-deep text-stone/85 mt-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-20 grid gap-12 md:grid-cols-12">
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
          <form className="flex border border-stone/30" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="your@email.jp"
              className="bg-transparent flex-1 px-4 py-3 text-sm placeholder:text-stone/40 focus:outline-none"
            />
            <button className="px-5 text-[10px] tracking-[0.3em] uppercase bg-stone text-forest-deep hover:bg-stone/90">
              送る
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-stone/15">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] opacity-60">
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
}: {
  eyebrow: string;
  title: string;
  jp: string;
  intro?: string;
  image: string;
}) {
  return (
    <section className="relative h-[68vh] min-h-[480px] w-full overflow-hidden">
      <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-forest-deep/40 via-forest-deep/30 to-forest-deep/70" />
      <div className="relative h-full mx-auto max-w-[1400px] px-6 md:px-10 flex flex-col justify-end pb-16">
        <div className="text-stone/90 text-[10px] tracking-[0.4em] uppercase mb-6">{eyebrow}</div>
        <div className="flex items-end gap-10 flex-wrap">
          <h1 className="font-jp text-stone text-5xl md:text-7xl leading-tight">{jp}</h1>
          <div className="text-stone/70 font-display text-2xl md:text-3xl pb-2">— {title}</div>
        </div>
        {intro && (
          <p className="mt-6 max-w-2xl text-stone/85 font-jp text-base md:text-lg leading-loose">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}
