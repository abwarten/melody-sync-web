import dynamic from "next/dynamic";
import { readFileSync } from "fs";
import { join } from "path";

const HowToUsePage = dynamic(() => import("@/features/howToUse"), {
  loading: () => (
    <div className="min-h-screen bg-white pt-24 pb-16 animate-pulse" />
  ),
});

async function getContent() {
  const filePath = join(process.cwd(), "public", "content", "how-to-use.md");
  const content = readFileSync(filePath, "utf-8");
  return content;
}

export default async function Page() {
  const content = await getContent();
  return <HowToUsePage content={content} />;
}
