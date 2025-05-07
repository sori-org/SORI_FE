import { create } from 'zustand';

export const useUserStore = create((set) => ({
    userId: JSON.parse(localStorage.getItem("userId")) || null,
    displayName: localStorage.getItem("displayName") || "",
    mainStoreId: JSON.parse(localStorage.getItem("mainStoreId")) || null,

    setUserId: (id) => {
        localStorage.setItem("userId", JSON.stringify(id));
        set({ userId: id });
    },

    setDisplayName: (name) => {
        localStorage.setItem("displayName", name);
        set({ displayName: name });
    },

    setMainStoreId: (id) => {
        localStorage.setItem("mainStoreId", JSON.stringify(id));
        set({ mainStoreId: id });
    },

    logout: () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("userId");
        localStorage.removeItem("displayName");
        localStorage.removeItem("mainStoreId");
        set({
            userId: null,
            displayName: "",
            mainStoreId: null,
        });
    },
}));
