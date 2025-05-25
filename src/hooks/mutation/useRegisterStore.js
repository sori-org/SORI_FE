import {useMutation, useQueryClient} from '@tanstack/react-query';
import { registerStore } from '../../apis/store/registerStore.js';

export const useRegisterStore = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationKey: ['registerStore'],
        mutationFn: registerStore,
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ['user'] });
            console.log("Store registered successfully:", data);
        },
    });
};

