export interface Subtitle {
  id: string;
  startTime: number;
  endTime: number;
  text: string;
  language: string;
}

export interface SubtitleTrack {
  id: string;
  language: string;
  subtitles: Subtitle[];
}
