import { apiRequest } from "@/utils/api";

export interface CreateLetterRequest {
  toName?: string;
  fromName?: string;
  content: string;
}

export interface LetterResponse {
  id: number;
  toName: string | null;
  fromName: string | null;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export type LetterListResponse = LetterResponse[];

// 편지 생성
export async function createLetter(
  body: CreateLetterRequest
): Promise<LetterResponse> {
  return apiRequest<LetterResponse>("/letters", {
    method: "POST",
    body,
    requiresAuth: true,
  });
}

// 내 편지 목록
export async function getMyLetters(): Promise<LetterListResponse> {
  return apiRequest<LetterListResponse>("/letters", {
    method: "GET",
    requiresAuth: true,
  });
}

// 이별 정보
export interface BreakupSaveRequest {
  reason: string;
  breakupDate: string;
}

// 이별 정보 저장/수정
export async function saveBreakup(body: BreakupSaveRequest): Promise<void> {
  return apiRequest<void>("/breakups", {
    method: "POST",
    body,
    requiresAuth: true,
  });
}

// 홈 이별 요약 정보 조회
export interface BreakupHomeSummaryResponse {
  reason: string;
  breakupDate: string;
  daysSince: number;
  dDayText: string;
}

export async function getBreakupHomeSummary(): Promise<BreakupHomeSummaryResponse> {
  return apiRequest<BreakupHomeSummaryResponse>("/breakups/home-summary", {
    method: "GET",
    requiresAuth: true,
  });
}

export interface TodayMission {
  userMissionId: number;
  content: string;
  completed: boolean;
}

// 오늘 미션 3개
export type TodayMissionListResponse = TodayMission[];

export async function getTodayMissions(): Promise<TodayMissionListResponse> {
  return apiRequest<TodayMissionListResponse>("/missions/today", {
    method: "GET",
    requiresAuth: true,
  });
}

// 오늘의 응원 메세지
export interface SupportMessageResponse {
  message: string;
}

export async function getTodaySupportMessage(): Promise<SupportMessageResponse> {
  return apiRequest<SupportMessageResponse>("/support-messages/today", {
    method: "GET",
    requiresAuth: true,
  });
}

// 비밀번호 부분
export interface LockStatusResponse {
  hasLock: boolean;
}

export function setLockCode(code: string): Promise<string> {
  return apiRequest<string>("/lock/set", {
    method: "POST",
    body: { code }, // BE의 LockDto.code 필드랑 이름 맞추기
    requiresAuth: true,
  });
}

// 잠금 해제
export function unlockCode(code: string): Promise<string> {
  return apiRequest<string>("/lock/unlock", {
    method: "POST",
    body: { code },
    requiresAuth: true,
  });
}
