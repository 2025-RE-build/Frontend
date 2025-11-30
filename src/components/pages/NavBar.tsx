import React from "react";
import * as S from "../../styles/NavBar";
import HOME from "../../img/home.png";
import MESSAGE from "../../img/message.png";
import SECRET from "../../img/secret.png";
import PHONE from "../../img/phone.png";


const NavBar = () =>{

    return(
        <S.White_Circle>
            <S.Pink_Circle>
                <S.Black_Circle>
                 <S.NAV_Image src={PHONE}/> {/*링크 나중에 걸 예정*/}
                 <S.NAV_Image src={HOME}/>
                 <S.NAV_Image src={MESSAGE}/>
                 <S.NAV_Image src={SECRET}/>
                </S.Black_Circle>
            </S.Pink_Circle>
        </S.White_Circle>
    );
};

export default NavBar;
