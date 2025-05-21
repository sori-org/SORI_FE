import { create } from 'zustand';

export const useUserStore = create((set,get) => ({
    user: JSON.parse(localStorage.getItem("user")) || null,

    setUser: (userData) => {
        localStorage.setItem("user", JSON.stringify(userData));
        set({ user: userData });
    },

    setNickname: (newNickname) => {
        const currentUser = get().user;

        if (currentUser) {
            const updatedUser = {
                ...currentUser,
                display_name: newNickname,
            };

            localStorage.setItem("user", JSON.stringify(updatedUser));

            set({ user: updatedUser });
        } else {
            console.warn("닉네임 업데이트 실패: 현재 사용자 정보가 없습니다.");
        }
    },

    setMainStoreId: (newMainStoreId) => {
        const currentUser = get().user;

        if (currentUser) {
            const updatedUser = {
                ...currentUser,
                main_store_id: newMainStoreId,
            };

            localStorage.setItem("user", JSON.stringify(updatedUser));

            set({ user: updatedUser });
        } else {
            console.warn("main_store_id 업데이트 실패: 현재 사용자 정보가 없습니다.");
        }
    },

    setLogout: () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("user");
        set({ user: null });
    },
}));
