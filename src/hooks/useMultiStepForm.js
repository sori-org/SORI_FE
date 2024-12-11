import { useState } from 'react';

export function useMultiStepForm(steps) {
    const [currentStepIndex, setCurrentStepIndex] = useState(0);

    const nextStep = () => {
        setCurrentStepIndex((prev) => Math.min(prev + 1, steps.length - 1));
    };

    const prevStep = () => {
        setCurrentStepIndex((prev) => Math.max(prev - 1, 0));
    };

    const goToStep = (index) => {
        if (index < 0 || index >= steps.length) return;
        setCurrentStepIndex(index);
    };

    return {
        currentStepIndex,
        step: steps[currentStepIndex],
        steps,
        nextStep,
        prevStep,
        goToStep
    };
}