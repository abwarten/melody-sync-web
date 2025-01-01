export interface DAWSettings {
  projectName: string;
  bpm: number;
  timeSignature: string;
}

export interface DAWState {
  isRecording: boolean;
  currentTime: number;
  settings: DAWSettings;
}
