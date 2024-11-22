import { create } from "zustand";

interface PogoState {
  pogo: any[];
  selectedLocation: {
    name?: string;
    latitude: number;
    longitude: number;
    description?: string;
    image?: string;
    address?: string;
    years?: { [key: string]: boolean };
  } | null;
  setPogo: (pogo: any[]) => void;
  setSelectedLocation: (location: {
    name?: string;
    latitude: number;
    longitude: number;
    description?: string;
    image?: string;
    address?: string;
    years?: { [key: string]: boolean };
  }) => void;
  toggleDetails: boolean;
  setToggleTrue: () => void;
  setToggleFalse: () => void;
}

export const usePogoStore = create<PogoState>((set) => ({
  pogo: [],
  selectedLocation: null,
  setPogo: (data: any[]) => set({ pogo: data }),
  setSelectedLocation: (location) => set({ selectedLocation: location }),
  toggleDetails: false,
  setToggleTrue: () => set({ toggleDetails: true }),
  setToggleFalse: () => set({ toggleDetails: false }),
}));
