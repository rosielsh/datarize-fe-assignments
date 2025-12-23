# 쇼핑몰 구매 데이터 대시보드

7월 한 달 동안 발생한 쇼핑몰 구매 데이터를 시각화하고 분석할 수 있는 대시보드 애플리케이션입니다.

## 기술 스택

-   React
-   TypeScript
-   Vite
-   Emotion
-   Recharts
-   Storybook

<br/>

## 디렉터리 구조

```
├── src/
│   │   ├── apis/      # API 클라이언트
│   │   ├── domains/   # 도메인별 기능 모듈
│   │   │   ├── customer/          # 고객 관련 기능
│   │   │   └── purchase-frequency/ # 구매 빈도 관련 기능
│   │   ├── pages/     # 페이지 컴포넌트
│   │   ├── shared/    # 공통으로 사용되는 것들
│   │   │   ├── components
│   │   │   └── hooks/
│   │   └── styles/    # 전역 스타일
```

<br/>

## 설치 및 실행

### 환경 변수 설정

프론트엔드 디렉토리의 루트 경로에 `.env` 파일을 생성하고 다음 내용을 추가하세요.

```env
VITE_API_BASE_URL=http://localhost:4000
```

### 설치 및 실행

```bash
# 의존성 설치
cd apps
yarn install

# 백엔드 서버 실행 (터미널 1)
yarn start-server
# → http://localhost:4000

# 프론트엔드 개발 서버 실행 (터미널 2)
yarn start-client
# → http://localhost:5173
```

브라우저에서 `http://localhost:5173`을 열어 애플리케이션을 확인할 수 있습니다.

<br/>

## 주요 기능

1. 가격대별 구매 빈도 차트
2. 고객 구매 순위 목록
3. 고객 상세 구매 내역
4. 로딩 및 에러 처리

<br/>

## 프로젝트 구조

### 도메인 기반 폴더

> 프로젝트는 도메인별로 기능을 분리하여 구성

-   **`domains/customer/`**: 고객 관련 기능
-   **`domains/purchase-frequency/`**: 구매 빈도 관련 기능

### 공통 컴포넌트 (`shared/`)

> 재사용 가능한 공통 컴포넌트와 유틸리티

-   **컴포넌트**: Header, TabBar, BarChart, Modal, Loading, Input, Button 등
-   **아이콘**: Calendar, Chart, Customer, Search 등
-   **훅**: useDebounce, useFetch 등
-   **유틸리티**: 날짜 포맷팅, 쿼리 파라미터 빌드 등
-   **테마**: Emotion 기반 테마 시스템

### 스타일링

-   **Emotion**을 사용한 CSS-in-JS 방식
-   각 컴포넌트별로 `.styled.ts` 파일로 스타일 분리
-   테마 시스템을 통한 일관된 디자인

### 상태 관리

-   React Hooks 기반 상태 관리
-   커스텀 훅을 통한 비즈니스 로직 분리
-   API 호출은 커스텀 훅으로 캡슐화

### 에러 핸들링 구조

-   **GlobalErrorBoundary**: `App.tsx` 최상위에 배치되어 전역 에러 처리
-   **LocalErrorBoundary**: 특정 섹션의 에러를 격리하여 처리하고 재시도 기능 제공
-   **useFetch 훅**: API 호출 시 에러를 catch하여 ErrorBoundary로 전달
-   **에러 처리 흐름**: API 에러 → useFetch → LocalErrorBoundary → GlobalErrorBoundary
