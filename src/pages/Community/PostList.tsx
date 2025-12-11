import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "@/pages/Community/PostListstyle";

import Header from "@/components/Header/Header";

import Back from "@/assets/arrow_back_white.svg";
import Fire from "@/assets/local_fire_department.svg";
import TITLE from "@/assets/NewPOST2.svg";
import GO from "@/assets/arrow_pre.svg";

import { getPostList, ApiError } from "@/utils/api";
import type { PostResponse } from "@/types/api";

// 카드 컴포넌트
const Card: React.FC<{
  data: PostResponse;
  onGoClick: (id: number) => void;
}> = ({ data, onGoClick }) => (
  <S.PostItem_box>
    <S.GO_img
      src={GO}
      onClick={(e) => {
        e.stopPropagation();
        onGoClick(data.id);
      }}
      style={{ cursor: "pointer" }}
    />
    <S.Post_title>" {data.title} "</S.Post_title>
    <S.Post_content>{data.content}</S.Post_content>
  </S.PostItem_box>
);

// 구분선
const Divider: React.FC = () => <S.HR />;

const PostList: React.FC = () => {
  const navigate = useNavigate();

  const [posts, setPosts] = useState<PostResponse[]>([]);
  const [visibleCount, setVisibleCount] = useState<number>(3);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // 전체 글 목록 불러오기
  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await getPostList();
        setPosts(data);
      } catch (err: unknown) {
        console.error(err);
        if (err instanceof ApiError) {
          setError(`글 목록을 불러오지 못했습니다. (code: ${err.status})`);
        } else {
          setError("글 목록을 불러오지 못했습니다.");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const dataLength = posts.length;
  const visiblePosts = posts.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => Math.min(prevCount + 3, dataLength));
  };

  const handleGoClick = (id: number) => {
    // 댓글/상세 페이지로 이동
    navigate(`/community/comments/${id}`);
  };

  const isMoreButtonVisible = visibleCount < dataLength;

  return (
    <S.Background>
      <Header />

      <S.BACK_Box>
        <S.BACK_img
          src={Back}
          onClick={() => navigate(-1)}
          style={{ cursor: "pointer" }}
        />
      </S.BACK_Box>

      <S.Title_Box>
        <S.TITLE src={TITLE} />
        <S.Fire src={Fire} />
      </S.Title_Box>

      <S.POSTS_BOX>
        {isLoading && <div>게시글을 불러오는 중입니다...</div>}

        {error && !isLoading && <div style={{ color: "red" }}>{error}</div>}

        {!isLoading && !error && visiblePosts.length === 0 && (
          <div>첫 번째 글을 남겨보세요</div>
        )}

        {!isLoading &&
          !error &&
          visiblePosts.map((data, index) => (
            <React.Fragment key={data.id}>
              <Card data={data} onGoClick={handleGoClick} />
              {index < visiblePosts.length - 1 && <Divider />}
            </React.Fragment>
          ))}

        {!isLoading && !error && isMoreButtonVisible && (
          <S.Input_Button onClick={handleLoadMore}>더보기</S.Input_Button>
        )}
      </S.POSTS_BOX>
    </S.Background>
  );
};

export default PostList;
