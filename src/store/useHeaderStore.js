import { create } from 'zustand';

export const useHeaderStore = create((set) => ({
    title: '',
    setTitle: (title) => set({ title }),
}));
