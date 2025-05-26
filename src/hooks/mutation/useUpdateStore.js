import {useMutation, useQueryClient} from '@tanstack/react-query';
import {updateStore} from "../../apis/store/updateStore.js";

export const useUpdateStore = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationKey: ['updateStore'],
        mutationFn: ({storeId, updatedData}) => updateStore(storeId, updatedData),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['setMainStore'] });
            queryClient.invalidateQueries({ queryKey: ['storeList'] });
            queryClient.invalidateQueries({ queryKey: ['user'] });
        },
        onError: (error) => {
            alert("가게 정보 수정에 실패했습니다: " + (error.message || "알 수 없는 오류"));
        },
    });
};
