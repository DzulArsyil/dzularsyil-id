export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-md">
        <nav className="w-full border-b border-white/10 px-6 py-4">
            <div className="mx-auto flex max-w-6xl items-center justify-between">

                <div className="flex gap-6 text-sm text-white/70">
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
                </div>
            </div>
        </nav>
    </header>
  );
}
