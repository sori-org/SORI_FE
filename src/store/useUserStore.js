import { create } from 'zustand';

export const useUserStore = create((set, get) => ({
    // 초기값: localStorage에 저장된 유저 불러오기
    user: JSON.parse(localStorage.getItem("user")) || {
        user_id: null,
        account_id: null,
        display_name: '',
        main_store_id: null,
        storeList: [],
    },

    // 유저 설정 + 로컬 저장
    setUser: (userData) => {
        localStorage.setItem("user", JSON.stringify(userData));
        set({ user: userData });
    },

    // 대표 가게 ID만 업데이트
    setMainStore: (storeId) => {
        const current = get().user;
        if (!current) return;

        const updatedUser = { ...current, main_store_id: storeId };
        localStorage.setItem("user", JSON.stringify(updatedUser));
        set({ user: updatedUser });
    },

    // 로그아웃: 상태 초기화 + localStorage 삭제
    logout: () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("user");
        set({
            user: {
                user_id: null,
                account_id: null,
                display_name: '',
                main_store_id: null,
                storeList: [],
            },
        });
    },
}));
