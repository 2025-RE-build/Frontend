import * as S from "@/pages/Letter/LetterWritePage.style";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import type { ChangeEvent } from "react";

import Header from "@/components/Header/Header";
import NavBar from "@/components/NavBar/NavBar";

import Flower1 from "@/assets/Soft Flower_l.svg";
import Flower2 from "@/assets/Soft Flower_l.svg";
import Flower3 from "@/assets/six_leaf_flower_l.svg";
import Flower4 from "@/assets/5_Dots_l.svg";

import { createLetter, getLetterDetail } from "@/utils/api";

type LetterLocationState = {
  letterText?: string;
  toName?: string;
  fromName?: string;
};

export default function LetterWritePage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { letterId } = useParams<{ letterId?: string }>();

  const [toName, setToName] = useState<string>("");
  const [fromName, setFromName] = useState<string>("");
  const [letterPreview, setLetterPreview] = useState<string>("");

  const isDetailMode = typeof letterId !== "undefined";
  const hasLetter = letterPreview.trim().length > 0;

  useEffect(() => {
    const state = location.state as LetterLocationState | null;
    if (!state) return;

    if (state.letterText !== undefined) {
      setLetterPreview(state.letterText);
    }
    if (state.toName !== undefined) {
      setToName(state.toName);
    }
    if (state.fromName !== undefined) {
      setFromName(state.fromName);
    }
  }, [location.state]);

  useEffect(() => {
    if (!isDetailMode) return;

    const idNum = Number(letterId);
    if (!Number.isFinite(idNum)) return;

    const fetchDetail = async () => {
      try {
        const letter = await getLetterDetail(idNum);
        setLetterPreview(letter.content);
        setToName(letter.toName ?? "");
        setFromName(letter.fromName ?? "");
      } catch (error) {
        console.error("편지 상세 조회 실패:", error);
        alert("편지를 불러오는 중 오류가 발생했습니다.");
      }
    };

    fetchDetail();
  }, [isDetailMode, letterId]);

  const handleWriteClick = async () => {
    // 상세 모드에서는 수정 없이 단순히 뒤로가기만
    if (isDetailMode) {
      navigate(-1);
      return;
    }

    // 아직 본문을 안 썼으면 편지 작성 페이지로 이동
    if (!hasLetter) {
      navigate("/letterdetail", {
        state: {
          letterText: letterPreview,
          toName,
          fromName,
        },
      });
      return;
    }

    // 내용이 있으면 저장
    const trimmedContent = letterPreview.trim();
    if (!trimmedContent) {
      alert("편지 내용을 입력해 주세요.");
      return;
    }

    const requestBody = {
      content: trimmedContent,
      toName: toName.trim() || undefined,
      fromName: fromName.trim() || undefined,
    };

    try {
      await createLetter(requestBody);
      alert("편지가 저장되었어요 📝");
      // 저장 후 내 편지 목록으로(필요시 사용)
      // navigate("/my-letters");
    } catch (error) {
      console.error(error);
      alert("편지 저장 중 문제가 발생했습니다. 다시 시도해 주세요.");
    }
  };

  const handleToChange = (e: ChangeEvent<HTMLInputElement>) => {
    setToName(e.target.value);
  };

  const handleFromChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFromName(e.target.value);
  };

  return (
    <S.Container>
      <Header />
      <S.TopMessage>STEP BY STEP, YOU’RE MOVING FORWARD!</S.TopMessage>

      <S.LeftPane>
        <S.FlowerLayer>
          <img src={Flower1} className="flower f1" />
          <img src={Flower2} className="flower f2" />
          <img src={Flower3} className="flower f3" />
          <img src={Flower4} className="flower f4" />
        </S.FlowerLayer>

        <S.LeftInner>
          <S.InnerOutline className="to">
            <S.ToBar>
              <div>TO.</div>
              <S.NameInput
                type="text"
                value={toName}
                onChange={handleToChange}
              />
            </S.ToBar>
          </S.InnerOutline>

          <S.InnerOutline className="body">
            <S.LetterBody>
              {hasLetter && (
                <S.PreviewText>
                  {letterPreview.split("\n").map((line, idx) => (
                    <span key={idx}>
                      {line}
                      <br />
                    </span>
                  ))}
                </S.PreviewText>
              )}

              <S.LineList>
                {Array.from({ length: 17 }).map((_, idx) => (
                  <S.LineRow key={idx} />
                ))}
              </S.LineList>

              <S.WriteRow>
                <S.LineSegment />
                <S.WriteButton type="button" onClick={handleWriteClick}>
                  {isDetailMode ? "BACK" : hasLetter ? "SAVE" : "WRITE"}
                </S.WriteButton>
                <S.LineSegment />
              </S.WriteRow>
            </S.LetterBody>
          </S.InnerOutline>

          <S.InnerOutline className="from">
            <S.FromBar>
              <div>FROM.</div>
              <S.NameInput
                type="text"
                value={fromName}
                onChange={handleFromChange}
              />
            </S.FromBar>
          </S.InnerOutline>
        </S.LeftInner>
      </S.LeftPane>

      <NavBar />
    </S.Container>
  );
}
