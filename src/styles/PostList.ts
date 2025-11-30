import styled from "styled-components";

export const Background=styled.div`
background-color: black;
width: 400px;
height:956px;
overflow:hidden;
display:flex;
flex-direction:column;
position:relative;
align-items: center;

`;
export const BACK_Box=styled.div`
width:100%;
height:28px;
display:flex;
align-items: center;
  justify-content:start; 
  margin: 15px;
  padding:0 18px;
`;
export const BACK_img=styled.img`
cursor:pointer;
width:28px;
height:28px;


`;
export const TITLE=styled.img`
height:24px;
width:110px;
`

export const Fire=styled.img`
width:24px;
height:27px;
`;

export const Title_Box=styled.div`
width:100%;
height:36px;
display:flex;
align-items: center;
  justify-content:start; 
  gap:10px;
  padding:0 30px;
  margin:10px 0 20px 0;
`;
export const POSTS_BOX=styled.div`
width:100%;
padding: 0 20px 20px 20px;
height:100vh;
display:flex;
flex-direction:column;
align-items: center;
  justify-content:start; 
  gap:10px;
  overflow-y:scroll;
scrollbar-width: none;

`;
export const PostItem_box=styled.div`
width:100%;
min-height:181px;
border-radius:31px;
border:1px solid #B0B9C2;
display:flex;
flex-direction:column;
background-color:white;
align-items: start;
  justify-content:start; 
gap:20px;
padding:15px ;
position:relative;
text-align:left;
cursor:pointer;
`;
export const Post_title=styled.div`
font-size:14px;
font-weight:600;
color:#FF5FA2;
min-height:16px;
max-width:90%;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;



`;
export const Post_content=styled.div`
font-size:12px;
color:#9D9D9D;
font-weight:600;
max-height:110px;
width:100%;
  overflow: hidden;
  -webkit-line-clamp: 6;  
  display: -webkit-box;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;

`;
export const GO_img=styled.img`
width:19px;
height:19px;
cursor:pointer;
position:absolute;
right:15px;
top:15px;
`;

export const HR =styled.hr`
width:100%;
height:1px;
background-color:white;
margin:10px 0;
`;
//버튼
export const Input_Button=styled.button`
width:140px;
min-height:60px;
border-radius:33px;
border:1px solid #ffffff;
background-color:#FF5FA2;
font-size:14px;
font-weight:800;
display:flex;
justify-content: center;
align-items:center;

margin:10px 0 20px 0;
&:focus {
    outline: none;
border:1px solid #ffffff;
  }
&:hover {
    border:1px solid #ffffff;
  }
`;