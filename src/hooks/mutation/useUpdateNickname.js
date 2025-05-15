import { useMutation } from '@tanstack/react-query';
import { updateNickname } from '../../apis/user/updateNickname.js';

export const useUpdateNickname = () => {
    return useMutation({
        mutationKey: ['updateNickname'],
        mutationFn: (newName) => updateNickname(newName),
    });
};
