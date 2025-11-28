import styled from 'styled-components';

export const HEAD=styled.div`
width:100%;
` //헤더 총 길이 400px => 바뀔 수도 있음, 배치는 app이나 main에서 할 듯..

export const Black_Box = styled.div`
width:100%;
height:82px;
background-color:black;
display: flex;
flex-direction: column;
justify-content: center; 
align-items: center;
`
export const Pink_Box=styled.div`
width:99%;
height:90%;
display: flex;
justify-content: center; 
align-items: center;
overflow: hidden;
background-color:#FFE2E9;
margin-bottom:2px;
`;
export const Hot_Pink_Line1=styled.div`
width:100%;
height:1px;
margin: 5px 0 2px 0;
background-color:#FF5FA2;
`;
export const Hot_Pink_Line2=styled.div`
width:100%;
height:2px;
margin: 0px 0 2px 0;
background-color:#FF5FA2;
`;
export const Rebuild_Logo = styled.img`
width:180px;
height: 180px;
object-fit: cover;
`;


