export interface Localization {
  identifier: string;
  audioFile?: string;
  localizedText: string;
}

export type LocalizationsMap = Map<string, Localization>;
