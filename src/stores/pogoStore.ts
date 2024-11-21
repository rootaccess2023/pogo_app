import { create } from "zustand";

interface PogoState {
  pogo: any[];
  selectedLocation: {
    name: string;
    latitude: number;
    longitude: number;
    description: string;
    image: string;
  } | null;
  setPogo: (pogo: any[]) => void;
  setSelectedLocation: (location: {
    name: string;
    latitude: number;
    longitude: number;
    description: string;
    image: string;
  }) => void;
  toggleDetails: boolean;
  setToggleDetails: () => void;
}

export const usePogoStore = create<PogoState>((set) => ({
  pogo: [],
  selectedLocation: null,
  setPogo: (data: any[]) => set({ pogo: data }),
  setSelectedLocation: (location) => set({ selectedLocation: location }),
  toggleDetails: false,
  setToggleDetails: () => set({ toggleDetails: true }),
}));
