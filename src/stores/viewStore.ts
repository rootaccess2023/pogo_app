import { create } from "zustand";

interface ViewState {
  zoom: number;
  setZoom: (zoom: number) => void;
  pitch: number;
  setPitch: (pitch: number) => void;
  scrollPosition: number;
  setScrollPosition: (position: number) => void;
  itemRefs: (HTMLLIElement | null)[];
  setItemRefs: (refs: (HTMLLIElement | null)[]) => void;
}

export const useViewStore = create<ViewState>((set) => ({
  zoom: 5,
  setZoom: (zoom: number) => set({ zoom }),
  pitch: 0,
  setPitch: (pitch: number) => set({ pitch }),
  scrollPosition: 0, // Initialize scroll position
  setScrollPosition: (position: number) => set({ scrollPosition: position }),
  itemRefs: [],
  setItemRefs: (refs: (HTMLLIElement | null)[]) => set({ itemRefs: refs }),
}));
