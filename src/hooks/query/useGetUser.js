import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../apis/user/getUser";

export const useGetUser = () => {
    return useQuery({
        queryKey: ["user"],
        queryFn: getUser,
        retry: false,
        staleTime: 1000 * 60 * 5,
    });
};
