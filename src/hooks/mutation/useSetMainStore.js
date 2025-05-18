import {useMutation, useQueryClient} from "@tanstack/react-query";
import axios from "../../apis/axiosInstance.js";
import {useUserStore} from "../../store/useUserStore.js";
import {getUser} from "../../apis/user/getUser.js";

export const useSetMainStore = () => {
    const queryClient = useQueryClient();
    const {setMainStoreId} = useUserStore();

    return useMutation({
        mutationKey: ["setMainStore"],
        mutationFn: (storeId) => axios.patch(`/api/stores/${storeId}/set-main`),
        onSuccess: async () => {
            queryClient.invalidateQueries({ queryKey: ["storeList"] });
            queryClient.invalidateQueries({ queryKey: ["user"] });
            try {
                const res =  await getUser();
                const updatedUserInfo = res;
                setMainStoreId(updatedUserInfo.main_store_id);

            } catch (error) {
                console.error("업데이트된 유저 정보 가져오기 실패:", error);
                alert("대표 가게 정보 업데이트에 실패했습니다. 페이지를 새로고침해주세요.");
            }
        },
        onError: (error) => {
            console.error("대표 가게 설정 뮤테이션 실패:", error);
            alert("대표 가게 설정에 실패했습니다: " + (error.message || "알 수 없는 오류"));
        }
    });
};
