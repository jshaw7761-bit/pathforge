export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-zinc-800 px-6 py-4">
        <a href="/" className="text-zinc-400 hover:text-white">← PathForge</a>
        <h1 className="text-xl font-semibold mt-1">Dashboard</h1>
      </header>
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-8">Your Projects</h2>
        <div className="border border-zinc-800 rounded-xl p-12 text-center text-zinc-500">
          No projects yet. Start by creating a digital product.
        </div>
      </main>
    </div>
  );
}
