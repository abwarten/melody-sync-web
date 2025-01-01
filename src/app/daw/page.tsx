import { DAWInterface } from "@/widgets/daw-interface/ui/DAWInterface";
import { SubtitleEditor } from "@/features/subtitle-editor/ui/SubtitleEditor";

export default function DAWPage() {
  return (
    <div>
      <DAWInterface />
      <SubtitleEditor subtitles={[]} onEdit={() => {}} />
    </div>
  );
}
