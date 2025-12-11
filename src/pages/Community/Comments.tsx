import React, {
  useEffect,
  useState,
  type ChangeEvent,
  type KeyboardEvent,
} from "react";
import { useNavigate, useParams } from "react-router-dom";

import * as S from "@/pages/Community/CommentsStyle";
import Header from "@/components/Header/Header";

import Letter_Char from "@/assets/letter_charter.svg";
import Back_white from "@/assets/arrow_back_white.svg";
import Comment from "@/assets/mail_icon.svg";
import SEND from "@/assets/send.svg";

import {
  getPostDetail,
  ApiError,
  getComments,
  createComment,
} from "@/utils/api";
import type { PostResponse, CommentResponse } from "@/types/api";

const Comments: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [post, setPost] = useState<PostResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [comments, setComments] = useState<CommentResponse[]>([]);
  const [commentInput, setCommentInput] = useState<string>("");
  const [commentError, setCommentError] = useState<string | null>(null);
  const [isCommentSubmitting, setIsCommentSubmitting] =
    useState<boolean>(false);

  useEffect(() => {
    if (!id) {
      setError("잘못된 게시글 번호입니다.");
      setIsLoading(false);
      return;
    }

    const postId = Number(id);
    if (Number.isNaN(postId)) {
      setError("잘못된 게시글 번호입니다.");
      setIsLoading(false);
      return;
    }

    const fetchPostAndComments = async (): Promise<void> => {
      try {
        // 게시글 + 댓글 동시에 요청
        const [postData, commentData] = await Promise.all([
          getPostDetail(postId),
          getComments(postId),
        ]);

        setPost(postData);
        setComments(commentData);
      } catch (err: unknown) {
        console.error(err);
        if (err instanceof ApiError) {
          setError(`게시글을 불러오지 못했습니다. (code: ${err.status})`);
        } else {
          setError("게시글을 불러오지 못했습니다.");
        }
      } finally {
        setIsLoading(false);
      }
    };

    void fetchPostAndComments();
  }, [id]);

  // 댓글 입력 변경
  const handleCommentChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setCommentInput(e.target.value);
  };

  // 댓글 작성
  const handleSubmitComment = async (): Promise<void> => {
    if (!id) return;

    const postId = Number(id);
    if (Number.isNaN(postId)) return;

    const trimmed = commentInput.trim();
    if (trimmed.length === 0) {
      setCommentError("댓글 내용을 입력해 주세요.");
      return;
    }

    setIsCommentSubmitting(true);
    setCommentError(null);

    try {
      const newComment = await createComment(postId, { content: trimmed });

      // 댓글 작성
      setComments((prev) => [...prev, newComment]);
      setCommentInput("");
    } catch (err: unknown) {
      console.error(err);
      if (err instanceof ApiError) {
        setCommentError(
          `댓글 작성에 실패했습니다. (code: ${err.status}) 다시 시도해 주세요.`
        );
      } else {
        setCommentError("댓글 작성에 실패했습니다. 다시 시도해 주세요.");
      }
    } finally {
      setIsCommentSubmitting(false);
    }
  };

  // 엔터로 입력
  const handleCommentKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (!isCommentSubmitting) {
        void handleSubmitComment();
      }
    }
  };

  if (isLoading) {
    return (
      <S.Background>
        <Header />
        <S.Profile>
          <S.BACK
            src={Back_white}
            onClick={() => navigate(-1)}
            style={{ cursor: "pointer" }}
          />
          <S.ProfileIMG>
            <S.Letter_CHARCTER src={Letter_Char} />
          </S.ProfileIMG>
          <S.USERNAME>로딩 중...</S.USERNAME>
        </S.Profile>

        <S.INPUT_Box>
          <S.Community_titleBOX>
            <S.community_titleAndImg>
              <S.community_title>제목</S.community_title>
            </S.community_titleAndImg>
            <S.Title_Box>게시글을 불러오는 중입니다...</S.Title_Box>
          </S.Community_titleBOX>

          <S.Community_ContentBOX>
            <S.Community_Contenttitle>내용</S.Community_Contenttitle>
            <S.Content_Box>내용을 불러오는 중입니다...</S.Content_Box>
          </S.Community_ContentBOX>
        </S.INPUT_Box>
      </S.Background>
    );
  }

  if (error || !post) {
    return (
      <S.Background>
        <Header />
        <S.Profile>
          <S.BACK
            src={Back_white}
            onClick={() => navigate(-1)}
            style={{ cursor: "pointer" }}
          />
          <S.ProfileIMG>
            <S.Letter_CHARCTER src={Letter_Char} />
          </S.ProfileIMG>
          <S.USERNAME>에러</S.USERNAME>
        </S.Profile>

        <S.INPUT_Box>
          <S.Community_titleBOX>
            <S.community_titleAndImg>
              <S.community_title>제목</S.community_title>
            </S.community_titleAndImg>
            <S.Title_Box>게시글을 불러오지 못했습니다.</S.Title_Box>
          </S.Community_titleBOX>

          <S.Community_ContentBOX>
            <S.Community_Contenttitle>내용</S.Community_Contenttitle>
            <S.Content_Box>{error ?? "알 수 없는 오류입니다."}</S.Content_Box>
          </S.Community_ContentBOX>
        </S.INPUT_Box>
      </S.Background>
    );
  }

  return (
    <S.Background>
      <Header />

      <S.Profile>
        <S.BACK
          src={Back_white}
          onClick={() => navigate(-1)}
          style={{ cursor: "pointer" }}
        />
        <S.ProfileIMG>
          <S.Letter_CHARCTER src={Letter_Char} />
        </S.ProfileIMG>
        <S.USERNAME>{post.author}</S.USERNAME>
      </S.Profile>

      <S.INPUT_Box>
        <S.Community_titleBOX>
          <S.community_titleAndImg>
            <S.community_title>제목</S.community_title>
          </S.community_titleAndImg>
          <S.Title_Box>{post.title}</S.Title_Box>
        </S.Community_titleBOX>

        <S.Community_ContentBOX>
          <S.Community_Contenttitle>내용</S.Community_Contenttitle>
          <S.Content_Box>{post.content}</S.Content_Box>
        </S.Community_ContentBOX>
      </S.INPUT_Box>

      <S.Comments_number>
        <S.Comment_img src={Comment} />
        <p>{comments.length}</p>
      </S.Comments_number>

      <S.Comments_Box>
        {comments.map((c) => {
          const date = new Date(c.createdAt);
          const dateText = Number.isNaN(date.getTime())
            ? c.createdAt
            : date.toLocaleDateString("ko-KR");

          return (
            <S.CommentITEM key={c.id}>
              <S.Comment_PRO>
                <S.Letter_CHARCTER src={Letter_Char} />
              </S.Comment_PRO>
              <S.Comment_Content>
                <S.NameAndDate>
                  <S.Comment_UserName>
                    {c.author}
                    <S.Nim>님</S.Nim>
                  </S.Comment_UserName>
                  <S.DATE>{dateText}</S.DATE>
                </S.NameAndDate>
                <S.Comment>{c.content}</S.Comment>
              </S.Comment_Content>
            </S.CommentITEM>
          );
        })}

        {commentError && (
          <p style={{ color: "red", marginTop: "8px" }}>{commentError}</p>
        )}

        <S.Input_BottonWrapper>
          <S.Input_Button>
            <input
              style={{
                flex: 1,
                border: "none",
                outline: "none",
                background: "transparent",
              }}
              placeholder={
                isCommentSubmitting ? "작성 중..." : "댓글을 입력해 주세요."
              }
              value={commentInput}
              onChange={handleCommentChange}
              onKeyDown={handleCommentKeyDown}
              disabled={isCommentSubmitting}
            />
            <S.InputImg
              src={SEND}
              onClick={
                isCommentSubmitting
                  ? undefined
                  : () => void handleSubmitComment()
              }
              style={{ cursor: isCommentSubmitting ? "default" : "pointer" }}
            />
          </S.Input_Button>
        </S.Input_BottonWrapper>
      </S.Comments_Box>
    </S.Background>
  );
};

export default Comments;
