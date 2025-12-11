import { useEffect, useState } from "react";
import type React from "react";
import { useNavigate } from "react-router-dom";

import * as S from "@/pages/Secret/SecretLockPage.style";

import Header from "@/components/Header/Header";
import NavBar from "@/components/NavBar/NavBar";
import LockImg from "@/assets/lock.svg";

import { ApiError } from "@/utils/api";
import { setLockCode, unlockCode } from "@/lib/api";

type LockMode = "SET" | "UNLOCK";

export default function SecretLockPage() {
  const [digits, setDigits] = useState<number[]>([0, 0, 0]);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [mode, setMode] = useState<LockMode>("UNLOCK");

  const navigate = useNavigate();

  // 페이지 진입 시: 비밀번호 존재 여부
  useEffect(() => {
    let cancelled = false;

    const probeLock = async () => {
      try {
        await unlockCode("000");

        if (!cancelled) setMode("UNLOCK");
      } catch (err) {
        if (!(err instanceof ApiError)) {
          if (!cancelled) setMode("UNLOCK");
          return;
        }

        if (err.status === 401) {
          if (!cancelled) setMode("UNLOCK");
        } else if (err.status === 500) {
          if (!cancelled) setMode("SET");
        } else {
          if (!cancelled) setMode("UNLOCK");
        }
      }
    };

    probeLock();
    return () => {
      cancelled = true;
    };
  }, []);

  // 숫자 다이얼
  const handleWheel =
    (index: number) => (event: React.WheelEvent<HTMLDivElement>) => {
      // event.preventDefault();

      setDigits((prev) => {
        const next = [...prev];
        const dir = event.deltaY > 0 ? 1 : -1;
        next[index] = (prev[index] + dir + 10) % 10;
        return next;
      });
    };

  // 확인 버튼
  const handleCheck = async () => {
    const code = digits.join("");

    // 버튼 누르자마자 이전 에러 상태 초기화
    setIsError(false);
    setErrorMessage("");

    if (!/^\d{3}$/.test(code)) {
      setErrorMessage("3자리 숫자를 모두 맞춰 주세요.");
      setIsError(true);
      return;
    }

    try {
      if (mode === "SET") {
        await setLockCode(code);

        // 성공 시 에러 다시 초기화
        setIsError(false);
        setErrorMessage("");

        navigate("/mysecret");
        return;
      }

      await unlockCode(code);

      // 성공시 에러창이 남아있지 않도록 초기화
      setIsError(false);
      setErrorMessage("");

      navigate("/mysecret");
    } catch (err) {
      if (!(err instanceof ApiError)) {
        setErrorMessage(
          "잠금 처리 중 오류가 발생했어요. 잠시 후 다시 시도해 주세요."
        );
        setIsError(true);
        return;
      }

      if (err.status === 401) {
        setErrorMessage("비밀번호가 틀렸습니다! 퍼즐을 다시 맞춰주세요!");
        setIsError(true);
      } else if (err.status === 500) {
        setMode("SET");
        setErrorMessage(
          "아직 보관함 비밀번호가 설정되지 않았어요. 지금 비밀번호를 설정해 주세요!"
        );
        setIsError(true);
      } else {
        setErrorMessage(
          "잠금 처리 중 오류가 발생했어요. 잠시 후 다시 시도해 주세요."
        );
        setIsError(true);
      }
    }
  };

  return (
    <S.PageWrapper>
      <Header />

      <S.MainSection>
        <S.SpeechBubble>
          {mode === "SET" ? (
            <>
              보관함 <span>비밀번호</span>를 설정해 주세요!
            </>
          ) : (
            <>
              숫자를 돌려 <span>비밀번호</span>를 맞춰 주세요!
            </>
          )}
        </S.SpeechBubble>

        <S.LockArea>
          <S.LockImage src={LockImg} alt="Secret Lock" />

          {isError && (
            <S.ErrorOverlay onClick={() => setIsError(false)}>
              <S.ErrorBox>{errorMessage}</S.ErrorBox>
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
                    <S.DialNumber $isCenter>{value}</S.DialNumber>
                    <S.DialNumber>{next}</S.DialNumber>
                  </S.DialWindow>
                </S.DialBox>
              );
            })}
          </S.DialsWrapper>
        </S.LockArea>

        <S.CheckButton onClick={handleCheck}>
          {mode === "SET" ? "설정하기" : "확인"}
        </S.CheckButton>
      </S.MainSection>

      <NavBar />
    </S.PageWrapper>
  );
}
