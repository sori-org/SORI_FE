import { http, HttpResponse } from 'msw';
import ImgExample from '../../assets/img_example1.png';

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

const mockDetails = [
    {
        content_id: 1,
        created_at: '2025-03-30T15:00:00Z',
        result_image: ImgExample,
        request: '자고로 목살은 채즙 폭발하는 버섯이랑 먹어야죠',
        text: `와 진짜.. 여기만큼 두툼한 목살 처음 봅니다. 여기는 프리미엄 1% 선별 숙성 돼지고기만 사용하는데, 육질이 장난 아니라 육즙이 폭발합니다.

또 여기는 고기에 와인을 꼭! 드셔야 하는데요. 전국에서 와인을 가장 저렴하게 파는 곳입니다. 와인 첫 병 주문 시 30% 할인해 주고, 두 번째부터는 50% 할인해 주기 때문에 너무 이득인 부분..

사이드 메뉴도 퀄리티가 정말 좋아요. 고기에 빠질 수 없는 김치찌개 글이는 강력 추천드립니다!! 볶음밥과 비빔밥도 맛있어서 취향에 맞게 드시면 될 것 같습니다.

매장 분위기가 정말 깔끔하고 좋은데 직원분께서 전문적으로 다루어주는 그릴링 서비스까지 있어서 대접받는 느낌이 들고 좋았습니다. 기념일이나 부모님 모시고 가도 좋을 것 같아요.`,
        hashtag: `#파주 미래회관
경기 파주시 소리천로 25 유은타워 B구역 2층
얼룩말 숙성 목살 320g 34,000원

#목살맛집 #삼겹살맛집 #파주맛집 #파주고깃집 #파주삼겹살 #야당맛집 #야당순환 #야당먹방맛집 #야당역술집 #운정호수공원 #운정호수공원맛집 #운정호수공원데이트 #운정호수맛집 #koreanfood #koreanstyle #foodie #instafood`
    },
    {
        content_id: 2,
        created_at: '2024-12-25T12:00:00Z',
        result_image: ImgExample,
        request: '감자탕의 진수를 담았다…',
        text: '이 가게는 국물 맛이 미쳤다. 얼큰하면서도 깊은 맛이 나는 감자탕 국물에 고기도 부드럽고 뼈에 살이 붙은 게 제대로다. 밥 말아먹으면 그야말로 찐이다.',
        hashtag: '#감자탕맛집 #파주감자탕 #국물맛집 #겨울최고메뉴'
    }
];



export const recordHandlers = [
    // 전체 기록 조회
    http.get('/api/contents', () => {
        return HttpResponse.json(mockList);
    }),

    // 단건 기록 조회
    http.get('/api/contents/:id', ({ params }) => {
        const { id } = params;
        const data = mockDetails.find((item) => item.content_id === Number(id));
        return data
            ? HttpResponse.json(data)
            : HttpResponse.json({ error: 'Not Found' }, { status: 404 });
    })
];