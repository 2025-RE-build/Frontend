// 온보딩(소개)-0
import * as S from "@/pages/OnBoarding/screens/Onboard.style";

import startLogo from "@/assets/Rebuild_logo.svg";
import SmileImg from "@/assets/Smile_ob.svg";
import Flower1 from "@/assets/six_leaf_flower.svg";
import Flower2 from "@/assets/five_leaf_flower.svg";
import Flower3 from "@/assets/five_leaf_flower_mini.svg";
import Flower4 from "@/assets/5_Dots.svg";
import Flower5 from "@/assets/four_leaf_flower_ob.svg";

export default function Onboard1() {
  return (
    <S.Wrapper>
      <S.FlowerLayer>
        <img src={SmileImg} className="smile" />
        <img src={Flower1} className="flower f1" />
        <img src={Flower2} className="flower f2" />
        <img src={Flower3} className="flower f3" />
        <img src={Flower4} className="flower f5" />
        <img src={Flower5} className="flower f6" />
        <S.Logo src={startLogo} alt="Re:Build 로고" />
      </S.FlowerLayer>
    </S.Wrapper>
  );
}
