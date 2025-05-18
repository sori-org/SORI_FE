import {useMutation, useQueryClient} from '@tanstack/react-query';
import { updateNickname } from '../../apis/user/updateNickname.js';

export const useUpdateNickname = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationKey: ['updateNickname'],
        mutationFn: (newName) => updateNickname(newName),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['user'] });
        },
    });
};
