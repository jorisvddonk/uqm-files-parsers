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


export interface Point {
  x: number;
  y: number;
}

export interface Frame {
  filename: string;
  transparent_color: number;
  colormap_index: number;
  hotspot: Point;
}

export interface AnimationFrame {
  frame_index: number;
  duration: number;
}

export enum AnimationType {
  BACKGROUND,
  CIRCULAR,
  YO_YO,
  TALK,
  RANDOM,
}

export interface Animation {
  name: string;
  type: AnimationType;
  frames: AnimationFrame[];
  base_restart_rate?: number;
  random_restart_rate?: number;
  block_mask?: number;
  do_not_play_when_other_anim: string[];
}

export type AnimationsMap = Map<string, Animation>;

export interface Graphics {
  frames: Frame[];
  animations: AnimationsMap;
}


export interface CAnim {
  start_index: number;
  num_frames: number;
  anim_type: AnimationType;
  wait_talk: boolean;
  frame_rate_min: number;
  frame_rate_max: number;
  restart_rate_min: number;
  restart_rate_max: number;
  block_mask: number;
}
