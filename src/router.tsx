// src/router.ts
import { createRootRoute,createRouter, createRoute } from '@tanstack/react-router'
import RootComponent from './App.tsx'         // 최상위 레이아웃 컴포넌트
import Home from './screen/home.tsx' // 홈 화면 컴포넌트
import Cards from './screen/cards.tsx' // 카드 화면 컴포넌트
import Rule from './screen/rule.tsx' // 규칙 설명 화면 컴포넌트
import Single from './screen/single.tsx' // 싱글 플레이 화면 컴포넌트
import PerDeck from './screen/singles/perdeck.tsx' // 덱 선택 화면 컴포넌트
import { root } from 'postcss'
import Play from './screen/play.tsx'
// 루트 라우트: 페이지 전체 레이아웃을 담당
const rootRoute = createRootRoute({
  component: RootComponent,
})
const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
})
const cardsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/cards',
  component: Cards,
})
const ruleRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/rule',
  component: Rule,
})
const singleRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/single',
  component: Single,
})
const perDeckRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/perdeck',
  component: PerDeck,
})
const playRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/play',
    component: Play,
  })

// 라우터 생성: 트리에 자식 라우트 추가
export const router = createRouter({
  routeTree: rootRoute.addChildren([homeRoute, cardsRoute, ruleRoute, singleRoute, perDeckRoute, playRoute]),
})
