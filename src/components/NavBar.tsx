// import React from "react";
import {
  White_Circle,
  Pink_Circle,
  Black_Circle,
  NAV_Image,
} from "@/styles/NavBar";
import { Link } from "react-router-dom";

import HOME from "@/assets/home.svg";
import MESSAGE from "@/assets/message.svg";
import SECRET from "@/assets/secret.svg";
import PHONE from "@/assets/phone.svg";

const NavBar = () => {
  return (
    <White_Circle>
      <Pink_Circle>
        <Black_Circle>
          <Link to="/call">
            <NAV_Image src={PHONE} alt="전화" />
          </Link>

          {/* 홈 */}
          <Link to="/mainpage">
            <NAV_Image src={HOME} alt="홈" />
          </Link>

          {/* 메시지 */}
          <Link to="/letter">
            <NAV_Image src={MESSAGE} alt="메시지" />
          </Link>

          {/* 비밀글 */}
          <Link to="/secret">
            <NAV_Image src={SECRET} alt="비밀" />
          </Link>
        </Black_Circle>
      </Pink_Circle>
    </White_Circle>
  );
};

export default NavBar;
