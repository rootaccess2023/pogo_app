import { create } from "zustand";

interface PogoState {
  pogo: any[];
  selectedLocation: { latitude: number; longitude: number } | null;
  setPogo: (pogo: any[]) => void;
  setSelectedLocation: (location: {
    latitude: number;
    longitude: number;
  }) => void;
}

export const usePogoStore = create<PogoState>((set) => ({
  pogo: [],
  selectedLocation: null,
  setPogo: (data: any[]) => set({ pogo: data }),
  setSelectedLocation: (location) => set({ selectedLocation: location }),
}));
