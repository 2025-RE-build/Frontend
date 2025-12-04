import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import * as S from "@/pages/SignUp/Signup";

import Rebuild_logo from "@/assets/로고1.svg";
import Flower from "@/assets/six_leaf_flower.svg";
import Asterisk2 from "@/assets/five_leaf_flower_mini.svg";
import QurterFlower from "@/assets/four_leaf_flower_letter.svg";
import Asterisk1 from "@/assets/Asterisk 1.svg";
import SoftFlower from "@/assets/four_leaf_flower.svg";
import fiveleaf from "@/assets/5_Dots.svg";
import Smile from "@/assets/smile_ob.svg";

interface SignupForm {
  loginId: string;
  nickname: string;
  password: string;
}

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<SignupForm>({
    loginId: "",
    nickname: "",
    password: "",
  });
  const API_URL = "http://localhost:8080/api/users/signup";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    // 1. 유효성 검사 (Validation)
    if (!formData.loginId || !formData.nickname || !formData.password) {
      alert("모든 정보를 입력해주세요.");
      return;
    };

    const requestData = {
  loginId: formData.loginId, // state의 loginId 사용
    nickname: formData.nickname,
    password: formData.password,
    };

    try {
      // ✨ fetch 대신 axios.post 사용
 const response = await axios.post(
          API_URL, 
          requestData, 
          {
              headers: { 
                  'Content-Type': 'application/json' 
              },
              // ✨ CORS 환경에서 쿠키를 주고받기 위해 필수 (로그인 시 필요)
              withCredentials: true 
          }
      ); 

 // Axios는 2xx 응답만 성공으로 처리하고, 응답 본문은 response.data에 있습니다.
 alert('회원가입 성공! ' + response.data); 
 navigate("/login"); 

 } catch (error) {
      // Axios 에러 처리 (네트워크 오류, CORS, 4xx/5xx 모두 처리)
      if (axios.isAxiosError(error) && error.response) {
          // 서버에서 응답을 받은 경우 (4xx, 5xx 에러)
          const errorMsg = error.response.data || error.response.statusText;
          console.error("회원가입 실패 응답:", error.response);
          alert(`회원가입 실패: ${errorMsg}`);
      } else {
          // 서버 연결 자체 실패 (CORS, 네트워크 다운 등)
          console.error("네트워크 오류 또는 서버 연결 실패:", error);
          alert("서버 연결에 실패했습니다. (CORS 또는 서버 꺼짐)");
      }
  }
  };

  return (
    <S.Background>
      <S.DIV>
        {/*커튼, 로고, 이미지들 */}
        <S.Final_Box>
          <S.PinkBOX />
          <S.Circle_Box>
            <S.Final_Curtain /> <S.Final_Curtain /> <S.Final_Curtain />
            <S.Final_Curtain /> <S.Final_Curtain /> <S.Final_Curtain />
          </S.Circle_Box>
        </S.Final_Box>
        <S.FlowerIMG src={Flower} />
        <S.Asterisk src={Asterisk2} />
        <S.Qurter_flower src={QurterFlower} />
        <S.Big_Asterisk src={Asterisk1} />
        <S.Soft_Flower src={SoftFlower} />
        <S.Five_Flower src={fiveleaf} />
        <S.SmileImg src={Smile} />
        <S.Second_Box>
          <S.BlackBox />

          <S.Circle_Box>
           
            <S.Second_Curtain />
            <S.Second_Curtain />
            <S.Second_Curtain />
            <S.Second_Curtain />
            <S.Second_Curtain />
            <S.Second_Curtain />
          </S.Circle_Box>
        </S.Second_Box>
        <S.First_Box>
          <S.PINK_BOX2 />
          <S.Circle_Box>
            <S.First_Curtain />
            <S.First_Curtain />
            <S.First_Curtain />
            <S.First_Curtain />
            <S.First_Curtain />
            <S.First_Curtain />
          </S.Circle_Box>
        </S.First_Box>
        <S.Logo src={Rebuild_logo} />
      </S.DIV>

      <S.Signup_Box>
        <S.INPUT_BOX>
          <S.Title>1. 아이디</S.Title>
          <S.INPUT_content
            type="text"
            placeholder="입력하시오..."
            name="loginId"
            value={formData.loginId}
            onChange={handleChange}
          />
        </S.INPUT_BOX>
        <S.INPUT_BOX>
          <S.Title>2. 닉네임</S.Title>
          <S.INPUT_content
            type="text"
            placeholder="입력하시오..."
            name="nickname"
            value={formData.nickname}
            onChange={handleChange}
          />
        </S.INPUT_BOX>
        <S.INPUT_BOX>
          <S.Title>3. 비밀번호</S.Title>
          <S.INPUT_content
            type="password"
            placeholder="입력하시오..."
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </S.INPUT_BOX>
      </S.Signup_Box>

      <S.Signup_Button onClick={handleSubmit}>등록하기</S.Signup_Button>
    </S.Background>
  );
};

export default Signup;
