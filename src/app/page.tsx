import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-zinc-800 rounded flex items-center justify-center font-bold text-xl tracking-tight">
              PF
            </div>
            <span className="text-xl font-semibold tracking-wide">PATHFORGE</span>
          </div>
          <nav className="flex gap-8 text-sm text-zinc-400">
            <Link href="/chat" className="hover:text-white transition">Assistant</Link>
            <Link href="/create" className="hover:text-white transition">Create Product</Link>
            <Link href="/dashboard" className="hover:text-white transition">Dashboard</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-24 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-zinc-900 border border-zinc-700 rounded-2xl mb-6">
            <span className="text-4xl font-bold tracking-tighter">PF</span>
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
          Clear paths.<br />Real digital products.
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          PathForge is the free AI platform that turns starting an online business from confusing into clear. Create digital products, get logical routes, and launch — no matter your background or budget.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/create"
            className="px-8 py-4 bg-white text-black font-medium rounded-lg hover:bg-zinc-200 transition"
          >
            Create a Digital Product
          </Link>
          <Link
            href="/chat"
            className="px-8 py-4 border border-zinc-700 rounded-lg hover:bg-zinc-900 transition"
          >
            Talk to PathForge
          </Link>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-8 text-left">
          <div className="p-6 border border-zinc-800 rounded-xl">
            <h3 className="font-semibold mb-2">Digital Product Builder</h3>
            <p className="text-sm text-zinc-400">Research niches, structure content, and generate complete products with guided AI workflows.</p>
          </div>
          <div className="p-6 border border-zinc-800 rounded-xl">
            <h3 className="font-semibold mb-2">Logical Business Paths</h3>
            <p className="text-sm text-zinc-400">Step-by-step routes with time and cost estimates so cluelessness is never the blocker.</p>
          </div>
          <div className="p-6 border border-zinc-800 rounded-xl">
            <h3 className="font-semibold mb-2">Free for Everyone</h3>
            <p className="text-sm text-zinc-400">Core tools available regardless of financial background. No expensive programs required.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
