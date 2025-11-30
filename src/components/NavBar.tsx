import React from "react";
import {White_Circle,Pink_Circle,Black_Circle,NAV_Image} from "../styles/NavBar";
import HOME from "../img/home.png";
import MESSAGE from "../img/message.png";
import SECRET from "../img/secret.png";
import PHONE from "../img/phone.png";


const NavBar = () =>{

    return(
        <White_Circle>
            <Pink_Circle>
                <Black_Circle>
                 <NAV_Image src={PHONE}/> {/*링크 나중에 걸 예정*/}
                 <NAV_Image src={HOME}/>
                 <NAV_Image src={MESSAGE}/>
                 <NAV_Image src={SECRET}/>
                </Black_Circle>
            </Pink_Circle>
        </White_Circle>
    );
};

export default NavBar;
