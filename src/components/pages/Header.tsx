import React from "react";
import Rebuild_logo from '../../img/Rebuild_logo.png';
import * as S from '../../styles/HeaderStyle';

const Header = () => {
    return (
      
     <S.HEAD>
        <S.Black_Box>
            <S.Hot_Pink_Line1>

            </S.Hot_Pink_Line1>
            <S.Hot_Pink_Line2>

            </S.Hot_Pink_Line2>
        <S.Pink_Box>
   <S.Rebuild_Logo src = {Rebuild_logo} alt="리빌드 로고" />
</S.Pink_Box>
</S.Black_Box>

     </S.HEAD>


  );
  };
  
  export default Header;