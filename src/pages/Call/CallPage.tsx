import { useState } from "react";
import * as S from "./CallPage.style";

import Header from "@/pages/Header/Header";
import NavBar from "@/pages/NavBar/NavBar";
import CallActionsCircle from "./components/CallActionCircle";
import CallInfoCard from "./components/CallInfoCard";

import closeEditIcon from "@/assets/close_icon.svg";
import penEditIcon from "@/assets/edit_icon.svg";

export default function CallPage() {
  const name = "EX";
  const initial = "E";
  const phoneNumber = "010-0000-0000";

  const [isEditOpen, setIsEditOpen] = useState(false);

  const toggleEdit = () => {
    setIsEditOpen((prev) => !prev);
  };

  return (
    <S.Container>
      <Header />

      <S.PageBody>
        <S.GradientArea>
          <S.EditBadge type="button" onClick={toggleEdit}>
            편집
          </S.EditBadge>

          {isEditOpen && (
            <S.EditDropdown>
              <S.CloseRow>
                <S.CloseIconCircle type="button" onClick={toggleEdit}>
                  <S.CloseIconImg src={closeEditIcon} alt="편집 닫기" />
                </S.CloseIconCircle>
              </S.CloseRow>

              <S.EditRow>
                <S.EditDropName>{name}</S.EditDropName>
                <S.EditIconCircle type="button" onClick={toggleEdit}>
                  <S.EditIconImg src={penEditIcon} alt="편집 닫기" />
                </S.EditIconCircle>
              </S.EditRow>

              <S.EditRow>
                <S.EditPreviewBox>예시사진</S.EditPreviewBox>
                <S.EditIconCircle type="button">
                  <S.EditIconImg src={penEditIcon} alt="프로필 이미지 편집" />
                </S.EditIconCircle>
              </S.EditRow>

              <S.EditRow>
                <S.EditDropPhone>{phoneNumber}</S.EditDropPhone>
                <S.EditIconCircle type="button">
                  <S.EditIconImg src={penEditIcon} alt="연락처 편집" />
                </S.EditIconCircle>
              </S.EditRow>
            </S.EditDropdown>
          )}

          <S.ProfileCircle>
            <S.ProfileInitial>{initial}</S.ProfileInitial>
          </S.ProfileCircle>

          <S.ProfileName>{name}</S.ProfileName>

          <CallActionsCircle />

          <S.InfoList>
            <CallInfoCard
              label="전화번호"
              value={phoneNumber}
              bottomLabel="메모"
              large
            />

            <CallInfoCard label="메시지 보내기" bottomLabel="연락처 공유" />
          </S.InfoList>
        </S.GradientArea>
      </S.PageBody>

      <NavBar />
    </S.Container>
  );
}
