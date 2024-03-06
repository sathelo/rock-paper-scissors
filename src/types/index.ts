export type TResultGame = -1 | 0 | 1;

export enum EItemGame {
  rock = "rock",
  scissors = "scissors",
  paper = "paper",
}

export enum EAuxiliary {
  bonus = "bonus",
  rules = "rules",
}

export type TGameItem = {
  ico: string;
  role: EItemGame;
  styleColor: string;
};

export const WINS: Record<EItemGame, EItemGame[]> = {
  [EItemGame.rock]: [EItemGame.scissors],
  [EItemGame.scissors]: [EItemGame.paper],
  [EItemGame.paper]: [EItemGame.rock],
};
