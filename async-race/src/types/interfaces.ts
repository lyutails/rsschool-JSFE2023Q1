export interface WitchBroom {
  name: string;
  color: string;
  id: number;
}

export interface PageLimitResponse {
  key: string;
  value: string;
}

export interface GetWinner {
  id?: number;
  wins?: number;
  time?: number;
}
