import {useMutation, useQueryClient} from '@tanstack/react-query';
import { registerStore } from '../../apis/store/registerStore.js';
import {useUserStore} from "../../store/useUserStore.js";

export const useRegisterStore = () => {
    const queryClient = useQueryClient();
    const addStore = useUserStore((state) => state.addStore);

    return useMutation({
        mutationKey: ['registerStore'],
        mutationFn: registerStore,
        onSuccess: (data) => {
            if (data && data.store_id) {
                addStore(data);
            }

            queryClient.invalidateQueries({ queryKey: ['user', 'getMainStore'] });
            console.log("Store registered successfully:", data);
        },
        onError: (error) => {
            console.error("Failed to register store:", error);
        },
    });
};

