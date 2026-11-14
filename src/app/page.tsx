import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-zinc-800/80 backdrop-blur sticky top-0 z-50 bg-black/70">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-br from-zinc-700 to-zinc-900 border border-zinc-600 rounded-lg flex items-center justify-center font-bold text-lg tracking-tighter">
              PF
            </div>
            <span className="text-lg font-semibold tracking-wide">PATHFORGE</span>
          </Link>
          <nav className="hidden md:flex gap-8 text-sm text-zinc-400">
            <Link href="/chat" className="hover:text-white transition">Assistant</Link>
            <Link href="/create" className="hover:text-white transition">Create Product</Link>
            <Link href="/dashboard" className="hover:text-white transition">Dashboard</Link>
          </nav>
          <Link
            href="/chat"
            className="px-4 py-2 bg-white text-black text-sm font-medium rounded-lg hover:bg-zinc-200 transition"
          >
            Start Building
          </Link>
        </div>
      </header>

      {/* Hero */}
      <main className="max-w-5xl mx-auto px-6 pt-20 pb-28 text-center">
        <div className="mb-10 flex justify-center">
          <div className="relative">
            <div className="w-28 h-28 bg-gradient-to-br from-zinc-800 to-zinc-950 border border-zinc-700 rounded-3xl flex items-center justify-center shadow-2xl">
              <span className="text-5xl font-bold tracking-tighter">PF</span>
            </div>
            <div className="absolute -inset-1 bg-gradient-to-r from-zinc-600 to-zinc-800 rounded-3xl blur opacity-20 -z-10" />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
          Clear paths.<br />
          <span className="text-zinc-400">Real digital products.</span>
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          PathForge is the free AI platform that turns starting an online business from confusing into clear. Create digital products, get logical routes, and launch — no matter your background or budget.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          <Link
            href="/create"
            className="px-8 py-4 bg-white text-black font-medium rounded-xl hover:bg-zinc-100 transition text-lg"
          >
            Create a Digital Product
          </Link>
          <Link
            href="/chat"
            className="px-8 py-4 border border-zinc-700 rounded-xl hover:bg-zinc-900 transition text-lg"
          >
            Talk to PathForge
          </Link>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 text-left">
          <div className="p-7 border border-zinc-800 rounded-2xl bg-zinc-950/50 hover:border-zinc-700 transition">
            <div className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center mb-4 text-xl">⚙️</div>
            <h3 className="font-semibold text-lg mb-2">Digital Product Builder</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">Research niches, structure content, and generate complete products with guided AI workflows.</p>
          </div>
          <div className="p-7 border border-zinc-800 rounded-2xl bg-zinc-950/50 hover:border-zinc-700 transition">
            <div className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center mb-4 text-xl">🗺️</div>
            <h3 className="font-semibold text-lg mb-2">Logical Business Paths</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">Step-by-step routes with time and cost estimates so cluelessness is never the blocker.</p>
          </div>
          <div className="p-7 border border-zinc-800 rounded-2xl bg-zinc-950/50 hover:border-zinc-700 transition">
            <div className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center mb-4 text-xl">✨</div>
            <h3 className="font-semibold text-lg mb-2">Free for Everyone</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">Core tools available regardless of financial background. No expensive programs required.</p>
          </div>
        </div>
      </main>

      <footer className="border-t border-zinc-800 py-8 text-center text-sm text-zinc-500">
        PathForge — Clear paths. Real products.
      </footer>
    </div>
  );
}
