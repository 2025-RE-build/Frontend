import styled from 'styled-components';

//배경
export const Background =styled.div`
width:400px;
height:956px;
min-height: 100vh;
background-color:#FF5FA2;
overflow:hidden;
display: flex;
flex-direction:column;

align-items: center;

position:relative;
`;
//카톡방 
export const STEPBYSTEP =styled.img`
margin-top:5px;
width:98%;
height:15px;

`;
//ex버튼
export const EX_BOX=styled.button`
width:101%;
height:86px;
background-color:#FFC4D199;
margin-top:10px;
display: flex;
justify-content: center;
align-items: center;
position: relative;
position:absolute;
top:100px;
cursor:pointer;
border-top:1px solid black;
border-bottom:1px solid black;

border-radius:0;
z-index:1;
&:focus {
    outline: none;
  }
  &:hover {
border-top:1px solid black;
border-bottom:1px solid black;

  }`;
export const Back_Sign=styled.img`
width:27px;
height:27px;
position: absolute;left: 15px;
top: 50%;transform: translateY(-50%);
`;
export const EX_TEXT=styled.p`
color:white;
font-weight:800;
font-size:20px;
z-index:10;
`;
//카톡 대화창
export const CONVERSATION_BOX=styled.div`
display:flex;
width:100%;
height:768px;
flex-direction:column;
align-items: center;
overflow-y:scroll;

&::-webkit-scrollbar {
    width: 0;
    height: 0;
    display: none;
  }


`;
export const PADDING=styled.div`
width:100%;
min-height:100px;
margin-top:10px;


`;

export const Conversation =styled.div`
display:flex;
justify-content: flex-end;
width:90%;
margin-bottom:15px;
height:41px;
`;
export const Conversation_Circle=styled.div`
padding: 0 15px;

height:42px;
text-align:center;
justify-content: center;
display:flex;
align-items: center;
background-color:white;
font-size:13px;
font-weight:700;
border-radius:21px;
position: relative;
`;
export const Conversation_tail=styled.img`
position:absolute;
top: 50%;transform: translateY(-50%);
right:-10px;


`;
export const Conversation_content=styled.p`
display:flex;
justify-content: center;
align-items: center;
text-align:center;
height:14px;
`;


//메세지 작성칸
export const SENDING_BOX=styled.div`
width:100%;
height:86px;
position:absolute;
bottom:0;
background-color:#FFC4D1;
display:flex;

align-items: center;
`;
export const MESSAGE_Form =styled.div`
display:flex;
justify-content: space-between;
align-items: center;
height:38px;
width:100%;
padding:0 8px;
margin-bottom:10px;


`;
export const ADD_Circle=styled.div`
width:37px;
height:37px;
border-radius:50%;
border:0.6px solid black;
background-color:white;
display:flex;
justify-content: center;
align-items: center;

`;
export const ADD_img=styled.img`
width:24px;
height:24px;

`;
export const MESSAGE_BOX=styled.div`
width:334px;
height:38px;
background-color:white;
border-radius:25px;
border:0.6px solid black;
display:flex;
justify-content: space-between;
align-items: center;
overflow:hidden;
padding:0 3px;
`;
export const MESSAGE_input = styled.input`
width: 300px;
height:100%;
padding:0 15px;
border:none;
&:focus {
    outline: none;
  }`;
export const MESSAGE_Button = styled.button`
width:33px;
height:33px;

padding: 0;
border-radius:50%;
border:0.6px solid black;
display:flex;
justify-content: center;
align-items: center;
&:focus {
    outline: none;
  }
&:hover {
    border-color: black; 
  }
`;
export const Send_img=styled.img`
width:19px;
height:19px;

`;

//날짜
export const DATE_BOX=styled.div`
width:190px;
min-height:33px;
display:flex;
justify-content: center;
align-items: center;
color:#727272;
background-color:#FFC4D199;
border-radius:17px;
margin:10px 0 30px 0;
`;
export const DATE=styled.p`
font-size:13px;
font-weight:700;
text-align:center;color:#727272;
height:17px;
`;
