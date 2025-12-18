import { useEffect, useState } from "react";
import * as S from "@/pages/Home/components/TodayCard/TodayCard.style";

import LogoImg from "@/assets/Rebuild_logo_start.svg";
import { getTodaySupportMessage } from "@/lib/api";
import { ApiError } from "@/utils/api";

export default function TodayCard() {
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const data = await getTodaySupportMessage();
        setMessage(data.message);
      } catch (error) {
        if (error instanceof ApiError) {
          console.error(
            "오늘의 응원 메시지 조회 실패:",
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

    fetchMessage();
  }, []);

  return (
    <S.Container>
      <S.Badge>
        <img src={LogoImg} className="logo" />
      </S.Badge>

      <S.Message>{loading ? "..." : `“${message}”`}</S.Message>
    </S.Container>
  );
}
