import * as S from "@/pages/Home/components/ReasonCard/ReasonCard.style";

interface ReasonCardProps {
  reason: string;
}

export default function ReasonCard({ reason }: ReasonCardProps) {
  return (
    <S.Wrapper>
      <S.Card>
        <S.Text>{reason}</S.Text>
      </S.Card>
    </S.Wrapper>
  );
}
