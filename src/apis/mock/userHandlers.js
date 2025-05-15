import { http, HttpResponse } from 'msw';

export let mockUser = {
    userId: 1,
    accountId: 1001,
    displayName: "김충영",
    mainStoreId: 3,
    storeList: [
        {
            id: 1,
            name: "소리네",
            address: "경기도 성남시 수정대로 111 가천 1234",
            category: "음식점 > 한식 > 한식당",
            phone: "031-000-0000",
            description: "소리네 엄청 예쁘고 어쩌구 저쩌구",
        },
        {
            id: 2,
            name: "소리네 2호점",
            address: "경기도 성남시 수정대로 111 가천 1234",
            category: "음식점 > 한식 > 한식당",
            phone: "031-000-0000",
            description: "소리네 엄청 예쁘고 어쩌구 저쩌구",
        },
        {
            id: 3,
            name: "소리네 3호점",
            address: "경기도 성남시 수정대로 111 가천 1234",
            category: "음식점 > 한식 > 한식당",
            phone: "031-000-0000",
            description: "소리네 엄청 예쁘고 어쩌구 저쩌구",
        },
    ],
};

export const userHandlers = [
    http.get('/api/my/user', () => {
        return HttpResponse.json({
            ...mockUser,
            main_store_id: mockUser.mainStoreId
        });
    }),
    http.patch("/api/user/nickname", async ({ request }) => {
        const body = await request.json();
        mockUser.displayName = body.displayName;
        return HttpResponse.json({ message: "닉네임 수정 완료", displayName: mockUser.displayName });
    }),
];
