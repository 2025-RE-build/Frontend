import React from "react";
import Rebuild_logo from '../../img/Rebuild_logo.png';
import * as S from '../../styles/Signup';
import Flower from '../../img/Flower.png';
import Asterisk2 from '../../img/Asterisk2.png';
import QurterFlower from '../../img/qurter_Flower.png';
import Asterisk1 from '../../img/Asterisk1.png';
import SoftFlower from '../../img/Soft Flower.png';
import fiveleaf from '../../img/fiveleaf.png';
import Smile from '../../img/Smile.png';
import { useState } from "react";

interface SignupForm {
    userId: string;
    nickname: string;
    password: string;
}
const Signup = () => {

   
        const [formData, setFormData] = useState<SignupForm>({
            userId: '',
            nickname: '',
            password: '',
        });
        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const { name, value } = e.target;
            setFormData(prev => ({
                ...prev,
                [name]: value,
            }));
        };

        const handleSubmit = async () => {
            if (!formData.userId || !formData.nickname || !formData.password) {
                alert('모든 정보를 입력해주세요.');
                return;
            }
            try {
      
                console.log('회원가입 데이터:', formData);
                alert(`${formData.userId}님 가입완료`);
    
            } catch (error) {
                console.error('회원가입 중 오류 발생:', error);
                alert('서버 오류로 가입에 실패했습니다.');
            }
        };


    return (
        <S.Background>
        <S.DIV>
            {/*커튼, 로고, 이미지들 */}
            <S.Final_Box>
                <S.PinkBOX/>
                <S.Circle_Box>
                    <S.Final_Curtain/> <S.Final_Curtain/> <S.Final_Curtain/> <S.Final_Curtain/> <S.Final_Curtain/> <S.Final_Curtain/>
                </S.Circle_Box>
            </S.Final_Box>
            <S.FlowerIMG src={Flower} />
            <S.Asterisk src={Asterisk2}/>
            <S.Qurter_flower src={QurterFlower}/>
            <S.Big_Asterisk src={Asterisk1}/>
            <S.Soft_Flower src={SoftFlower}/>
            <S.Five_Flower src={fiveleaf}/>
            <S.SmileImg src={Smile}/>
            <S.Second_Box>
                <S.BlackBox/>
                <S.Circle_Box>
                    <S.Second_Curtain/><S.Second_Curtain/><S.Second_Curtain/><S.Second_Curtain/><S.Second_Curtain/><S.Second_Curtain/>
                </S.Circle_Box>
            </S.Second_Box>
            <S.First_Box>
                <S.PINK_BOX2/>
                <S.Circle_Box>
                    <S.First_Curtain/><S.First_Curtain/><S.First_Curtain/><S.First_Curtain/><S.First_Curtain/><S.First_Curtain/>
                </S.Circle_Box>
            </S.First_Box>
            <S.Logo src={Rebuild_logo}/>
        </S.DIV>
    
        <S.Signup_Box>
            <S.INPUT_BOX>
                <S.Title>1. 아이디</S.Title>
                <S.INPUT_content type="text" placeholder="입력하시오..." name="userId" 
                    value={formData.userId} 
                    onChange={handleChange} />
            </S.INPUT_BOX>
            <S.INPUT_BOX>
                <S.Title>2. 닉네임</S.Title>
                <S.INPUT_content type="text" placeholder="입력하시오..."
                    name="nickname" 
                    value={formData.nickname} 
                    onChange={handleChange} />
            </S.INPUT_BOX>
            <S.INPUT_BOX>
                <S.Title>3. 비밀번호</S.Title>
                <S.INPUT_content type="password" placeholder="입력하시오..."
                    name="password" 
                    value={formData.password}
                    onChange={handleChange}/>
            </S.INPUT_BOX>
        </S.Signup_Box>
    
        <S.Signup_Button onClick={handleSubmit}>
            등록하기
        </S.Signup_Button>
    
    </S.Background>

  );
  };

  export default Signup;