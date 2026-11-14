import { NextRequest, NextResponse } from "next/server";

const PRODUCT_PROMPT = `You are PathForge's Digital Product Builder.

Given a topic and audience description, create a clear, actionable digital product plan.

Structure your response with these sections:

**Product Title**
A strong, clear title.

**Target Audience**
Who this is for.

**Core Promise**
What transformation or result the product delivers.

**Product Type Recommendation**
(ebook, guide, mini-course, template pack, etc.) and why.

**Detailed Outline**
5–8 clear sections or modules with brief descriptions of what each covers.

**Suggested Pricing**
Realistic price range for this type of product.

**Next Steps**
3 practical actions the user should take next.

Keep the response structured, practical, and ready to act on.`;

export async function POST(req: NextRequest) {
  try {
    const { topic, audience } = await req.json();

    if (!topic) {
      return NextResponse.json({ error: "Topic is required" }, { status: 400 });
    }

    const apiKey = process.env.OPENAI_API_KEY;
    const baseUrl = process.env.OPENAI_BASE_URL || "https://api.openai.com/v1";
    const model = process.env.OPENAI_MODEL || "gpt-4o-mini";

    if (!apiKey) {
      return NextResponse.json(
        { error: "Missing OPENAI_API_KEY" },
        { status: 500 }
      );
    }

    const userMessage = `Topic: ${topic}\n\nAudience / Problem: ${audience || "Not specified"}`;

    const response = await fetch(`${baseUrl}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        messages: [
          { role: "system", content: PRODUCT_PROMPT },
          { role: "user", content: userMessage },
        ],
        temperature: 0.7,
        max_tokens: 2000,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      return NextResponse.json(
        { error: `LLM API error: ${error}` },
        { status: response.status }
      );
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content || "Could not generate product plan.";

    return NextResponse.json({ content });
  } catch (error) {
    console.error("Product API error:", error);
    return NextResponse.json(
      { error: "Failed to generate product plan" },
      { status: 500 }
    );
  }
}
