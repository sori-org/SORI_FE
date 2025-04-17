import { create } from 'zustand';

export const useUserStore = create((set, get) => ({
    // 1. 초기값: localStorage에 있으면 불러오기, 없으면 기본값
    user: JSON.parse(localStorage.getItem("user")) || {
        userId: null,
        accountId: null,
        displayName: '',
        phoneNumber: '',
        mainStoreId: null,
        storeList: [],
    },

    setUser: (userData) => {
        const serialized = JSON.stringify(userData);
        localStorage.setItem("user", serialized);
        set({ user: userData });
    },

    // 3. 대표 가게 설정 (mainStoreId만 바꾸기)
    setMainStore: (storeId) => {
        const current = get().user;
        if (!current) return;

        const updatedUser = { ...current, mainStoreId: storeId };
        localStorage.setItem("user", JSON.stringify(updatedUser));
        set({ user: updatedUser });
    },

    // 4. 로그아웃: 상태 초기화 + localStorage 삭제
    logout: () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("user");
        set({
            user: {
                userId: null,
                accountId: null,
                displayName: '',
                phoneNumber: '',
                mainStoreId: null,
                storeList: [],
            },
        });
    },
}));
