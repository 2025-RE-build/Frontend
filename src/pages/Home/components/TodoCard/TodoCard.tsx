import { useEffect, useState } from "react";
import * as S from "@/pages/Home/components/TodoCard/TodoCard.style";

import checkImg from "@/assets/todo_check.svg";
import { getTodayMissions, type TodayMission } from "@/lib/api";
import { ApiError } from "@/utils/api";

export default function TodoCard() {
  const [missions, setMissions] = useState<TodayMission[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchMissions = async () => {
      try { 
        const data = await getTodayMissions();
        setMissions(data);
      } catch (error) {
        if (error instanceof ApiError) {
          console.error("오늘의 미션 조회 실패:", error.status, error.message);
        } else {
          console.error(error);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchMissions();
  }, []);

  const slots = [0, 1, 2];

  return (
    <S.Wrapper>
      <S.Title>
        <span>TO DO</span>
        <S.TitleLabel>LIST</S.TitleLabel>
      </S.Title>

      <S.List>
  {slots.map((index) => {
    const mission = missions[index];

    return (
      <S.ItemOuter key={`todo-slot-${index}`}>
        <S.ItemInner>
          <S.Check src={checkImg} alt="todo" />
          <S.Input
            type="text"
            readOnly
            // mission?.content가 falsy할 경우 빈 문자열을 반환하여 제어 상태 유지
            value={loading ? "" : (mission?.content ?? "")}
            placeholder={loading ? "불러오는 중..." : ""}
          />
        </S.ItemInner>
      </S.ItemOuter>
    );
  })}
</S.List>
    </S.Wrapper>
  );
}
