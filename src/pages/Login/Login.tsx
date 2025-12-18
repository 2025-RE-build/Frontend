import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "@/pages/Login/Login";

import Rebuild_logo from "@/assets/로고1.svg";
import Flower from "@/assets/six_leaf_flower.svg";
import Asterisk2 from "@/assets/five_leaf_flower_mini.svg";
import QurterFlower from "@/assets/four_leaf_flower_letter.svg";
import Asterisk1 from "@/assets/Asterisk 1.svg";
import SoftFlower from "@/assets/four_leaf_flower.svg";
import fiveleaf from "@/assets/5_Dots.svg";
import Smile from "@/assets/smile_ob.svg";

interface LoginForm {
  loginId: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<LoginForm>({
    loginId: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const API_URL = "https://rebuildlion.cloud/api/users/login";
  const handleSubmit = async () => {
    if (!formData.loginId || !formData.password) {
      alert("모든 정보를 입력해주세요.");
      return;
    }

    const requestData = {
      loginId: formData.loginId,
      password: formData.password,
    };

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify(requestData),
        credentials: 'include' 
      });
      
      if (response.ok) {
        const responseData = await response.json(); 
        const accessToken = responseData.accessToken;
        
        localStorage.setItem('accessToken', accessToken);
        
        alert(`${formData.loginId}님 환영합니다!`);
        navigate("/home");
      } else {
        // ✅ [Object object] 방지 및 서버 에러 메시지 추출
        const contentType = response.headers.get("content-type");
        let errorMsg = "";

        if (contentType && contentType.includes("application/json")) {
          const errorData = await response.json();
          // 서버 응답 구조에 따라 errorData.message 혹은 errorData.error 등으로 수정하세요.
          errorMsg = errorData.message || errorData.error || "아이디 또는 비밀번호를 확인해주세요.";
        } else {
          // JSON이 아닌 텍스트로 올 경우
          errorMsg = await response.text();
        }

        alert(`로그인 실패: ${errorMsg}`);
      }
      
    } catch (error) {
      console.error("로그인 중 오류 발생:", error);
      alert("서버 연결에 실패했습니다.");
    }
  };
  return (
    <S.Background>
      <S.DIV>
        {/* 커튼 / 이미지들 */}
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

      <S.Login_Box>
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
          <S.Title>2. 비밀번호</S.Title>
          <S.INPUT_content
            type="password"
            placeholder="입력하시오..."
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </S.INPUT_BOX>
      </S.Login_Box>

      <S.Signup_Button onClick={handleSubmit}>로그인</S.Signup_Button>
    </S.Background>
  );
};

export default Login;
