import {useMutation, useQueryClient} from "@tanstack/react-query";
import axios from "../../apis/axiosInstance.js";

export const useSetMainStore = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationKey: ["setMainStore"],
        mutationFn: (storeId) => axios.patch(`/api/stores/${storeId}/set-main`),
        onSuccess: () => {
            console.log("대표 가게 설정 성공");
            queryClient.invalidateQueries({ queryKey: ["storeList"] });
        },
    });
};
