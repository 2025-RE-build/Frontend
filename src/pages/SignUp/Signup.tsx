import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as S from "@/pages/SignUp/Signup";

import Rebuild_logo from "@/assets/로고1.svg";
import Flower from "@/assets/six_leaf_flower.svg";
import Asterisk2 from "@/assets/five_leaf_flower_mini.svg";
import QurterFlower from "@/assets/four_leaf_flower_letter.svg";
import Asterisk1 from "@/assets/Asterisk 1.svg";
import SoftFlower from "@/assets/four_leaf_flower.svg";
import fiveleaf from "@/assets/5_Dots.svg";
import Smile from "@/assets/smile_ob.svg";

// 닉네임 저장
import { saveLoginInfo } from "@/utils/auth";

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
  const API_URL = "https://rebuildlion.cloud/api/users/signup";
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    // 1. 유효성 검사
    if (!formData.loginId || !formData.nickname || !formData.password) {
      alert("모든 정보를 입력해주세요.");
      return;
    }

    const requestData = {
      loginId: formData.loginId,
      nickname: formData.nickname,
      password: formData.password,
    };

    try {
      const response = await axios.post(API_URL, requestData, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });

      // ✅ 1. 중복 알림 문제 해결: 아래 로직을 한 번만 실행합니다.
      saveLoginInfo(formData.loginId, formData.nickname);
      
      // response.data가 객체일 수 있으므로 문자열만 추출하거나 기본 메시지 출력
      alert("회원가입 성공!"); 
      navigate("/login");

    } catch (error) {
      // ✅ 2. [Object object] 에러 메시지 해결
      if (axios.isAxiosError(error) && error.response) {
        // 서버에서 보내주는 구체적인 에러 메시지가 있다면 그것을 사용하고, 없으면 기본 문구 출력
        const errorData = error.response.data;
        
        // 보통 백엔드에서 { "message": "중복된 아이디입니다" } 형태로 보낼 때가 많습니다.
        // 데이터 구조에 따라 errorData.message 혹은 errorData를 선택하세요.
        const errorMsg = typeof errorData === 'string' 
          ? errorData 
          : (errorData.message || "중복된 아이디거나 닉네임입니다.");

        console.error("회원가입 실패 응답:", error.response);
        alert(`회원가입 실패: ${errorMsg}`);
      } else {
        console.error("네트워크 오류:", error);
        alert("서버 연결에 실패했습니다.");
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
