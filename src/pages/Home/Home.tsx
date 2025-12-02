import { useNavigate } from "react-router-dom";
import * as S from "@/pages/Home/Home.style";

import Header from "@/components/Header/Header";
import NavBar from "@/components/NavBar/NavBar";

import WaveImg from "@/assets/wave_background.svg";
import CharacterImg from "@/assets/Rebuild_character.svg";
import SmileImg from "@/assets/Smile.svg";
import Flower1 from "@/assets/five_leaf_flower.svg";
import Flower2 from "@/assets/four_leaf_flower.svg";
import Flower3 from "@/assets/five_leaf_flower_mini.svg";
import Flower4 from "@/assets/hard_flower.svg";
import Flower5 from "@/assets/six_leaf_flower.svg";
import Flower6 from "@/assets/5_Dots.svg";

export default function Home() {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate("/start");
  };

  return (
    <S.Container>
      <Header />

      <S.TopSection>
        <S.WaveDivider>
          <img src={WaveImg} alt="divider" />
        </S.WaveDivider>
        <S.TopMessage>STEP BY STEP, YOU’RE MOVING FORWARD!</S.TopMessage>

        <img src={SmileImg} className="smile" />
        <img src={Flower1} className="flower f1" />
        <img src={Flower2} className="flower f2" />
        <img src={Flower3} className="flower f3" />
        <img src={Flower4} className="flower f4" />
        <img src={Flower5} className="flower f5" />
        <img src={Flower6} className="flower f6" />

        <img src={CharacterImg} className="Rebuild-character" />

        <S.StartButton onClick={handleStartClick}>START</S.StartButton>
      </S.TopSection>

      <NavBar />
    </S.Container>
  );
}
