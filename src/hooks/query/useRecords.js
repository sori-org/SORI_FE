import { useQuery } from '@tanstack/react-query';
import { getRecords } from '../../apis/record/getRecords.js';

export const useRecords = () => {
    return useQuery({
        queryKey: ['records'],
        queryFn: getRecords,
        staleTime: 10000, // 10초 동안 Fresh
    });
};
