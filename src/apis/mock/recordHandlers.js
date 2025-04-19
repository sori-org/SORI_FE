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
    http.get('/api/contents', () => {
        return HttpResponse.json(mockList);
    }),

    http.get('/api/contents/:id', ({ params }) => {
        const data = mockList.find(item => item.content_id === Number(params.id));
        return data ? HttpResponse.json(data) : HttpResponse.json({ error: 'Not Found' }, { status: 404 });
    }),
];