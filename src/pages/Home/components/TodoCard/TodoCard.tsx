import * as S from "./TodoCard.style";

import checkImg from "@/assets/todo_check.svg";

export default function TodoCard() {
  return (
    <S.Wrapper>
      <S.Title>
        <span>TO DO</span>
        <S.TitleLabel>LIST</S.TitleLabel>
      </S.Title>

      <S.List>
        <S.ItemOuter>
          <S.ItemInner>
            <S.Check src={checkImg} alt="todo" />
            <S.Input type="text" placeholder="" />
          </S.ItemInner>
        </S.ItemOuter>

        <S.ItemOuter>
          <S.ItemInner>
            <S.Check src={checkImg} alt="todo" />
            <S.Input type="text" placeholder="" />
          </S.ItemInner>
        </S.ItemOuter>

        <S.ItemOuter>
          <S.ItemInner>
            <S.Check src={checkImg} alt="todo" />
            <S.Input type="text" placeholder="" />
          </S.ItemInner>
        </S.ItemOuter>
      </S.List>
    </S.Wrapper>
  );
}
