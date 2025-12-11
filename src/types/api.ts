// 이별 정보
export interface BreakupSaveRequest {
  reason: string;
  breakupDate: string;
}

// 편지 카드 정보
export interface Letter {
  id: number;
  toName: string | null;
  fromName: string | null;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateLetterRequest {
  toName?: string;
  fromName?: string;
  content: string;
}

// 편지 생성
export type LetterResponse = Letter;

// 편지 목록
export type LetterListResponse = Letter[];

// 편지 상세 조회
export type LetterDetailResponse = Letter;

// 커뮤니티 글 작성
export interface PostRequest {
  title: string;
  content: string;
  imageUrl?: string | null;
}

export interface PostResponse {
  id: number;
  title: string;
  content: string;
  author: string;
  createdAt: string;
  updatedAt: string;
  imageUrl: string | null;
}

// 커뮤니티 댓글 작성
export interface CommentResponse {
  id: number;
  content: string;
  author: string;
  postId: number;
  createdAt: string;
}

export type CommentListResponse = CommentResponse[];

export interface CreateCommentRequest {
  content: string;
}
