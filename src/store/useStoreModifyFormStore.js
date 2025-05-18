import { create } from 'zustand';

const initialFormState = {
    storeName: '',
    storePhoneNumber: '',
    storeDescription: '',
};

export const useStoreModifyFormStore = create((set) => ({
    ...initialFormState,

    setInitialData: (data) => set({
        storeName: data.store_name || '',
        storePhoneNumber: data.store_phone || '',
        storeDescription: data.store_description || '',
    }),

    setStoreName: (name) => set({ storeName: name }),

    setStorePhoneNumber: (phone) => set({ storePhoneNumber: phone }),

    setStoreDescription: (description) => set({ storeDescription: description }),
}));