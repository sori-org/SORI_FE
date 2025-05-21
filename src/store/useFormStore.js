import { create } from 'zustand';
import {useUserStore} from "./useUserStore.js";

const initialFormData = {
    store_id: useUserStore.getState().user?.main_store_id || '',
    sns_platform: '',
    promotion_target: '',
    promotion_name: "",
    gender_target: '',
    age_range_target: '',
    content_format: '',
    external_sources: [],
    user_prompt: "",
    user_image: "",
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
    tempContentId: null,
    setTempContentId: (id) => set({ tempContentId: id }),


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