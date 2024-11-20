import { create } from "zustand";

interface PogoState {
  pogo: any[];
  setPogo: (pogo: any[]) => void;
}

export const usePogoStore = create<PogoState>((set) => ({
  pogo: [],
  setPogo: (data: any[]) => set({ pogo: data }),
}));
