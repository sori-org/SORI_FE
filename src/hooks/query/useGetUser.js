import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../apis/user/getUser";

export const useGetUser = () => {
    return useQuery({
        queryKey: ["user"],
        queryFn: getUser,
    });
};
