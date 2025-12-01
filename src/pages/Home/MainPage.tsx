// 헤어진 이유 & 헤어진 날 입력 후 들어오는 페이지임
import * as S from "./MainPage.style";

import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
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

export default function MainPage() {
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
          <SinceCard />
          <ReasonCard />
          <S.TopMessage>
            <span className="white">STEP BY S</span>
            <span>TEP, YOU’RE MOVING FO</span>
            <span className="white">RWARD</span>
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
