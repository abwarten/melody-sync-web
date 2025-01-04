import { HowToUsePage } from "@/features/howToUse/ui/HowToUsePage";
import { readFileSync } from "fs";
import { join } from "path";

async function getContent() {
  const filePath = join(process.cwd(), "public", "content", "how-to-use.md");
  const content = readFileSync(filePath, "utf-8");
  return content;
}

export default async function Page() {
  const content = await getContent();
  return <HowToUsePage content={content} />;
}
