// 헤어진 이유 & 헤어진 날 입력 후 들어오는 페이지임
import { useEffect, useState } from "react";
import * as S from "@/pages/Home/MainPage.style";

import Header from "@/components/Header/Header";
import NavBar from "@/components/NavBar/NavBar";
import TodoCard from "@/pages/Home/components/TodoCard/TodoCard";
import SinceCard from "@/pages/Home/components/SinceCard/SinceCard";
import ReasonCard from "@/pages/Home/components/ReasonCard/ReasonCard";
import TodayCard from "@/pages/Home/components/TodayCard/TodayCard";
import CommunityCard from "@/pages/Home/components/CommunityCard/LatestPost";

import WaveImg from "@/assets/wave_background.svg";
import bSmileImg from "@/assets/Smile_b.svg";
import bFlower1 from "@/assets/5_Dots_b.svg";
import bFlower2 from "@/assets/six_leaf_flower_b.svg";
import bFlower3 from "@/assets/five_leaf_flower_b.svg";
import bFlower4 from "@/assets/four_leaf_flower_b.svg";
import bFlower5 from "@/assets/five_leaf_flower_mini_b.svg";

import {
  getBreakupHomeSummary,
  type BreakupHomeSummaryResponse,
} from "@/lib/api";
import { ApiError } from "@/utils/api";

export default function MainPage() {
  const [summary, setSummary] = useState<BreakupHomeSummaryResponse | null>(
    null
  );
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const data = await getBreakupHomeSummary();
        setSummary(data);
      } catch (error) {
        if (error instanceof ApiError) {
          console.error(
            "이별 정보 홈 요약 조회 실패:",
            error.status,
            error.message
          );
        } else {
          console.error(error);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchSummary();
  }, []);

  return (
    <S.Container>
      <Header />

      <S.TopSection>
        <S.ScrollArea>
          <S.WaveDivider>
            <img src={WaveImg} alt="divider" />
          </S.WaveDivider>

          <S.StickerLayer>
            <img src={bSmileImg} className="bsmile" />
            <img src={bFlower1} className="flower bf1" />
            <img src={bFlower2} className="flower bf2" />
            <img src={bFlower3} className="flower bf3" />
            <img src={bFlower4} className="flower bf4" />
            <img src={bFlower5} className="flower bf5" />
            <img src={bFlower5} className="flower bf5--bottom" />
          </S.StickerLayer>

          <TodoCard />

          {!loading && summary && (
            <>
              <SinceCard
                dDayText={summary.dDayText}
                daysSince={summary.daysSince}
                breakupDate={summary.breakupDate}
              />
              <ReasonCard reason={summary.reason} />
            </>
          )}

          <S.TopMessage>
            <span className="white">STEP BY S</span>
            <span>TEP, YOU’RE MOVING F</span>
            <span className="white">ORWARD</span>
            <span>!</span>
          </S.TopMessage>

          <TodayCard />
          <CommunityCard />
        </S.ScrollArea>
      </S.TopSection>

      <NavBar />
    </S.Container>
  );
}
