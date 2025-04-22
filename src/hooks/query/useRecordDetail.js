import { useQuery } from '@tanstack/react-query';
import { getRecordDetail } from '../../apis/record/getRecordDetail.js'

export const useRecordDetail = (id) => {
    return useQuery({
        queryKey: ['record', id],
        queryFn: () => getRecordDetail(id),
    });
};