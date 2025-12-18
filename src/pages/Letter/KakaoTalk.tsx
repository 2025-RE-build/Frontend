import React, { useEffect, useCallback, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "@/pages/Letter/KakaoTalkstyle";
import * as Stomp from "stompjs"; 
import SockJS from "sockjs-client";
import axios from "axios";

import Header from "@/components/Header/Header";
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
    year: "numeric", month: "long", day: "numeric", weekday: "long",
  };
  return today.toLocaleDateString("ko-KR", options);
};

const KakaoTalk = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([]);
  const [messageInput, setMessageInput] = useState<string>("");
  const [currentDate] = useState<string>(getFormattedDate());

  const stompClientRef = useRef<Stomp.Client | null>(null);
  const conversationRef = useRef<HTMLDivElement>(null);

  // 1. 고정 설정값 ㅛ
  const BASE_URL = "https://rebuildlion.cloud";
  const MONOLOGUE_ID = 1;
  const getAccessToken = () => localStorage.getItem("accessToken");

  // 2. 과거 내역 불러오기 (REST API)
// 2. 과거 내역 불러오기 (REST API)
useEffect(() => {
  const fetchHistory = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      if (!token) return;

      // localStorage에서 ID를 가져오고, 없으면 고정값(1)을 사용
      const savedId = localStorage.getItem("currentChatId") || MONOLOGUE_ID; 
      
      const response = await axios.get(`${BASE_URL}/monologues/${savedId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      
      if (Array.isArray(response.data)) {
        const history = response.data.map((m: any) => ({
          id: m.id,
          content: m.content,
          isMine: true,
        }));
        setMessages(history);
      }
    } catch (error) {
      console.error("과거 내역 로딩 실패 (500 에러 가능성):", error);
    }
  };

  fetchHistory();
}, [BASE_URL]); // 컴포넌트 마운트 시 실행


// 3. 웹소켓 연결 및 실시간 수신 설정
useEffect(() => {
  const token = getAccessToken();
  const socket = new SockJS(`${BASE_URL}/ws`);
  const stompClient = Stomp.over(socket);

  stompClient.connect({ Authorization: `Bearer ${token}` }, () => {
    stompClientRef.current = stompClient;

    stompClient.subscribe('/topic/messages', (sdkEvent) => {
      const data = JSON.parse(sdkEvent.body);
      
      // [정답 설계 반영] 서버가 준 monologueId를 로컬 스토리지에 영구 저장
      if (data.monologueId) {
        localStorage.setItem("currentChatId", data.monologueId);
      }
      
      setMessages((prev) => {
        if (prev.find(m => m.id === data.id)) return prev;
        return [...prev, {
          id: data.id || Date.now(),
          content: data.content,
          isMine: true
        }];
      });
    });
  }, (error) => {
    console.error('WebSocket Error:', error);
  });

  return () => {
    if (stompClientRef.current?.connected) {
      stompClientRef.current.disconnect(() => {});
    }
  };
}, []);

  // 자동 스크롤
  useEffect(() => {
    if (conversationRef.current) {
      conversationRef.current.scrollTop = conversationRef.current.scrollHeight;
    }
  }, [messages]);

  // 4. 메시지 전송 로직
  // 4. 메시지 전송 로직 (수정본)
  const sendMessage = useCallback(() => {
    const messageContent = messageInput.trim();
    const client = stompClientRef.current;

    // 1. 입력값이 없으면 무시
    if (messageContent === "") return;

    // 2. 연결 상태 확인
    if (!client || !client.connected) {
      alert("서버와 연결이 끊겨 있습니다. 페이지를 새로고침해주세요.");
      return;
    }

    try {
      // 3. 서버로 전송할 데이터 구조 (백엔드 DTO와 일치해야 함)
      const messageData = {
        monologueId: MONOLOGUE_ID,
        content: messageContent,
      };

      // 4. 서버로 메시지 전송
      // 주의: 여기서는 setMessages를 하지 않습니다. 
      // 화면 렌더링은 위쪽 useEffect의 subscribe(구독) 로직에서 처리합니다.
      client.send("/app/chat", {}, JSON.stringify(messageData));

      // 5. 입력창만 초기화
      setMessageInput("");
      
      console.log("메시지 전송 성공:", messageData);
    } catch (error) {
      console.error("메시지 전송 중 에러 발생:", error);
      alert("메시지 전송에 실패했습니다.");
    }
  }, [messageInput]);


  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") sendMessage();
  };

  const renderMessages = () => {
    return messages.map((msg, index) => (
      <S.Conversation key={`${msg.id}-${index}`}>
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
        <S.Back_Sign src={BACK} onClick={() => navigate(-1)} style={{ cursor: "pointer" }} />
        <S.EX_TEXT>EX</S.EX_TEXT>
      </S.EX_BOX>

      <S.CONVERSATION_BOX ref={conversationRef}>
        <S.PADDING />
        <S.DATE_BOX><S.DATE>{currentDate}</S.DATE></S.DATE_BOX>
        {renderMessages()}
      </S.CONVERSATION_BOX>

      <S.SENDING_BOX>
        <S.MESSAGE_Form>
          <S.ADD_Circle><S.ADD_img src={ADD} /></S.ADD_Circle>
          <S.MESSAGE_BOX>
            <S.MESSAGE_input
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="메시지를 입력하세요..."
            />
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