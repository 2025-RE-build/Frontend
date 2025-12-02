import styled from 'styled-components';
//배경, 커튼
export const Background=styled.div`
background-color:#FF5FA4;
width: 400px;
height:956px;
overflow:hidden;
display:flex;
flex-direction:column;
justify-content:space-between  ;  


align-items: center;
`;
export const Circle_Box=styled.div`
width:450px;
overflow:hidden;
display:flex;
flex-direction:row;

`
export const PinkBOX=styled.div`
width:100%;
height:50px; 
 background-color:#FF5FA4; 


`;
export const BlackBox=styled.div`
width:100%;
height:80px;
background-color:black;
`;
export const PINK_BOX2 = styled.div`
width:100%;
height:110px;
`;


export const Final_Curtain=styled.div`
 width: 75px; 
  height: 37.5px; 
  background-color:#FF5FA4; 
  border: 1px solid black; 
  border-top: none; 

  border-bottom-left-radius: 37.5px; 
  border-bottom-right-radius: 37.5px; 
  
`;
export const Second_Curtain=styled.div`
 width: 75px; 
  height: 37.5px; 
  background-color:black; 
  border: 1px solid black; 
  border-top: none; 

  border-bottom-left-radius: 37.5px; 
  border-bottom-right-radius: 37.5px; 

`;
export const First_Curtain = styled.div`
  width: 75px; 
  height: 37.5px; 
  border: 1px solid black; 
  border-top: none; 

  border-bottom-left-radius: 37.5px; 
  border-bottom-right-radius: 37.5px; 
  z-index:1;
`;

export const Second_Box = styled.div`
position: absolute;
  z-index: 1;
`;
export const First_Box = styled.div`
position: absolute;
  z-index: 9;
`;
export const Final_Box = styled.div`
position: absolute;
  z-index: 7;
`;
//이미지들

export const FlowerIMG=styled.img`
width:80px;
height:80px;
position:absolute;
z-index:10;
top: 20px;left: 90px;
`
export const Asterisk=styled.img`
width:25px;
height:25px;
position:absolute;
z-index:10;
top: 30px;left: 45px;
`
export const Qurter_flower=styled.img`
width:90px;
height:100px;
position:absolute;
z-index:10;
top: 8px;
right:0px;
`
export const Logo =styled.img`
width:246px;
height:246px;
position:absolute;z-index:10;
top: 127px;
left: 50%; 
  transform: translateX(-50%);
`;
export const Big_Asterisk =styled.img`
width:80px;
height:95px;
position:absolute;z-index:10;
top: 202px;
left:0px;
`;
export const Soft_Flower =styled.img`
width:33px;
height:34px;
position:absolute;z-index:10;
top: 172px;
left:293px;
`;
export const Five_Flower =styled.img`
width:37px;
height:35px;
position:absolute;z-index:10;
top: 313px;
left:123px;
`;
export const SmileImg =styled.img`
width:62px;
height:63px;
position:absolute;z-index:10;
top: 261px;
left:319px;
`;
export const DIV =styled.div`
width:100%;
height:360px;
z-index:10;position: relative;
margin-top:30px;
`;
//회원가입 정보창
export const Signup_Box=styled.div`
width:300px;
height:268px;
z-index:20;
border:2px solid white;
border-radius:27px;
display:flex;
flex-direction:column;
justify-content:  space-evenly;  
align-items: center;

`;

export const INPUT_BOX=styled.div`
display:flex;
margin:0 10px;
flex-direction:row;
justify-content: space-between; 
align-items: center;
width:90%;
height:33px;


`;
export const Title=styled.div`
font-size:12px;
font-weight:800;
color:white;
`;
export const INPUT_content=styled.input`
width:150px;
height:33px;
font-size:11px;
font-weight:700;
color:#828282;
border:none;
border-radius:20px;
padding:2px 20px;outline: none;

`;
//버튼 UI

export const Signup_Button=styled.button`
width:150px;
height: 50px;
border-radius:27px;
font-size:15px;
font-weight:700;
display:flex;
justify-content:center;  
align-items: center;
text-align:center;
border:none;
margin:10px 0 150px 0;
cursor:pointer;
&:focus {
    outline: none;}
`;
