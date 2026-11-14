"use client";

import { useState } from "react";

export default function CreatePage() {
  const [topic, setTopic] = useState("");
  const [audience, setAudience] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const generate = async () => {
    if (!topic.trim()) {
      setError("Please enter a topic");
      return;
    }

    setLoading(true);
    setError("");
    setResult("");

    try {
      const res = await fetch("/api/product", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic, audience }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Generation failed");
      }

      setResult(data.content);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-zinc-800 px-6 py-4">
        <a href="/" className="text-zinc-400 hover:text-white">← PathForge</a>
        <h1 className="text-xl font-semibold mt-1">Create Digital Product</h1>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-4">Start a new product</h2>
        <p className="text-zinc-400 mb-8">
          Tell PathForge what you want to create. It will generate a clear product structure and path.
        </p>

        <div className="space-y-4 mb-8">
          <input
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="Product topic or niche (e.g. 'beginner fitness for busy parents')"
            className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 outline-none focus:border-zinc-600"
          />
          <textarea
            value={audience}
            onChange={(e) => setAudience(e.target.value)}
            placeholder="Who is it for and what problem does it solve?"
            rows={4}
            className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 outline-none focus:border-zinc-600"
          />
          <button
            onClick={generate}
            disabled={loading}
            className="w-full py-3 bg-white text-black font-medium rounded-lg hover:bg-zinc-200 transition disabled:opacity-50"
          >
            {loading ? "Generating path..." : "Generate Path & Outline"}
          </button>
        </div>

        {error && (
          <div className="p-4 bg-red-950 border border-red-800 rounded-lg text-red-200 mb-6">
            {error}
          </div>
        )}

        {result && (
          <div className="border border-zinc-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4">Your Product Path</h3>
            <div className="whitespace-pre-wrap text-zinc-300 leading-relaxed">
              {result}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
