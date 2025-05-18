import { useQuery } from "@tanstack/react-query";
import {getStore} from "../../apis/store/getStore.js";

export const useGetMainStore = (storeId) => {
    return useQuery({
        queryKey: ["getMainStore", storeId],
        queryFn: () => getStore(storeId),
        enabled: !!storeId,
        onSuccess: (data) => {
            console.log("Store data fetched successfully:", data);
        },
    });
};
