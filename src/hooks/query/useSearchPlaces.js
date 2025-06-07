import { useQuery } from "@tanstack/react-query";
import { searchPlaceByKeyword } from '../../apis/store/serachPlaceByKeyword.js';

export const useSearchPlaces = (keyword) => {
    return useQuery({
        queryKey: ["search", keyword],
        queryFn: searchPlaceByKeyword,
        enabled: !!keyword,
    });
};
