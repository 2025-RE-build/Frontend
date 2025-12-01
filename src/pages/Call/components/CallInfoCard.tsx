import * as S from "./CallInfoCard.style";

export type CallInfoCardProps = {
  label: string;
  value?: string;
  bottomLabel?: string;
  bottomValue?: string;
  large?: boolean;
};

export default function CallInfoCard({
  label,
  value,
  bottomLabel,
  bottomValue,
  large = false,
}: CallInfoCardProps) {
  return (
    <S.Card $large={large}>
      <S.Sections>
        <S.TopSection>
          <S.TopRow>
            <S.Label>{label}</S.Label>
            {value && <S.Value>{value}</S.Value>}
          </S.TopRow>
        </S.TopSection>

        <S.BottomSection>
          {bottomLabel && <S.BottomLabel>{bottomLabel}</S.BottomLabel>}
          {bottomValue && <S.BottomValue>{bottomValue}</S.BottomValue>}
        </S.BottomSection>
      </S.Sections>
    </S.Card>
  );
}
