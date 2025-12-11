import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "@/pages/Home/components/CommunityCard/LatestPoststyle";

import FIRE from "@/assets/local_fire_department.svg";
import NEWPOST from "@/assets/NewPOST.svg";
import PRE from "@/assets/arrow_pre.svg";

import { getLatestPosts, ApiError } from "@/utils/api";
import type { PostResponse } from "@/types/api";

const LatestPost = () => {
  const navigate = useNavigate();

  const [posts, setPosts] = useState<PostResponse[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLatest = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await getLatestPosts();
        setPosts(data);
      } catch (err: unknown) {
        console.error(err);
        if (err instanceof ApiError) {
          setError(`최신 글을 불러오지 못했습니다. (code: ${err.status})`);
        } else {
          setError("최신 글을 불러오지 못했습니다.");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchLatest();
  }, []);

  const handlePostClick = useCallback(
    (postId: number) => {
      navigate(`/community/comments/${postId}`);
    },
    [navigate]
  );

  const handleListClick = useCallback(() => {
    navigate("/community/postlist");
  }, [navigate]);

  const handleWriteClick = useCallback(() => {
    navigate("/community/write");
  }, [navigate]);

  if (isLoading) {
    return (
      <S.Background>
        <S.NewPost_BigBox>
          <p style={{ marginLeft: "10px" }}>
            최신 게시글을 불러오는 중입니다...
          </p>
        </S.NewPost_BigBox>
      </S.Background>
    );
  }

  if (error) {
    return (
      <S.Background>
        <S.NewPost_BigBox style={{ color: "red" }}>{error}</S.NewPost_BigBox>
      </S.Background>
    );
  }

  const isEmpty = posts.length === 0;

  const PostListContent = isEmpty ? (
    <div>아직 작성된 게시글이 없어요.</div>
  ) : (
    <S.NewPost_Box>
      {posts.map((post, index) => (
        <S.NewPosts
          key={post.id}
          onClick={() => handlePostClick(post.id)}
          aria-label={`${post.title} 게시글 보기`}
        >
          <S.PRE_img
            src={PRE}
            alt="더보기"
            onClick={(e) => {
              e.stopPropagation();
              handleListClick();
            }}
          />
          <S.New_title>
            {index + 1}. " {post.title} "
          </S.New_title>
          <S.POST_content_box>
            <S.POST_content>{post.content}</S.POST_content>
          </S.POST_content_box>
        </S.NewPosts>
      ))}
    </S.NewPost_Box>
  );

  return (
    <S.Background>
      <S.NewPost_BigBox>
        <S.NewPost_Title>
          <S.NEWPOST_titleimg src={NEWPOST} />
          <S.Hot_img src={FIRE} />
        </S.NewPost_Title>

        {PostListContent}
      </S.NewPost_BigBox>

      <S.Write_Button onClick={handleWriteClick}>글 작성하기</S.Write_Button>
    </S.Background>
  );
};

export default LatestPost;
