import { http, HttpResponse } from 'msw';

const mockUser = {
    userId: 1,
    accountId: 1001,
    displayName: "김충영",
    mainStoreId: 2,
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

export const myPageHandlers = [
    // 마이페이지 유저 정보 조회
    http.get('/api/my/user', () => {
        return HttpResponse.json(mockUser);
    }),

    // 소유 점포 목록 조회
    http.get('/api/stores/my', () => {
        return HttpResponse.json(mockUser.storeList);
    }),
];
