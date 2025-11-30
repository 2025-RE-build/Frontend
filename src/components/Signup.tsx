import React from "react";
import Rebuild_logo from '../img/Rebuild_logo.png';
import {Final_Box,PINK_BOX2,First_Box,Second_Box,Background,BlackBox,PinkBOX,Circle_Box,First_Curtain,Second_Curtain,Final_Curtain,
    FlowerIMG,Asterisk,Qurter_flower,Logo,Big_Asterisk,
    Soft_Flower,Five_Flower,SmileImg,Signup_Box,DIV,INPUT_BOX
    ,Title,INPUT_content,Signup_Button
} from '../styles/Signup';
import Flower from '../img/Flower.png';
import Asterisk2 from '../img/Asterisk2.png';
import QurterFlower from '../img/qurter_Flower.png';
import Asterisk1 from '../img/Asterisk1.png';
import SoftFlower from '../img/Soft Flower.png';
import fiveleaf from '../img/fiveleaf.png';
import Smile from '../img/Smile.png';
import { useState } from "react";

interface SignupForm {
    userId: string;
    nickname: string;
    password: string;
}
const Signup = () => {

   
        // 폼 데이터를 위한 상태
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
            // 1. 유효성 검사 (Validation)
            if (!formData.userId || !formData.nickname || !formData.password) {
                alert('모든 정보를 입력해주세요.');
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
                console.log('회원가입 데이터:', formData);
                alert(`${formData.userId}님 가입완료`);
    
            } catch (error) {
                console.error('회원가입 중 오류 발생:', error);
                alert('서버 오류로 가입에 실패했습니다.');
            }
        };


    return (
      
   <Background>
    <DIV>
    {/*커튼, 로고, 이미지들 */}
    <Final_Box>
        <PinkBOX/>
        <Circle_Box>
            <Final_Curtain/>  <Final_Curtain/>  <Final_Curtain/>  <Final_Curtain/>  <Final_Curtain/>  <Final_Curtain/>
        </Circle_Box>
    </Final_Box>
    <FlowerIMG src={Flower} />
    <Asterisk src={Asterisk2}/>
    <Qurter_flower src={QurterFlower}/>
    <Big_Asterisk src={Asterisk1}/>
    <Soft_Flower src={SoftFlower}/>
    <Five_Flower src={fiveleaf}/>
    <SmileImg src={Smile}/>
    <Second_Box>
    <BlackBox/>
    
        <Circle_Box>
    <Second_Curtain/><Second_Curtain/><Second_Curtain/><Second_Curtain/><Second_Curtain/><Second_Curtain/></Circle_Box>
   </Second_Box>
<First_Box>
<PINK_BOX2/>
    <Circle_Box>
<First_Curtain/><First_Curtain/><First_Curtain/><First_Curtain/><First_Curtain/><First_Curtain/>
   </Circle_Box>
   </First_Box>
<Logo src={Rebuild_logo}/>
</DIV>

<Signup_Box>
<INPUT_BOX>
<Title>1. 아이디</Title><INPUT_content type="text" placeholder="입력하시오..." name="userId" 
            value={formData.userId} 
            onChange={handleChange} />
</INPUT_BOX>
<INPUT_BOX>
<Title>2. 닉네임</Title><INPUT_content type="text"  placeholder="입력하시오..."
name="nickname" 
value={formData.nickname} 
onChange={handleChange} />
</INPUT_BOX>
<INPUT_BOX>
<Title>3. 비밀번호</Title><INPUT_content type="password" placeholder="입력하시오..."
name="password" 
value={formData.password}
onChange={handleChange}/>
</INPUT_BOX>
</Signup_Box>

<Signup_Button onClick={handleSubmit}>
    등록하기
</Signup_Button>

   </Background>


  );
  };

  export default Signup;