import { create } from 'zustand';

const LOCAL_STORAGE_KEY = 'user';

export const useUserStore = create((set, get) => ({
    // 1. 초기값: localStorage에 있으면 불러오기, 없으면 기본값
    user: JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || {
        userId: null,
        accountId: null,
        displayName: '',
        phoneNumber: '',
        mainStoreId: null,
        storeList: [],
    },

    // 2. 유저 정보 설정 + localStorage 동기화
    setUser: (userData) => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(userData));
        set({ user: userData });
    },

    // 3. 대표 가게 설정 (mainStoreId만 바꾸기)
    setMainStore: (storeId) => {
        const current = get().user;
        if (!current) return;

        const updatedUser = { ...current, mainStoreId: storeId };
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedUser));
        set({ user: updatedUser });
    },

    // 4. 로그아웃: 상태 초기화 + localStorage 삭제
    logout: () => {
        localStorage.removeItem(LOCAL_STORAGE_KEY);
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
