// import React from "react";
import * as S from "@/components/NavBar/NavBarStyle";
import { Link } from "react-router-dom";

import HOME from "@/assets/home.svg";
import MESSAGE from "@/assets/message.svg";
import SECRET from "@/assets/secret.svg";
import PHONE from "@/assets/phone.svg";

const NavBar = () => {
  return (
    <S.White_Circle>
      <S.Pink_Circle>
        <S.Black_Circle>
          <Link to="/call">
            <S.NAV_Image src={PHONE} alt="전화" />
          </Link>

          {/* 홈 */}
          <Link to="/mainpage">
            <S.NAV_Image src={HOME} alt="홈" />
          </Link>

          {/* 메시지 */}
          <Link to="/letter">
            <S.NAV_Image src={MESSAGE} alt="메시지" />
          </Link>

          {/* 비밀글 */}
          <Link to="/secret">
            <S.NAV_Image src={SECRET} alt="비밀" />
          </Link>
        </S.Black_Circle>
      </S.Pink_Circle>
    </S.White_Circle>
  );
};

export default NavBar;
