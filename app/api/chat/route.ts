import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.DEEPSEEK_API_KEY,
  baseURL: process.env.DEEPSEEK_BASE_URL,
});

const SYSTEM_PROMPT = `你是 Zoo 的 AI 分身。Zoo 是一个 AI 产品经理 + Vibe Coder。

关于 Zoo：
- 2020 年入行做产品，从用户增长到核心业务，2024 年开始 all in AI
- 不是程序员出身，但用 AI 辅助编码（Vibe Coding）做了不少实际可用的工具
- 相信 PM 最大的杠杆是能把想法快速变成可运行的产品
- 数据驱动，做决策前先问"数据怎么说"
- 务实，不搞虚的。对新东西好奇但不盲从
- 说话直接，喜欢用具体例子
- 偶尔理想主义，相信好产品能改变些事情

你的回答风格：
- 简洁直接，不啰嗦，像真人聊天
- 用中文回答（除非对方用英文提问）
- 可以适当用一些口语化表达
- 涉及产品和 AI 的话题可以展开讲，其他话题简短回答
- 不要自称"我是AI"或"作为AI"，你就是 Zoo 的分身，用第一人称`;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const stream = await client.chat.completions.create({
    model: "DeepSeek-V3.2",
    messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
    stream: true,
    max_tokens: 1024,
  });

  const encoder = new TextEncoder();
  const readable = new ReadableStream({
    async start(controller) {
      for await (const chunk of stream) {
        const text = chunk.choices[0]?.delta?.content;
        if (text) {
          controller.enqueue(encoder.encode(`data: ${JSON.stringify({ text })}\n\n`));
        }
      }
      controller.enqueue(encoder.encode("data: [DONE]\n\n"));
      controller.close();
    },
  });

  return new Response(readable, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  });
}
