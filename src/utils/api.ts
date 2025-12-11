import { getAccessToken } from "./auth";
import type {
  CreateLetterRequest,
  LetterResponse,
  LetterListResponse,
  PostRequest,
  PostResponse,
  CreateCommentRequest,
  CommentResponse,
  CommentListResponse,
} from "@/types/api";

export interface ApiRequestOptions {
  method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  headers?: Record<string, string>;
  body?: unknown;
  requiresAuth?: boolean;
}

const API_BASE_URL: string = import.meta.env.VITE_API_BASE_URL ?? "";

export class ApiError extends Error {
  status: number;

  constructor(status: number, message: string) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}

export async function apiRequest<T>(
  endpoint: string,
  options: ApiRequestOptions = {}
): Promise<T> {
  const { method = "GET", headers = {}, body, requiresAuth = false } = options;

  const url = `${API_BASE_URL}${endpoint}`;

  const requestHeaders: Record<string, string> = {
    "Content-Type": "application/json",
    ...headers,
  };

  if (requiresAuth) {
    const token = getAccessToken();
    if (token) {
      requestHeaders.Authorization = `Bearer ${token}`;
    } else {
      console.warn("[api] requiresAuth=true 인데 토큰이 없습니다.");
    }
  }

  const fetchOptions: RequestInit = {
    method,
    headers: requestHeaders,
  };

  if (body !== undefined) {
    fetchOptions.body = JSON.stringify(body);
  }

  const res = await fetch(url, fetchOptions);
  const text = await res.text();

  // 에러 처리
  if (!res.ok) {
    throw new ApiError(
      res.status,
      text || `요청 실패: ${res.status} ${res.statusText}`
    );
  }

  // 바디가 없는 경우
  if (!text) {
    return null as T;
  }

  // Content-Type JSON이면 JSON.parse, 아니면 문자열 그대로 반환
  const contentType = res.headers.get("Content-Type") ?? "";
  let data: unknown;

  if (contentType.includes("application/json")) {
    data = JSON.parse(text);
  } else {
    data = text;
  }

  return data as T;
}

// 편지 생성
export const createLetter = async (
  request: CreateLetterRequest
): Promise<LetterResponse> => {
  return apiRequest<LetterResponse>("/letters", {
    method: "POST",
    body: request,
    requiresAuth: true,
  });
};

// 편지 조회
export const getMyLetters = async (): Promise<LetterListResponse> => {
  return apiRequest<LetterListResponse>("/letters", {
    method: "GET",
    requiresAuth: true,
  });
};

// 편지 상세 조회
export const getLetterDetail = async (
  letterId: number
): Promise<LetterResponse> => {
  return apiRequest<LetterResponse>(`/letters/${letterId}`, {
    method: "GET",
    requiresAuth: true,
  });
};

// 편지 삭제
export const deleteLetter = async (letterId: number): Promise<void> => {
  return apiRequest<void>(`/letters/${letterId}`, {
    method: "DELETE",
    requiresAuth: true,
  });
};

export async function uploadPostImage(file: File): Promise<string> {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch(`${API_BASE_URL}/posts/upload`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new ApiError(response.status, "이미지 업로드에 실패했습니다.");
  }

  const imageUrl = await response.text();
  return imageUrl;
}

// 커뮤니티 게시글 작성
export async function createPost(body: PostRequest): Promise<PostResponse> {
  return apiRequest<PostResponse>("/posts", {
    method: "POST",
    body,
    requiresAuth: true,
  });
}

// 커뮤니티 전체 리스트
export const getPostList = async (): Promise<PostResponse[]> => {
  return apiRequest<PostResponse[]>("/posts/list", {
    method: "GET",
    requiresAuth: true,
  });
};

// 커뮤니티 개별 상세 페이지
export const getPostDetail = async (postId: number): Promise<PostResponse> => {
  return apiRequest<PostResponse>(`/posts/list/${postId}`, {
    method: "GET",
    requiresAuth: true,
  });
};

// 최신글 3개
export const getLatestPosts = async (): Promise<PostResponse[]> => {
  return apiRequest<PostResponse[]>("/posts/latest", {
    method: "GET",
    requiresAuth: true,
  });
};

// 댓글 관련 API
export const getComments = async (
  postId: number
): Promise<CommentListResponse> => {
  return apiRequest<CommentListResponse>(`/comments/${postId}/list`, {
    method: "GET",
    requiresAuth: true,
  });
};

// 댓글 작성
export const createComment = async (
  postId: number,
  body: CreateCommentRequest
): Promise<CommentResponse> => {
  return apiRequest<CommentResponse>(`/comments/${postId}`, {
    method: "POST",
    body,
    requiresAuth: true,
  });
};

// 댓글 수정
export const updateComment = async (
  commentId: number,
  body: CreateCommentRequest
): Promise<CommentResponse> => {
  return apiRequest<CommentResponse>(`/comments/${commentId}/update`, {
    method: "PUT",
    body,
    requiresAuth: true,
  });
};

// 댓글 삭제
export const deleteComment = async (commentId: number): Promise<void> => {
  return apiRequest<void>(`/comments/${commentId}/delete`, {
    method: "DELETE",
    requiresAuth: true,
  });
};

// 내가 쓴 댓글 (비밀)
export const getMyComments = async (): Promise<CommentListResponse> => {
  return apiRequest<CommentListResponse>("/comments/my", {
    method: "GET",
    requiresAuth: true,
  });
};
