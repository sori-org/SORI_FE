import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "../../apis/axiosMockInstance.js";

export const useSetMainStore = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (mainStoreId) =>
            axios.patch("/stores/set-default", { mainStoreId }),
        onSuccess: () => {
            // 대표 가게 변경 후 유저 정보와 점포 리스트 다시 가져오기
            queryClient.invalidateQueries({ queryKey: ["myUser"] });
            queryClient.invalidateQueries({ queryKey: ["myStores"] });
        },
    });
};
