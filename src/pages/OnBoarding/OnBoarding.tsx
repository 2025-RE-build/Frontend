//걍 판때기
import * as S from "./OnBoardingStyle";
import { useState } from "react";
import { useEffect } from "react";

import ProgressBar from "./components/ProgressBar";

import Onboard1 from "./screens/Onboard1";
import Onboard2 from "./screens/Onboard2";
import Onboard3 from "./screens/Onboard3";
import Onboard4 from "./screens/Onboard4";
import Onboard5 from "./screens/Onboard5";

export default function Onboarding() {
  const [step, setStep] = useState(0);

  const pages = [
    <Onboard1 />,
    <Onboard2 />,
    <Onboard3 />,
    <Onboard4 />,
    <Onboard5 />,
  ];

  useEffect(() => {
    if (step === 0) {
      const timer = setTimeout(() => {
        setStep(1);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [step]);

  const handleNext = () => {
    if (step < pages.length - 1) setStep(step + 1);
  };

  // 온보딩 2부터 적용띠
  const barStep = Math.max(step - 1, 0);
  const barTotal = pages.length - 1;

  return (
    <S.Container>
      {step !== 0 && <ProgressBar step={barStep} total={barTotal} />}

      {pages[step]}

      {step !== 0 && (
        <S.Button onClick={handleNext}>
          {step === pages.length - 1 ? "시작하기" : "다음"}
        </S.Button>
      )}
    </S.Container>
  );
}
