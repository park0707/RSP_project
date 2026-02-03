2026-01-26
완성본 1 배포 완료

- 구현 기능 : 싱글 플레이(사전 덱 구성), 카드 보기, 규칙 설명
- 주소 : https://phjrspproject.vercel.app/

## 주요 기능

- 회원가입 / 로그인
  - Supabase와 연동한 이메일 없이 ID·비밀번호 기반 계정 시스템
  - Row Level Security(RLS) 정책 설정을 통해 클라이언트에서 안전하게 DB 접근
- 게임 플레이
  - 가위바위보와 포커를 결합한 카드 게임 룰
  - 라운드별 승패, 점수 계산, 턴 진행 UI
- 유저 정보 저장
  - Supabase 테이블에 프로필 정보(닉네임, ID, 비밀번호) 저장
  - 추후 전적/친구 목록 확장 가능하도록 스키마 설계
- 설정 / 사운드
  - BGM, 효과음 On/Off 및 볼륨 조절 (사운드 확보 미흡으로 클릭 만 구현)

 ## 기술 스택

- Frontend: React, TypeScript, Vite, Tailwind CSS
- Backend(BaaS): Supabase (PostgreSQL, Row Level Security)
- Infra: Vercel (프론트엔드 배포)

## 트러블슈팅 & 배운 점

- Supabase RLS 정책 때문에 회원가입 시 `42501` / `23502` 에러가 발생했으나,
  - INSERT / SELECT 별도 정책을 작성하고,
  - `id` 컬럼에 `gen_random_uuid()` 기본값을 설정하여 해결했습니다.
- 아이디 중복 검사 로직을 구현하면서
  - 클라이언트에서 Supabase 쿼리와 상태 관리(useState, useEffect)를 조합해
    비동기 검증을 처리하는 패턴을 익혔습니다.
- 작은 게임이라도 로그인/DB/배포까지 전 과정을 직접 경험해 보면서
  - 이후 서비스형 웹사이트를 만들 때 필요한 기본기를 쌓았습니다.


  
  
