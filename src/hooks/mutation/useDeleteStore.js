import {useMutation, useQueryClient} from '@tanstack/react-query';
import {deleteStore} from "../../apis/store/deleteStore.js";

export const useDeleteStore = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationKey: ['deleteStore'],
        mutationFn: deleteStore,
        onSuccess: () => {
            console.log('가게 삭제 성공');
            queryClient.invalidateQueries({queryKey: ['storeList']})
        },
        onError: (error) => {
            console.error('가게 삭제 실패:', error);
            alert('가게 삭제에 실패했습니다.');
        },
    });
};

