import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  userId: string;
  nickname: string;
  password: string;
}

const Signup = () => {
  const navigate = useNavigate();

  // 폼 데이터를 위한 상태
  const [formData, setFormData] = useState<SignupForm>({
    userId: "",
    nickname: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    // 1. 유효성 검사 (Validation)
    if (!formData.userId || !formData.nickname || !formData.password) {
      alert("모든 정보를 입력해주세요.");
      return;
    }
    try {
      // 실제 API 호출 로직 (예: fetch 또는 axios)
      // const response = await fetch('/api/signup', {
      //     method: 'POST',
      //     headers: { 'Content-Type': 'application/json' },
      //     body: JSON.stringify(formData)
      // });

      // if (response.ok) {
      //     alert('회원가입 성공!');
      //     // 성공 시 페이지 이동 (예: navigate('/login'))
      // } else {
      //     const errorData = await response.json();
      //     alert(`회원가입 실패: ${errorData.message}`);
      // }

      // 임시 로직
      console.log("회원가입 데이터:", formData);
      alert(`${formData.userId}님 가입완료`);
      navigate("/login");
    } catch (error) {
      console.error("회원가입 중 오류 발생:", error);
      alert("서버 오류로 가입에 실패했습니다.");
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
            name="userId"
            value={formData.userId}
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
