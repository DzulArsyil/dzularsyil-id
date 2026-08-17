const projects = [
  {
    title: "Founit",
    type: "UI/UX",
    year: "2023",
    desc: "Digital product experience with clean visuals and motion.",
  },
  {
    title: "Skyexplore",
    type: "UI/UX",
    year: "2025",
    desc: "Interactive exploration platform with modern interface.",
  },
  {
    title: "Sentrawarga",
    type: "WEB APP",
    year: "2026",
    desc: "Data-focused system design for clear user workflows.",
  },
  {
    title: "Kartina",
    type: "Product Design",
    year: "2025",
    desc: "Minimal productivity experience with smooth interactions.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto w-full max-w-6xl px-6 py-24">
      <p className="mb-4 text-xs uppercase tracking-[0.35em] text-white/40">
        Selected Work
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="border border-white/10 bg-white/5 p-6 transition hover:border-white/25 hover:bg-white/8"
          >
            <div className="mb-8 flex items-center justify-between text-xs uppercase tracking-[0.25em] text-white/40">
              <span>{project.type}</span>
              <span>{project.year}</span>
            </div>

            <h3 className="text-3xl font-semibold">{project.title}</h3>
            <p className="mt-4 max-w-md text-sm leading-7 text-white/60">
              {project.desc}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
