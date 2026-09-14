import { redirect } from "next/navigation";
import { getFirstEntryId } from "../data";

/**
 * /wiki/[slug] —— 自动跳到该 wiki 的首个词条。
 * 每个词条都是独立页面（/wiki/pm/jtbd），不再把全部词条堆在一页往下滚。
 */
export default async function WikiSlugRedirect({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const first = getFirstEntryId(slug);

  if (!first) redirect("/wiki");
  redirect(`/wiki/${slug}/${first}`);
}
