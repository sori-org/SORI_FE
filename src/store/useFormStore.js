import { create } from 'zustand';

const useFormStore = create((set) => ({
    currentStepIndex: 0,
    formData: {
        storeId: '',
        snsPlatform: '',
        promotionTarget: '',
        promotionName: '',
        genderTarget: '',
        ageRangeTarget: '',
        contentFormat: '',
        externalSources: [],
    },
    totalSteps: 7,
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