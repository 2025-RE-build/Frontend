import React from "react";
import { useEffect, useCallback, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "@/styles/KakaoTalk";

import Header from "@/components/Header";

import STEP from "@/assets/Step by step, you’re moving forward!.svg";
import BACK from "@/assets/arrow_back_pink.svg";
import Tail from "@/assets/Polygon 4.svg";
import ADD from "@/assets/add.svg";
import SENDING from "@/assets/send.svg";

interface Message {
  id: number;
  content: string;
  isMine: boolean;
}
const getFormattedDate = (): string => {
  const today = new Date();

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  };
  return today.toLocaleDateString("ko-KR", options);
};

const KakaoTalk = () => {
  const navigate = useNavigate();

  const [messages, setMessages] = useState<Message[]>([]);
  const [messageInput, setMessageInput] = useState<string>("");

  const [currentDate] = useState<string>(getFormattedDate());

  const conversationRef = useRef<HTMLDivElement>(null);
  // 자동 스크롤
  useEffect(() => {
    if (conversationRef.current) {
      conversationRef.current.scrollTop = conversationRef.current.scrollHeight;
    }
  }, [messages]); // messages 배열에 변화가 있을 때마다 실행
  // 메시지 전송 및 상태 업데이트 로직
  const sendMessage = useCallback(() => {
    const messageContent = messageInput.trim();

    // 입력 내용이 없으면 전송하지 X
    if (messageContent === "") {
      return;
    }

    // 새 메시지 객체 생성
    const newMessage: Message = {
      id: Date.now(), // 고유 ID로 현재 시간을 사용
      content: messageContent,
      isMine: true,
    };

    // 메시지 목록 상태 업데이트
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    // 입력 필드 초기화
    setMessageInput("");
  }, [messageInput]);

  //  Enter 키
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };
  //메시지 렌더링 함수수
  const renderMessages = () => {
    return messages.map((msg) => (
      <S.Conversation key={msg.id}>
        <S.Conversation_Circle>
          <S.Conversation_content>{msg.content}</S.Conversation_content>
          <S.Conversation_tail src={Tail} />
        </S.Conversation_Circle>
      </S.Conversation>
    ));
  };
  return (
    <S.Background>
      <Header />
      <S.STEPBYSTEP src={STEP} />

      <S.EX_BOX>
        <S.Back_Sign
          src={BACK}
          onClick={() => navigate(-1)}
          style={{ cursor: "pointer" }}
        />
        <S.EX_TEXT>EX</S.EX_TEXT>
      </S.EX_BOX>

      <S.CONVERSATION_BOX ref={conversationRef}>
        <S.PADDING />
        {/*날짜*/}
        <S.DATE_BOX>
          <S.DATE>{currentDate}</S.DATE>
        </S.DATE_BOX>

        {/*대화 하나목록*/}
        {renderMessages()}

        {/* <S.Conversation>
                <S.Conversation_Circle>
                    <S.Conversation_content>잘지내?</S.Conversation_content>
                    <S.Conversation_tail src={Tail}/>
                </S.Conversation_Circle>
            </S.Conversation>*/}
      </S.CONVERSATION_BOX>

      <S.SENDING_BOX>
        <S.MESSAGE_Form>
          <S.ADD_Circle>
            <S.ADD_img src={ADD} />
          </S.ADD_Circle>
          <S.MESSAGE_BOX>
            <S.MESSAGE_input
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="메시지를 입력하세요..."
            ></S.MESSAGE_input>
            <S.MESSAGE_Button onClick={sendMessage}>
              <S.Send_img src={SENDING} />
            </S.MESSAGE_Button>
          </S.MESSAGE_BOX>
        </S.MESSAGE_Form>
      </S.SENDING_BOX>
    </S.Background>
  );
};

export default KakaoTalk;
