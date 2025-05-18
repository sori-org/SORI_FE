import { create } from 'zustand';
import {useUserStore} from "./useUserStore.js";

const initialFormData = {
    storeId: useUserStore.getState().user?.main_store_id || '',
    snsPlatform: '',
    promotionTarget: '',
    promotionName: '',
    genderTarget: '',
    ageRangeTarget: '',
    contentFormat: '',
    externalSources: [],
    userPrompt: '',
    userImage: '',
};

const useFormStore = create((set) => ({
    currentStepIndex: 0,
    totalSteps: 7,
    formData: initialFormData,

    updateFormData: (newData) => set((state) => ({
        formData: {
            ...state.formData,
            ...newData,
        },
    })),

    resetFormData: () => set({
        formData: initialFormData
    }),

    nextStep: (totalSteps) => set((state) => ({
        currentStepIndex: Math.min(state.currentStepIndex + 1, totalSteps - 1)
    })),
    prevStep: () => set((state) => ({
        currentStepIndex: Math.max(state.currentStepIndex - 1, 0)
    })),
    goToStep: (index, totalSteps) => set(() => ({
        currentStepIndex: (index < 0 || index >= totalSteps) ? 0 : index
    })),

}));

export default useFormStore;