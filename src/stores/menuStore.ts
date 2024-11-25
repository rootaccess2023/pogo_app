import { create } from "zustand";

interface MenuState {
  menu: boolean;
  toggleMenu: (menu: boolean) => void;
}

export const useMenuStore = create<MenuState>((set) => ({
  menu: false,
  toggleMenu: (menu: boolean) => set({ menu: !menu }),
}));
