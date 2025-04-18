import { http, HttpResponse } from 'msw';

// Mock 데이터
const mockList = [
    {
        content_id: 1,
        created_at: '2025-03-30T15:00:00Z',
        store_name: '소리네 1호점',
    },
    {
        content_id: 2,
        created_at: '2024-12-25T12:00:00Z',
        store_name: '소리네 2호점',
    },
];

const mockDetail = {
    content_id: 1,
    created_at: '2025-03-30T15:00:00Z',
    request: '자고로 목살은 채즙 폭발…',
    result_image: 'https://via.placeholder.com/400',
    text: '와 진짜 여기만큼… ',
    hashtag: '#koreanfood'
};

export const recordHandlers = [
    // 전체 기록 조회 (정렬 X)
    http.get('/api/contents', () => {
        return HttpResponse.json(mockList);
    }),

    // 단건 기록 조회
    http.get('/api/contents/:id', ({ params }) => {
        const { id } = params;
        if (id === '1') return HttpResponse.json(mockDetail); // 단건 예시
        return HttpResponse.json({ message: "Not found" }, { status: 404 });
    })
];
