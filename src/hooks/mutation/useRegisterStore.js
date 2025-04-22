import { useMutation } from '@tanstack/react-query';
import { registerStore } from '../../apis/register/registerStore.js';

export const useRegisterStore = () => {
    return useMutation({
        mutationKey: ['registerStore'],
        mutationFn: registerStore,
    });
};

