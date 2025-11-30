import React,{ useState } from "react";
import * as S from '../../styles/PostList';

import Header from "./Header";
import Back from '../../img/arrow_back_white.png';
import Fire from '../../img/local_fire_department.png';
import TITLE from '../../img/NewPOST2.png';
import GO from '../../img/arrow_pre.png';

interface CardData {
    id: number;
    title: string;
    content: string;
  }
  const MOCK_POSTS: CardData[] = [
    {
        id: 1,
        title: ' 썸인줄 알았는데 혼자였어요.',
        content: '매일 톡하고, 서로 일상 공유하고, 잘 자라는 말까지 하길래 그냥… 나만 그런 게 아니라고 생각했어요. 근데 알고 보니 걔는 원래 다정한 성격이고, 나 혼자만 마음 키우고 있었더라고요. 친구한테 “걔 다른 사람이랑 사귄대”라는 소식 듣고 멘붕… 1인 썸도 썸인가요? 😂',
    },
    {
        id: 2,
        title: ' "차이고도 고백한 나, 레전드.mp4"',
        content: '좋아하던 사람이 있었는데, 이미 내가 좀 부담스럽다는 말도 은근히 했던 사람. 근데 왠지 한 번은 정식으로 고백하고 싶었어요. “혹시 마음 바뀌었을까” 하는 1%의 기대를 안고 문자 보냈는데, 답장: “미안, 오히려 더 부담스러워.” 그대로 톡 삭제하고 이불 속으로 3일 잠적했습니다.',
    },
    {
        id: 3,
        title: ' "고백 안 했는데 차였어요"',
        content: '그냥 잘 지내던 친구였는데, 어느 날 갑자기 “우리 그런 사이 아니잖아?”라는 말을 들었어요. 어이없고 당황스러워서 “응, 나 그런 말 한 적 없어…”라고 했는데, 이미 주변 사람들한테 다 퍼진 상태더라고요. 소문은 내가 고백했다가 차였다는 버전으로 돌아다니고요.',
    },
    {
        id: 4,
        title: ' "4.고백 안 했는데 차였어요"',
        content: '그냥 잘 지내던 친구였는데, 어느 날 갑자기 “우리 그런 사이 아니잖아?”라는 말을 들었어요. 어이없고 당황스러워서 “응, 나 그런 말 한 적 없어…”라고 했는데, 이미 주변 사람들한테 다 퍼진 상태더라고요. 소문은 내가 고백했다가 차였다는 버전으로 돌아다니고요.',
    },
    {
        id: 5,
        title: ' "5.고백 안 했는데 차였어요"',
        content: '그냥 잘 지내던 친구였는데, 어느 날 갑자기 “우리 그런 사이 아니잖아?”라는 말을 들었어요. 어이없고 당황스러워서 “응, 나 그런 말 한 적 없어…”라고 했는데, 이미 주변 사람들한테 다 퍼진 상태더라고요. 소문은 내가 고백했다가 차였다는 버전으로 돌아다니고요.',
    },
    {
        id: 6,
        title: ' "6.고백 안 했는데 차였어요"',
        content: '그냥 잘 지내던 친구였는데, 어느 날 갑자기 “우리 그런 사이 아니잖아?”라는 말을 들었어요. 어이없고 당황스러워서 “응, 나 그런 말 한 적 없어…”라고 했는데, 이미 주변 사람들한테 다 퍼진 상태더라고요. 소문은 내가 고백했다가 차였다는 버전으로 돌아다니고요.',
    },
    {
        id: 7,
        title: ' "7.고백 안 했는데 차였어요"',
        content: '그냥 잘 지내던 친구였는데, 어느 날 갑자기 “우리 그런 사이 아니잖아?”라는 말을 들었어요. 어이없고 당황스러워서 “응, 나 그런 말 한 적 없어…”라고 했는데, 이미 주변 사람들한테 다 퍼진 상태더라고요. 소문은 내가 고백했다가 차였다는 버전으로 돌아다니고요.',
    },
];

//카드
  const Card: React.FC<{ data: CardData }> = ({ data }) => (
    <S.PostItem_box>
        <S.GO_img src={GO}/>
      <S.Post_title>{data.title}</S.Post_title>
      <S.Post_content>{data.content}</S.Post_content>
    </S.PostItem_box>
  );
  //구분선
  const Divider: React.FC = () => (
    <S.HR>
    </S.HR>
  );

const PostList = () =>{
    const dataLength = MOCK_POSTS.length;
    const [visibleCount, setVisibleCount] = useState(3);
    const visiblePosts = MOCK_POSTS.slice(0, visibleCount);

    const handleLoadMore = () => {
        setVisibleCount((prevCount) => Math.min(prevCount + 3, dataLength));
    };
    const isMoreButtonVisible = visibleCount < dataLength;
    return(
        <S.Background>
            <Header/>
            <S.BACK_Box>
            <S.BACK_img src={Back}/>
            </S.BACK_Box>
<S.Title_Box>
            <S.TITLE src={TITLE}></S.TITLE>
            <S.Fire src={Fire}></S.Fire>
            </S.Title_Box>

            <S.POSTS_BOX>

            {visiblePosts.map((data, index) => (
        <React.Fragment key={data.id}> 
          <Card data={data} />

          {index < visiblePosts.length - 1 && (
                        <Divider />
                    )}

        </React.Fragment>
      ))}


{isMoreButtonVisible && (
                <S.Input_Button onClick={handleLoadMore}>
                    더보기
                </S.Input_Button>
            )}
            </S.POSTS_BOX>
        </S.Background>
    );

};
export default PostList;