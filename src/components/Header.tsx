// import React from "react";
import Rebuild_logo from "@/assets/Rebuild_logo.svg";
import {
  HEAD,
  Rebuild_Logo,
  Black_Box,
  Pink_Box,
  Hot_Pink_Line1,
  Hot_Pink_Line2,
} from "./HeaderStyle";

const Header = () => {
  return (
    <HEAD>
      <Black_Box>
        <Hot_Pink_Line1></Hot_Pink_Line1>
        <Hot_Pink_Line2></Hot_Pink_Line2>
        <Pink_Box>
          <Rebuild_Logo src={Rebuild_logo} alt="리빌드 로고" />
        </Pink_Box>
      </Black_Box>
    </HEAD>
  );
};

export default Header;
