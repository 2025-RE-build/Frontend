import * as S from "@/pages/OnBoarding/components/ProgressBar.style";

interface ProgressBarProps {
  step: number;
  total: number;
}

export default function ProgressBar({ step, total }: ProgressBarProps) {
  const progress = (step / (total - 1)) * 100;

  return (
    <S.BarWrapper>
      <S.BarBackground>
        <S.BarFill style={{ width: `${progress}%` }} />
      </S.BarBackground>
    </S.BarWrapper>
  );
}
