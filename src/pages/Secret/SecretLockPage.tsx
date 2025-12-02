import { useState } from "react";
import { useNavigate } from "react-router-dom";

import * as S from "@/pages/Secret/SecretLockPage.style";

import Header from "@/components/Header/Header";
import NavBar from "@/components/NavBar/NavBar";

import LockImg from "@/assets/lock.svg";

const SECRET_CODE = [1, 1, 1] as const; // 임의 비번

export default function SecretLockPage() {
  const [digits, setDigits] = useState<number[]>([0, 0, 0]);
  const [isError, setIsError] = useState(false);

  const navigate = useNavigate();

  const handleWheel =
    (index: number) => (event: React.WheelEvent<HTMLDivElement>) => {
      event.preventDefault();
      setDigits((prev) => {
        const next = [...prev];
        const direction = event.deltaY > 0 ? 1 : -1;
        next[index] = (prev[index] + direction + 10) % 10;
        return next;
      });
    };

  const handleCheck = () => {
    const isCorrect =
      digits[0] === SECRET_CODE[0] &&
      digits[1] === SECRET_CODE[1] &&
      digits[2] === SECRET_CODE[2];

    if (!isCorrect) {
      setIsError(true);
    } else {
      setIsError(false);

      navigate("/mysecret");
    }
  };

  return (
    <S.PageWrapper>
      <Header />

      <S.MainSection>
        <S.SpeechBubble>
          숫자를 돌려 <span>비밀번호</span>를 맞춰 주세요!
        </S.SpeechBubble>

        <S.LockArea>
          <S.LockImage src={LockImg} alt="Secret Lock" />

          {isError && (
            <S.ErrorOverlay onClick={() => setIsError(false)}>
              <S.ErrorBox>
                비밀번호가 틀렸습니다! 퍼즐을 다시 맞춰주세요!
              </S.ErrorBox>
            </S.ErrorOverlay>
          )}

          <S.DialsWrapper>
            {digits.map((value, index) => {
              const prev = (value + 9) % 10;
              const next = (value + 1) % 10;

              return (
                <S.DialBox
                  key={index}
                  onWheel={handleWheel(index)}
                  tabIndex={0}
                >
                  <S.DialWindow>
                    <S.DialNumber>{prev}</S.DialNumber>
                    <S.DialNumber isCenter>{value}</S.DialNumber>
                    <S.DialNumber>{next}</S.DialNumber>
                  </S.DialWindow>
                </S.DialBox>
              );
            })}
          </S.DialsWrapper>
        </S.LockArea>

        <S.CheckButton onClick={handleCheck}>확인</S.CheckButton>
      </S.MainSection>

      <NavBar />
    </S.PageWrapper>
  );
}
