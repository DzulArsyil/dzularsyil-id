export default function Hero() {
  return (
    <section className="relative mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-6xl items-center px-6">
      <div className="max-w-5xl">
        <p className="mb-6 text-xs uppercase tracking-[0.4em] text-white/45">
          UI/UX Designer · Front-end Developer
        </p>

        <div className="overflow-hidden">
          <h1 className="text-6xl font-semibold uppercase leading-[0.9] tracking-[-0.06em] text-white md:text-8xl lg:text-[9rem]">
            <span className="block">Design</span>
            <span className="block text-white/70">× Code</span>
            <span className="block text-[var(--accent)]">× Motion</span>
          </h1>
        </div>

        <p className="mt-8 max-w-2xl text-sm leading-7 text-white/65 md:text-base md:leading-8">
          I craft interactive digital experiences with a sharp visual identity,
          smooth motion, and a clean futuristic edge.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#work"
            className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-transform duration-300 hover:scale-[1.02]"
          >
            View Selected Work
          </a>

          <a
            href="#contact"
            className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white/90 transition-colors duration-300 hover:border-white/30 hover:bg-white/5"
          >
            Let&apos;s Talk
          </a>
        </div>

        <div className="mt-14 grid gap-4 border-t border-white/10 pt-6 md:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/35">
              Focus
            </p>
            <p className="mt-2 text-sm text-white/75">
              Product Design, Interface Systems, Motion
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/35">
              Location
            </p>
            <p className="mt-2 text-sm text-white/75">Indonesia</p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/35">
              Availability
            </p>
            <p className="mt-2 text-sm text-white/75">
              Open for selected projects
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
