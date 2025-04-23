import { useQuery } from '@tanstack/react-query';
import { getMyStores } from '../../apis/my/getMyStores';

export const useMyStores = () => {
    return useQuery({
        queryKey: ['myStores'],
        queryFn: getMyStores,
        staleTime: 0
    });
};
