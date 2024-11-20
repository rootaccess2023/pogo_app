import { create } from "zustand";

interface YearState {
  year: number;
  setYear: (year: number) => void;
}

export const useYearStore = create<YearState>((set) => ({
  year: 2017,
  setYear: (year: number) => set({ year }),
}));
