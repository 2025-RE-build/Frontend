// import React from "react";
import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "@/pages/Home/components/CommunityCard/LatestPoststyle";

import FIRE from "@/assets/local_fire_department.svg";
import NEWPOST from "@/assets/NewPOST.svg";
import PRE from "@/assets/arrow_pre.svg";

interface Post {
  id: string;
  title: string;
  content: string;
  createdAt: number;
}

const MOCK_POSTS: Post[] = [
  {
    id: "1",
    title: " 썸인줄 알았는데 혼자였어요.",
    content:
      "매일 톡하고, 서로 일상 공유하고, 잘 자라는 말까지 하길래 그냥… 나만 그런 게 아니라고 생각했어요. 근데 알고 보니 걔는 원래 다정한 성격이고, 나 혼자만 마음 키우고 있었더라고요. 친구한테 “걔 다른 사람이랑 사귄대”라는 소식 듣고 멘붕… 1인 썸도 썸인가요? 😂",
    createdAt: Date.now() - 3600000,
  },
  {
    id: "2",
    title: ' "차이고도 고백한 나, 레전드.mp4"',
    content:
      "좋아하던 사람이 있었는데, 이미 내가 좀 부담스럽다는 말도 은근히 했던 사람. 근데 왠지 한 번은 정식으로 고백하고 싶었어요. “혹시 마음 바뀌었을까” 하는 1%의 기대를 안고 문자 보냈는데, 답장: “미안, 오히려 더 부담스러워.” 그대로 톡 삭제하고 이불 속으로 3일 잠적했습니다.",
    createdAt: Date.now() - 7200000,
  },
  {
    id: "3",
    title: ' "고백 안 했는데 차였어요"',
    content:
      "그냥 잘 지내던 친구였는데, 어느 날 갑자기 “우리 그런 사이 아니잖아?”라는 말을 들었어요. 어이없고 당황스러워서 “응, 나 그런 말 한 적 없어…”라고 했는데, 이미 주변 사람들한테 다 퍼진 상태더라고요. 소문은 내가 고백했다가 차였다는 버전으로 돌아다니고요.",
    createdAt: Date.now() - 10800000,
  },
];

const LatestPost = () => {
  const navigate = useNavigate();

  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = setTimeout(() => {
      setIsLoading(false);
      setPosts(MOCK_POSTS);
    }, 1500);

    return () => clearTimeout(fetchData);
  }, []);

  const handlePostClick = useCallback((postId: string) => {
    console.log(`게시글 ${postId} - 상세 페이지로 이동`);
    // TODO: navigate(`/post/${postId}`)
  }, []);

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
        <S.NewPost_BigBox>오류 발생: {error}</S.NewPost_BigBox>
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
            alt="이동"
            onClick={(e) => {
              e.stopPropagation();
              navigate("/community/postlist");
            }}
          />
          <S.New_title>
            {index + 1}. {post.title}
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
