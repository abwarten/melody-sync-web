import { type DAWSettings } from "@/entities/daw/model/types";
import { type Subtitle } from "@/entities/subtitle/model/types";

class DAWClient {
  async saveProject(settings: DAWSettings) {
    // API 구현
  }

  async loadSubtitles(projectId: string): Promise<Subtitle[]> {
    // API 구현
    return [];
  }

  async syncSubtitles(projectId: string, subtitles: Subtitle[]) {
    // API 구현
  }
}

export const dawClient = new DAWClient();
