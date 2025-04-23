import { useMutation } from '@tanstack/react-query';
import { updateNickname } from '../../apis/my/updateNickname.js';

export const useUpdateNickname = () => {
    return useMutation({
        mutationKey: ['updateNickname'],
        mutationFn: (newName) => updateNickname(newName),
    });
};
