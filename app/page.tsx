import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-[#f5f5f0]">
      <Navbar />

      <section className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-6xl flex-col justify-center px-6 py-20">
        <p className="mb-6 text-xs uppercase tracking-[0.35em] text-white/50">
          Portfolio / 2026
        </p>

        <h1 className="max-w-4xl text-5xl font-semibold tracking-tight md:text-7xl">
          M. DZUL&apos;ARSYIL AZIZ
        </h1>

        <div className="mt-8 space-y-2 text-lg uppercase tracking-[0.25em] text-white/80 md:text-2xl">
          <p>UI/UX Designer</p>
          <p>Front-end Developer</p>
        </div>

        <p className="mt-8 max-w-xl text-base leading-7 text-white/60 md:text-lg">
          Designing interfaces. Building digital experiences. Shaping ideas into
          clear, modern, and interactive products.
        </p>

        <div className="mt-10">
          <a
            href="#about"
            className="inline-flex items-center gap-3 border border-white/15 px-5 py-3 text-sm uppercase tracking-[0.2em] transition hover:border-white/40 hover:bg-white hover:text-black"
          >
            Explore Work
            <span>↓</span>
          </a>
        </div>

        <div className="mt-20 text-right text-sm uppercase tracking-[0.35em] text-white/20">
          Design × Code
        </div>
      </section>

      <section id="about" className="mx-auto w-full max-w-6xl px-6 py-24">
        <p className="mb-4 text-xs uppercase tracking-[0.35em] text-white/40">
          About
        </p>
        <p className="max-w-2xl text-2xl leading-relaxed text-white/80 md:text-4xl">
          I design and build digital experiences where creativity meets technology.
        </p>
      </section>

      <Projects />
      <Contact />
    </main>
  );
}
