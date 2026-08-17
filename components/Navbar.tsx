export default function Navbar() {
  return (
    <nav className="w-full border-b border-white/10 px-6 py-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <span className="text-sm uppercase tracking-[0.3em]">Portfolio</span>

        <div className="flex gap-6 text-sm text-white/70">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}
