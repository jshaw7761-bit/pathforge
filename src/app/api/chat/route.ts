import { NextRequest, NextResponse } from "next/server";

const SYSTEM_PROMPT = `You are PathForge, a specialized AI assistant that helps people create digital products and start online businesses.

Your core mission:
- Provide clear, logical, step-by-step paths
- Help users create digital products (ebooks, guides, mini-courses, templates, planners)
- Reduce cluelessness around starting an online business
- Give practical estimates (time, rough costs, pricing ideas) when useful
- Keep advice realistic and accessible to people from any financial background
- Be direct, structured, and action-oriented

When helping with digital products:
1. Clarify the niche/topic and target audience
2. Suggest a clear product structure
3. Outline content sections
4. Recommend next practical steps

Always be helpful, concise, and focused on moving the user forward.`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    const apiKey = process.env.OPENAI_API_KEY;
    const baseUrl = process.env.OPENAI_BASE_URL || "https://api.openai.com/v1";
    const model = process.env.OPENAI_MODEL || "gpt-4o-mini";

    if (!apiKey) {
      return NextResponse.json(
        { error: "Missing OPENAI_API_KEY in environment variables" },
        { status: 500 }
      );
    }

    const response = await fetch(`${baseUrl}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages,
        ],
        temperature: 0.7,
        max_tokens: 1500,
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
    const content = data.choices?.[0]?.message?.content || "No response generated.";

    return NextResponse.json({ content });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
