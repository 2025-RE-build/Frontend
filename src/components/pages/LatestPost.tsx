import React from "react";
import { useState, useEffect, useCallback } from 'react';
import * as S from "../../styles/LatestPost";

//이미지 import 
import FIRE from '../../img/local_fire_department.png';
import NEWPOST from '../../img/NewPOST.png';
import PRE from '../../img/arrow_pre.png';

interface Post {
    id: string;       
    title: string;    
    content: string;  
    createdAt: number; 
  }
  const MOCK_POSTS: Post[] = [
    {
        id: '1',
        title: ' 썸인줄 알았는데 혼자였어요.',
        content: '매일 톡하고, 서로 일상 공유하고, 잘 자라는 말까지 하길래 그냥… 나만 그런 게 아니라고 생각했어요. 근데 알고 보니 걔는 원래 다정한 성격이고, 나 혼자만 마음 키우고 있었더라고요. 친구한테 “걔 다른 사람이랑 사귄대”라는 소식 듣고 멘붕… 1인 썸도 썸인가요? 😂',
        createdAt: Date.now() - 3600000,
    },
    {
        id: '2',
        title: ' "차이고도 고백한 나, 레전드.mp4"',
        content: '좋아하던 사람이 있었는데, 이미 내가 좀 부담스럽다는 말도 은근히 했던 사람. 근데 왠지 한 번은 정식으로 고백하고 싶었어요. “혹시 마음 바뀌었을까” 하는 1%의 기대를 안고 문자 보냈는데, 답장: “미안, 오히려 더 부담스러워.” 그대로 톡 삭제하고 이불 속으로 3일 잠적했습니다.',
        createdAt: Date.now() - 7200000,
    },
    {
        id: '3',
        title: ' "고백 안 했는데 차였어요"',
        content: '그냥 잘 지내던 친구였는데, 어느 날 갑자기 “우리 그런 사이 아니잖아?”라는 말을 들었어요. 어이없고 당황스러워서 “응, 나 그런 말 한 적 없어…”라고 했는데, 이미 주변 사람들한테 다 퍼진 상태더라고요. 소문은 내가 고백했다가 차였다는 버전으로 돌아다니고요.',
        createdAt: Date.now() - 10800000,
    },
];
const LatestPost = () =>{
    const [posts, setPosts] = useState<Post[]>([]); // 게시글 목록 데이터
    const [isLoading, setIsLoading] = useState<boolean>(true); // 로딩 상태
    const [error, setError] = useState<string | null>(null); // 오류 메시지

    useEffect(() => {
        // 실제 API 요청을 시뮬레이션하기 위해 1.5초 지연
        const fetchData = setTimeout(() => {
            
            setIsLoading(false); // 로딩 종료

            
            setPosts(MOCK_POSTS); 

        }, 1500);

        return () => clearTimeout(fetchData);
    }, []);

    // 상세 페이지 이동 로직 (콘솔 로그만)
    const handlePostClick = useCallback((postId: string) => {
        console.log(`게시글 ${postId} - 상세 페이지로 이동`);
        // 💡 TODO: navigate(`/post/${postId}`) 와 같은 실제 라우팅 로직 추가
    }, []);

    // 글 작성 페이지 이동 로직 (콘솔 로그만)
    const handleWriteClick = useCallback(() => {
        console.log("글 작성하기 - 작성 페이지로 이동");
        // 💡 TODO: navigate('/write') 와 같은 실제 라우팅 로직 추가
    }, []);
 if (isLoading) {
        return (
            <S.Background>
                <S.NewPost_BigBox>
                        <p style={{marginLeft: '10px'}}>최신 게시글을 불러오는 중입니다...</p>
                </S.NewPost_BigBox>
            </S.Background>
        );
    }
    if (error) {
        return (
            <S.Background>
                <S.NewPost_BigBox>
                        오류 발생: {error}
                  
                </S.NewPost_BigBox>
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
                    aria-label={`${post.title} 게시글 보기`} // 접근성 고려
                >
                    <S.PRE_img src={PRE} alt="이동"/>
                    <S.New_title>
                        {index + 1}. {post.title} 
                    </S.New_title>
                    <S.POST_content_box>
                        <S.POST_content>
                            {post.content}
                        </S.POST_content>
                    </S.POST_content_box>
                </S.NewPosts>
            ))}
        </S.NewPost_Box>
    );

return(
    <S.Background>
<S.NewPost_BigBox>
{/*제목*/}
<S.NewPost_Title>
<S.NEWPOST_titleimg src={NEWPOST}/>    
<S.Hot_img src={FIRE}/>
</S.NewPost_Title>

{PostListContent}


{/*
<S.NewPost_Box>
    <S.PRE_img src={PRE}/>

    <S.NewPosts>
<S.New_title>
    1.썸인줄 알았는데 혼자였어요. 
</S.New_title>
<S.POST_content_box>
<S.POST_content>
매일 톡하고, 서로 일상 공유하고, 잘 자라는 말까지 하길래 그냥… 나만 그런 게 아니라고 생각했어요. 근데 알고 보니 걔는 원래 다정한 성격이고, 나 혼자만 마음 키우고 있었더라고요. 친구한테 “걔 다른 사람이랑 사귄대”라는 소식 듣고 멘붕… 1인 썸도 썸인가요? 😂
</S.POST_content>
</S.POST_content_box>
    </S.NewPosts>
      
    <S.NewPosts>
    <S.New_title>
        2. "차이고도 고백한 나, 레전드.mp4"
    </S.New_title>
    <S.POST_content_box>
        <S.POST_content>
            좋아하던 사람이 있었는데, 이미 내가 좀 부담스럽다는 말도 은근히 했던 사람<br/> 
            근데 왠지 한 번은 정식으로 고백하고 싶었어요.<br/> 
            “혹시 마음 바뀌었을까” 하는 1%의 기대를 안고 문자 보냈는데,<br/> 
            답장: “미안, 오히려 더 부담스러워.”<br/>
            그대로 톡 삭제하고 이불 속으로 3일 잠적했습니다.
        </S.POST_content>
    </S.POST_content_box>
</S.NewPosts>


<S.NewPosts>
    <S.New_title>
        3."고백 안 했는데 차였어요"

    </S.New_title>
    <S.POST_content_box>
        <S.POST_content>

그냥 잘 지내던 친구였는데, 어느 날 갑자기 “우리 그런 사이 아니잖아?”라는 말을 들었어요. 어이없고 당황스러워서 “응, 나 그런 말 한 적 없어…”라고 했는데, 이미 주변 사람들한테 다 퍼진 상태더라고요.소문은 내가 고백했다가 차였다는 버전으로 돌아다니고요.

        </S.POST_content>
    </S.POST_content_box>
</S.NewPosts>

</S.NewPost_Box>*/}
</S.NewPost_BigBox>

<S.Write_Button onClick={handleWriteClick}>
    글 작성하기
</S.Write_Button>

    </S.Background>
);

}

export default LatestPost;