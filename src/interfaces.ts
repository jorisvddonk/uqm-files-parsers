export interface Localization {
  identifier: string;
  audioFile?: string;
  localizedText: string;
}

export type LocalizationsMap = Map<string, Localization>;

export interface Synchronization {
  identifier: string;
  timings: number[];
}

export type SynchronizationsMap = Map<string, Synchronization>;
