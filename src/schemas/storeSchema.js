import { z } from 'zod';

export const storeSchema = z.object({
    storeName: z.string().min(1, '가게명을 입력해주세요'),
    ownerName: z.string().min(1, '대표자 이름을 입력해주세요'),
    phone: z.string().regex(/^010-\d{4}-\d{4}$/, '전화번호 형식이 잘못됨'),
    storePhone: z.string().regex(/^\d{2,3}-\d{3,4}-\d{4}$/, '가게 전화번호 형식 오류'),
});
