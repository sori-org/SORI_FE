import { useQuery } from '@tanstack/react-query';
import { getStoreList } from '../../apis/store/getStoreList.js';

export const useStoreList = () => {
    return useQuery({
        queryKey: ['storeList'],
        queryFn: getStoreList,
        staleTime: 0
    });
};
