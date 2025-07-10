# Book Search App

React + TypeScript 기반의 **책 검색 웹 애플리케이션**입니다.  
카카오 책 검색 API를 활용하여 사용자가 원하는 도서를 검색하고, 최근 검색 기록을 기반으로 편리한 검색을 제공합니다.

---

## 실행 방법

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build
```

> `.env`에 다음 환경변수를 설정해야 합니다:
```
NEXT_PUBLIC_KAKAO_API_KEY=YOUR_REST_API_KEY
```

---

## 폴더 구조

```
src/
├── app
│   ├── assets                    # 이미지 및 정적 리소스
│   ├── components
│   │   ├── common                # 공통 컴포넌트 (LikeButton 등)
│   │   ├── layout                # 레이아웃 관련 컴포넌트
│   │   └── ui                    # UI 컴포넌트 (Button, Typography 등)
│   ├── features
│   │   ├── book
│   │   │   ├── components        
│   │   │   │   └── BookCard      # 도서 카드 관련 컴포넌트
│   │   │   ├── hooks             # 스토어 접근 훅
│   │   │   ├── queries           # React Query 관련 훅
│   │   │   ├── services          # API 호출 함수
│   │   │   ├── stores            # Zustand 기반 상태 저장소
│   │   │   └── type.ts           # 타입 정의
│   │   └── search
│   │       ├── components
│   │       │   └── SearchInput   # 검색창 관련 하위 컴포넌트
│   │       ├── hooks             # 스토어 접근 훅, UI와 분리된 로직을 관리하는 도메인 커스텀 훅
│   │       └── stores             # Zustand 기반 상태 저장소
│   ├── globals.css                # 전역 스타일
│   ├── layout.tsx                 # 전체 레이아웃
│   ├── lib                        # 유틸 함수, 헬퍼 등
│   ├── page.tsx                  # 메인 페이지
│   ├── providers.tsx             # Zustand, Theme 등 Provider 모음
│   └── util
│       └── util.ts               # 공통 유틸 함수 모음
└── wishlist
    └── page.tsx                 # 찜 목록 페이지
```

---

## 주요 코드 설명

| 파일 | 설명 |
|------|------|
| `SearchInput.tsx` | 검색창 UI 전체. 외부 클릭 감지, 검색어 입력, 자동완성 리스트 포함 |
| `InputBox.tsx` | 검색어 입력 인풋 필드. 전역 상태(`word`) 업데이트 |
| `ListBox.tsx` | `word` 값에 따라 히스토리 or 자동완성 리스트 표시 |
| `SearchHistoryList.tsx` | 최근 검색어 리스트 렌더링 및 개별 삭제 기능 |
| `SearchDetailFilter.tsx` | 상세검색 필터 (제목/저자/출판사 선택 + 키워드 입력) |
| `useSearchSubmit.ts` | 검색 실행 및 관련 상태 관리 훅(검색어, 열림여부 등) |
| `useSearchHistory.ts` | Zustand + persist 기반 검색 히스토리 저장/삭제 로직 훅|
| `useMatchHistory.ts` | 검색어와 히스토리를 비교하여 자동완성 리스트(`matchList`)를 반환 |
| `BookListPanel.tsx` | 요약/상세 카드 목록 관리 및 표시 |
| `SummaryCard.tsx` | 도서 요약 정보 카드 (제목, 저자, 가격 등) |
| `DetailCard.tsx` | 도서 상세 정보 카드 (소개글, 가격, 구매버튼 등) |

---

## 사용한 주요 라이브러리

| 라이브러리 | 이유 |
|-----------|------|
| `zustand` | 전역 상태 관리가 간단하고 직관적이며, `persist` 미들웨어로 검색 기록 로컬 저장 가능 |
| `Tailwind CSS` | 빠른 UI 스타일링 및 반응형 디자인 구현을 위해 |
| `classnames (cn)` | 조건부 클래스 조합의 가독성을 위해 |
| `shadcn/ui` | 컴포넌트 템플릿을 직접 복사해 사용하는 구조로, Tailwind 기반의 일관된 스타일링과 커스터마이징이 가능하여 빠른 UI 작업을 위해 |
| `axios` | `fetch`보다 문법이 간결하고 응답을 JSON 데이터로 자동 반환 등  |

---

## 강조하고 싶은 기능

- 검색어 입력 시, 입력값과 일치하는 최근 검색어가 자동완성 리스트로 표시됨
- 입력창 외부 클릭 시 자동으로 히스토리 닫힘
- 상세검색 기능 (제목/저자/출판사 필터)
- Zustand로 검색 히스토리를 localStorage에 자동 저장
- 반응형 UI 대응
