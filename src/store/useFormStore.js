import { create } from 'zustand';

const useFormStore = create((set) => ({
    currentStepIndex: 0,
    formData: {
        platform: '',
        item: '',
        result: '',
        whichApi: '',
        image: '',
        text: '',
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
    resetStep: () => set(() => ({ currentStepIndex: 0 })),

    updateFormData: (newData) => set((state) => ({
        formData: { ...state.formData, ...newData }
    }))
}));

export default useFormStore;