import { useQuery } from '@tanstack/react-query';
import { getMyUser } from '../../apis/my/getMyUser';

export const useMyUser = () => {
    return useQuery({
        queryKey: ['myUser'],
        queryFn: getMyUser,
        staleTime: 10 * 1000, // 10초
    });
};
