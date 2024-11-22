import { create } from "zustand";

interface ViewState {
  zoom: number;
  setZoom: (zoom: number) => void;
  pitch: number;
  setPitch: (pitch: number) => void;
}

export const useViewStore = create<ViewState>((set) => ({
  zoom: 5,
  setZoom: (zoom: number) => set({ zoom }),
  pitch: 0,
  setPitch: (pitch: number) => set({ pitch }),
}));
