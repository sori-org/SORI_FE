import { useMutation } from '@tanstack/react-query';
import { registerStore } from '../../apis/store/registerStore.js';

export const useRegisterStore = () => {
    return useMutation({
        mutationKey: ['registerStore'],
        mutationFn: registerStore,
    });
};

