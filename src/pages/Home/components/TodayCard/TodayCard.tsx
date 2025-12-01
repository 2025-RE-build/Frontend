import * as S from "./TodayCard.style";

import LogoImg from "@/assets/Rebuild_logo_start.svg";

export default function TodayCard() {
  return (
    <S.Container>
      <S.Badge>
        <img src={LogoImg} className="logo" />
      </S.Badge>
      <S.Message>
        “헤어짐은 끝이 아니라,
        <br />
        다시 나를 만나러 가는 길일 때가 많아요.”
      </S.Message>
    </S.Container>
  );
}
