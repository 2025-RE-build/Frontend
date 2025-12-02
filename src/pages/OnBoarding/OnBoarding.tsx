//걍 판때기
import * as S from "@/pages/OnBoarding/OnBoardingStyle";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import ProgressBar from "@/pages/OnBoarding/components/ProgressBar";

import Onboard1 from "@/pages/OnBoarding/screens/Onboard1";
import Onboard2 from "@/pages/OnBoarding/screens/Onboard2";
import Onboard3 from "@/pages/OnBoarding/screens/Onboard3";
import Onboard4 from "@/pages/OnBoarding/screens/Onboard4";
import Onboard5 from "@/pages/OnBoarding/screens/Onboard5";

export default function Onboarding() {
  const navigate = useNavigate();

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
    if (step === pages.length - 1) {
      navigate("/signup");
      return;
    }
    if (step < pages.length - 1) {
      setStep(step + 1);
    }
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
