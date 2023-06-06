import { letters } from "./letters";
import { create } from "zustand";

export const generateGameLevel = ({ nbStages }) => {
  const level = [];

  for (let i = 0; i < nbStages; i++) {
    const stage = [];
    const nbOptions = 3 + 1;
    for (let j = 0; j < nbOptions; j++) {
      let letter = null;
      while (!letter || stage.includes(letter)) {
        letter = letters[Math.floor(Math.random() * letters.length)];
      }
      stage.push(letter);
    }
    stage[Math.floor(Math.random() * stage.length)].correct = true;
    level.push(stage);
  }
  return level;
};

export const useGameStore = create((set) => ({
  level: null,
  currentStage: 0,
  currentLetter: null,
  mode: "letter",
  startGame: () => {
    const level = generateGameLevel({ nbStages: 5 });
    const currentLetter = level[0].find((letter) => letter.correct);
    set({ level, currentStage: 0, currentLetter });
  },
  nextStage: () => {
    set((state) => {
      const currentStage = state.currentStage + 1;
      const currentLetter = state.level[currentStage].find((letter) => letter.correct);
      return { currentStage, currentLetter };
    });
  },
}));
