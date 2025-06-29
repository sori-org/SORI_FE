# SORI\_FE

"소상공인의 목소리, SORI" 프로젝트의 프론트엔드 저장소입니다. [cite\_start]SORI는 SNS 마케팅에 어려움을 겪는 소상공인들을 위해 AI 기반으로 맞춤형 마케팅 콘텐츠를 자동으로 생성해주는 웹/앱 서비스입니다[cite: 352, 353, 354].

## 프로젝트 소개

[cite\_start]소상공인들은 온라인 마케팅의 중요성을 인지하면서도 콘텐츠 제작 및 SNS 활용에 많은 어려움과 시간적, 경제적 부담을 느끼고 있습니다[cite: 343]. [cite\_start]특히 50\~60대 소상공인의 경우 SNS 사용 경험 부족, 콘텐츠 기획 및 디자인 역량 부족으로 전문가 의존도가 높고 비용 부담이 큽니다[cite: 344]. [cite\_start]기존 마케팅 대행 서비스나 디자인 외주는 높은 비용으로 지속적인 이용이 어렵습니다[cite: 345].

SORI는 이러한 문제점을 해결하기 위해 다음과 같은 목표를 가지고 개발되었습니다:

  * [cite\_start]**초보자도 쉬운 사용성**: 디지털 환경에 익숙하지 않은 소상공인도 쉽게 사용할 수 있는 직관적인 UI/UX와 Tip 기능을 제공합니다[cite: 57, 62, 131, 132, 135, 714].
  * [cite\_start]**시간 및 비용 절감**: AI 기반 자동 콘텐츠 생성 기능을 통해 콘텐츠 제작 시간을 단축하고, 기존 외주 서비스 대비 90% 이상 비용을 절감할 수 있는 유연한 요금 구조(기본 무료 및 월 5,000원 구독제)를 제공합니다[cite: 72, 73, 139, 140, 715].
  * [cite\_start]**차별화된 콘텐츠**: 날씨, 트렌드, 지역 행사, 리뷰 등 외부 데이터 API와 연동하여 차별화되고 시의적절한 마케팅 게시물을 지속적으로 제공합니다[cite: 67, 68, 137, 713].

## 주요 기능

  * [cite\_start]**마케팅 콘텐츠 자동 생성**: 사용자의 간단한 선택(홍보 채널, 홍보 대상, 타겟층, 포함 정보 등)을 기반으로 AI가 자동으로 마케팅 게시물을 생성합니다[cite: 57, 282, 286, 556].
  * [cite\_start]**다양한 콘텐츠 형식**: 이미지/텍스트 형식, 네컷만화, 표지 등 3가지 형태로 콘텐츠를 제공합니다[cite: 355].
  * [cite\_start]**Tip 버튼**: SNS 사용이 익숙하지 않은 사용자들을 위해 각 단계별로 유용한 정보를 제공하여 쉽게 기능을 이해하고 활용할 수 있도록 돕습니다[cite: 62, 63, 291, 566].
  * [cite\_start]**My 페이지**: 프로필 수정, 가게 등록/수정/삭제 기능을 제공하여 사용자 및 가게 정보를 관리할 수 있습니다[cite: 10, 295, 296, 297, 298, 300, 301, 302, 303, 588].
  * [cite\_start]**기록 보기**: 그동안 생성했던 마케팅 게시물을 확인하고 오래된 순 또는 최신 순으로 정렬하여 볼 수 있습니다[cite: 9, 307, 309, 310, 613].
  * [cite\_start]**카카오 로그인**: 간편한 카카오 소셜 로그인을 지원합니다[cite: 307, 308].

## 기술 스택

### 프론트엔드

  * [cite\_start]**핵심 라이브러리**: React v18.3.1 [cite: 175, 383]
      * [cite\_start]컴포넌트 기반 개발 및 선언적 UI를 통해 생산성과 유지보수성을 높였습니다[cite: 383].
  * [cite\_start]**빌드 도구**: Vite v6.0.1 [cite: 186, 383]
      * [cite\_start]HMR(Hot Module Replacement)을 통한 빠른 개발 환경과 Rollup 기반의 최적화된 번들링을 제공합니다[cite: 383].
  * [cite\_start]**상태 관리**: Zustand v5.0.2 [cite: 180, 386]
      * [cite\_start]경량성과 간결성으로 전역 상태를 효과적으로 관리하고 복잡한 폼 데이터 및 UI 관련 상태 관리에 활용되었습니다[cite: 386].
  * [cite\_start]**HTTP 통신**: Axios v1.8.4 [cite: 182, 386]
      * [cite\_start]Promise 기반 HTTP 클라이언트로 백엔드 API와의 비동기 통신을 처리하고 인터셉터 기능을 통해 인증 토큰 관리 및 공통 에러 핸들링을 구현했습니다[cite: 386].
  * [cite\_start]**라우팅**: React Router DOM v6.0.2 [cite: 184, 386]
      * [cite\_start]SPA에서 페이지 전환 및 URL 관리를 담당합니다[cite: 386].
  * [cite\_start]**폼 관리**: React Hook Form v7.55.0, @hookform/resolvers v5.0.1, Zod v3.24.2 [cite: 191, 192, 193, 194, 195, 386]
      * [cite\_start]폼 유효성 검사 및 데이터 관리를 효율적으로 수행하며, Zod를 통해 런타임 유효성 검사 및 타입 안전성을 높였습니다[cite: 386].
  * [cite\_start]**스타일링**: styled-components v6.1.13, styled-reset v4.5.2 [cite: 177, 178, 179, 383, 386]
      * [cite\_start]CSS-in-JS 방식으로 컴포넌트 스코프 스타일링 및 동적 스타일링을 구현했습니다 [cite: 383][cite\_start]. styled-reset으로 브라우저 간 일관된 UI 렌더링 환경을 제공합니다[cite: 386].
  * [cite\_start]**마크다운 렌더링**: react-markdown v10.1.0 [cite: 196, 197, 386]
      * [cite\_start]백엔드에서 전달받은 마크다운 형식의 텍스트를 HTML로 변환하여 시각적 콘텐츠를 제공합니다[cite: 386].
  * [cite\_start]**데이터 페칭**: @tanstack/react-query v5.74.4, @tanstack/react-query-devtools v5.74.4 [cite: 198, 199, 200, 201, 389]
      * [cite\_start]데이터 캐싱, 비동기 데이터 동기화, 로딩/에러 상태 관리 등을 자동화하여 API 데이터 페칭의 복잡성을 줄였습니다[cite: 389]. [cite\_start]개발자 도구를 통해 디버깅 효율성을 높였습니다[cite: 389].
  * [cite\_start]**개발 도구**: ESLint v9.15.0, MSW v2.7.4 [cite: 202, 203, 204, 389]
      * [cite\_start]코드 품질 유지 및 코딩 컨벤션 준수를 위해 ESLint를 사용했습니다[cite: 389]. [cite\_start]MSW는 네트워크 요청을 모킹하여 독립적인 프론트엔드 개발 환경을 구축하는 데 활용됩니다[cite: 389].

### 백엔드

  * [cite\_start]**웹 프레임워크**: FastAPI v0.110.0 [cite: 208, 392]
  * [cite\_start]**데이터베이스**: MySQL 8.x [cite: 210, 392]
  * [cite\_start]**ORM**: SQLAlchemy v2.x [cite: 214, 392]
  * [cite\_start]**인증**: OAuth2 (Kakao), JWT [cite: 212, 213, 393, 394, 395]
  * [cite\_start]**환경 변수 관리**: python-dotenv v1.0.0 [cite: 217, 218, 395]
  * [cite\_start]**배포**: EC2 + Uvicorn + Nginx (Ubuntu 22.04 기반 EC2 인스턴스) [cite: 215, 216, 395]

## 개발 과정에서 직면한 문제점 및 해결 방안

### [cite\_start]1. CORS (Cross-Origin Resource Sharing) 문제 [cite: 225, 398]

  * **문제점**: 개발 환경에서 백엔드 서버로 HTTP 요청을 보낼 때 브라우저 보안 정책인 CORS에 의해 요청이 차단되는 문제가 발생했습니다. [cite\_start]특히 Kakao 로그인 연동 시 `/kakao/callback` 엔드포인트에서 이 문제가 발생했습니다[cite: 226, 399, 400].
  * **해결 방안**:
      * [cite\_start]**Vite 프록시 설정**: 개발 서버(`config.js`)에 `/api` 경로에 대한 프록시 설정을 추가하여 `http://localhost:5173/api` 요청이 백엔드 서버로 우회되도록 구성했습니다[cite: 222, 402, 403].
      * [cite\_start]**백엔드 CORS 허용 출처 설정**: 백엔드(FastAPI의 CORS middleware)에서 `http://localhost:5173` 출처로부터의 요청을 명시적으로 허용하도록 설정했습니다[cite: 227, 404, 405].

### [cite\_start]2. 데이터 유효성 검사 (422 Unprocessable Entity) 문제 [cite: 234, 406]

  * [cite\_start]**문제점**: `POST /api/content/inputs` 엔드포인트로 `formData`를 전송했을 때, 백엔드로부터 422 오류가 지속적으로 발생했습니다[cite: 235, 407]. [cite\_start]`formData` 객체에는 데이터가 모두 채워져 있었음에도 오류가 발생하여 초기 진단에 어려움이 있었습니다[cite: 408].
  * **해결 방안**:
      * [cite\_start]**키 이름 불일치 파악 및 해결**: 프론트엔드에서 camelCase(`ageRange Target`, `contentFormat` 등)로 데이터를 전송했으나 백엔드 스키마가 snake\_case(`age_range_target`, `content_format` 등)로 정의되어 있음을 발견했습니다[cite: 231, 410, 411]. [cite\_start]`formData` 객체의 키를 camelCase에서 snake\_case로 변환하는 유틸리티 함수(`camelToSnake`)를 구현하여 문제를 해결했습니다[cite: 412, 415].
      * [cite\_start]**Nullable 필드 값 불일치 해결**: 키 이름 변환 후에도 간헐적으로 422 오류가 발생했습니다[cite: 236, 416]. [cite\_start]백엔드 스키마에서 `promotion_name`, `user_image`, `user_prompt` 등이 `string | null` 타입으로 정의되어 있었으나 프론트엔드에서는 빈 문자열(`''`)을 보내고 있었음을 파악했습니다[cite: 417]. [cite\_start]`initial FormData`에서 해당 필드를 `null`로 초기화하고 사용자 입력이 없을 시에도 `null`을 보내도록 수정하여 최종적으로 문제를 해결했습니다[cite: 418].
      * [cite\_start]**백엔드 로그 분석의 중요성**: 백엔드 서버 로그의 상세한 유효성 검사 오류 메시지를 통해 정확한 원인 필드를 파악하고 해결책을 도출할 수 있었습니다[cite: 237, 419, 420].

### [cite\_start]3. 예외 처리 및 핸들링 [cite: 238, 421]

  * [cite\_start]**문제점**: 프로젝트 초기 단계에서 API 요청 처리 중 발생하는 다양한 예외 상황에 대한 체계적인 처리가 미흡하여 클라이언트에 구체적인 오류 정보가 제공되지 않고 디버깅에 어려움이 있었습니다[cite: 423, 424, 425, 426, 427, 428].
  * **해결 방안**:
      * [cite\_start]**HTTP 예외 표준화**: FastAPI의 `HTTPException`을 활용하여 상황별 적절한 HTTP 상태 코드와 상세 메시지를 반환하도록 구현했습니다 (예: 404 Not Found, 403 Forbidden, 400 Bad Request 등)[cite: 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 430, 431, 432].
      * [cite\_start]**외부 API 통신 오류 처리**: 카카오 OAuth 인증 과정 등 외부 API 연동 시 발생할 수 있는 예외 상황을 처리했습니다 (예: 카카오 토큰 요청 실패 시 400 Bad Request 응답, access\_token 누락 시 500 Internal Server Error 응답)[cite: 254, 255, 256, 257, 258, 259, 260, 261, 444, 446, 447, 448, 449, 450].
      * [cite\_start]**데이터 파싱 및 변환 오류 처리**: JSON 데이터 파싱 오류 등에 대한 `try-except` 블록을 사용했습니다[cite: 452, 455, 456, 457, 458].
      * [cite\_start]**데이터베이스 연산 오류 처리**: 데이터베이스 CRUD 작업 시 발생 가능한 예외 상황을 처리하고 트랜잭션 관리 및 롤백 처리를 구현했습니다[cite: 460, 461, 466, 467, 468, 469, 470, 473, 474, 475, 476, 477, 478, 479, 480].
      * [cite\_start]**자원 해제 보장 패턴**: `try-finally` 블록을 사용하여 데이터베이스 세션 등의 자원 해제를 보장했습니다[cite: 482, 488, 489, 490].
      * [cite\_start]**토큰 인증 및 권한 검증**: JWT 토큰 검증 실패, 권한 없는 리소스 접근 등에 대한 예외 처리를 구현했습니다[cite: 492, 498, 499, 501, 502].
      * [cite\_start]**파일 업로드 처리 예외 대응**: 콘텐츠 이미지 업로드 기능에서 발생할 수 있는 다양한 예외 상황을 처리했습니다 (예: 파일 저장 실패 시 500 Internal Server Error 응답)[cite: 504, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 516, 517, 518, 519, 520, 521, 522, 523, 524, 527, 528, 529, 530, 531, 532].
  * [cite\_start]**성과 및 개선 효과**: 클라이언트에 명확한 오류 정보를 제공하고 (404, 400, 401, 403, 409, 422, 500 등), 트랜잭션 안정성을 확보하며, 외부 API 연동 안정성을 향상시키고, 디버깅 및 문제 해결 효율성을 높였습니다[cite: 265, 266, 267, 268, 269, 270, 271, 272, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551].

## 시작하기

프로젝트를 로컬에서 실행하기 위한 지침입니다.

### 사전 요구 사항

  * Node.js (LTS 버전 권장)
  * npm 또는 yarn

### 설치

1.  저장소 클론:
    ```bash
    git clone https://github.com/sori-org/SORI_FE.git
    cd SORI_FE
    ```
2.  의존성 설치:
    ```bash
    npm install
    # 또는
    yarn install
    ```

### 개발 서버 실행

```bash
npm run dev
# 또는
yarn dev
```

개발 서버가 `http://localhost:5173`에서 실행됩니다.


## 기여

프로젝트에 기여하고 싶으시다면 다음 지침을 따라주세요.

1.  저장소를 포크합니다.
2.  새로운 브랜치를 생성합니다. (`git checkout -b feature/your-feature-name`)
3.  변경 사항을 커밋합니다. (`git commit -m 'Add some feature'`)
4.  원본 저장소에 푸시합니다. (`git push origin feature/your-feature-name`)
5.  Pull Request를 생성합니다.
