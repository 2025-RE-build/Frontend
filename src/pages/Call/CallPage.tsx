import * as S from "./CallPage.style";

import Header from "../../components/Header";
import NavBar from "../../components/NavBar";

import CallActionsCircle from "./components/CallActionCircle";
import CallInfoCard from "./components/CallInfoCard";

export default function CallPage() {
  // 하드코딩
  const name = "EX";
  const initial = "E";
  const phoneNumber = "010-0000-0000";

  return (
    <S.Container>
      <Header />

      <S.PageBody>
        <S.GradientArea>
          <S.EditBadge>편집</S.EditBadge>

          <S.ProfileCircle>
            <S.ProfileInitial>{initial}</S.ProfileInitial>
          </S.ProfileCircle>

          <S.ProfileName>{name}</S.ProfileName>

          <CallActionsCircle />

          <S.InfoList>
            <CallInfoCard label="전화번호" value={phoneNumber} />
            <CallInfoCard label="메모" value="메모를 입력해 보세요" dimmed />
            <CallInfoCard
              label="메시지 보내기"
              value="카톡/문자를 보내볼까요?"
              dimmed
            />
            <CallInfoCard
              label="연락처 공유"
              value="친구에게 이 연락처를 공유해요"
              dimmed
            />
          </S.InfoList>
        </S.GradientArea>
      </S.PageBody>

      <NavBar />
    </S.Container>
  );
}
