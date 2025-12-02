import { useNavigate } from "react-router-dom";
import * as S from "@/pages/Call/components/CallActionCircle.style";

import chatIcon from "@/assets/chat_icon.svg";
import callIcon from "@/assets/call_icon.svg";
import duoIcon from "@/assets/duo_icon.svg";
import mailIcon from "@/assets/mail_icon.svg";

type ActionButtonProps = {
  label: string;
  iconSrc: string;
  alt: string;
};

export default function CallActionsRow() {
  const navigate = useNavigate();

  const actions: ActionButtonProps[] = [
    { label: "메시지", iconSrc: chatIcon, alt: "메시지 아이콘" },
    { label: "전화", iconSrc: callIcon, alt: "전화 아이콘" },
    { label: "영상통화", iconSrc: duoIcon, alt: "영상통화 아이콘" },
    { label: "메일", iconSrc: mailIcon, alt: "메일 아이콘" },
  ];

  const handleClick = (label: string) => {
    if (label === "전화") {
      navigate("/calling"); // ← CallScreen 페이지로 이동!
    } else {
      console.log(`${label} 버튼 클릭!`);
    }
  };

  return (
    <S.Row>
      {actions.map((action) => (
        <S.Item key={action.label}>
          <S.Button type="button" onClick={() => handleClick(action.label)}>
            <S.IconImg src={action.iconSrc} alt={action.alt} />
          </S.Button>
          <S.Label>{action.label}</S.Label>
        </S.Item>
      ))}
    </S.Row>
  );
}
