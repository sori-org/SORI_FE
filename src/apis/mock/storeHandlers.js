import { http, HttpResponse } from 'msw';
import { mockUser } from './userHandlers';

export let mockStoreList = [
    {
        store_id: 1,
        store_name: "소리네",
        store_address: "경기도 성남시 수정대로 111 가천 1234",
        category: "음식점 > 한식 > 한식당",
        phone: "031-000-0000",
        description: "소리네 엄청 예쁘고 어쩌구 저쩌구",
    },
    {
        store_id: 2,
        store_name: "소리네 2호점",
        store_address: "경기도 성남시 수정대로 111 가천 1234",
        category: "음식점 > 한식 > 한식당",
        phone: "031-000-0000",
        description: "소리네 엄청 예쁘고 어쩌구 저쩌구",
    },
    {
        store_id: 3,
        store_name: "소리네 3호점",
        store_address: "경기도 성남시 수정대로 111 가천 1234",
        category: "음식점 > 한식 > 한식당",
        phone: "031-000-0000",
        description: "소리네 엄청 예쁘고 어쩌구 저쩌구",
    },
];


export const storeHandlers = [
    // 내 점포 목록 조회
    http.get('/api/my/stores', () => {
        const storeListWithMainFlag = mockStoreList.map((store) => ({
            ...store,
            isMain: store.store_id === mockUser.mainStoreId,
        }));

        return HttpResponse.json(storeListWithMainFlag);
    }),

    // 점포 수정
    http.patch('/stores/:store_id', async ({ request, params }) => {
        const { store_id } = params;
        const body = await request.json();

        mockStoreList = mockStoreList.map((store) =>
            store.store_id === Number(store_id)
                ? { ...store, ...body }
                : store
        );

        return HttpResponse.json({ message: "가게 수정 완료", store_id });
    }),

    // 점포 삭제
    http.delete('/stores/:store_id', ({ params }) => {
        const { store_id } = params;
        mockStoreList = mockStoreList.filter(
            (store) => store.store_id !== Number(store_id)
        );
        return HttpResponse.json("삭제 완료");
    }),

    http.patch('/stores/set-default', async ({ request }) => {
        const body = await request.json();
        const newMainId = body.mainStoreId;

        mockStoreList = mockStoreList.map((store) => ({
            ...store,
            isMain: store.store_id === newMainId,
        }));

        // 유저 정보도 업데이트
        mockUser.mainStoreId = newMainId;

        return HttpResponse.json({
            message: "대표 가게 설정 완료",
            mainStoreId: newMainId,
        });
    })
];
