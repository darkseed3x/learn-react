import style from "./ProfileInfo.module.scss";
import React from "react";

const ProfileInfo = () => {
    return(
        <div className={style.profile_wrapper}>
            <div className={style.avatar}><img src="./sources/Icon_1.png" alt=""/></div>
            <div className={style.info}>
                <span>Date of Birth: 2 january</span>
                <span>City: Minsk</span>
                <span>Education: BSU '11</span>
                <span>Web Site: https://it-kamasutra.com</span>
            </div>
        </div>
    );
}
export default ProfileInfo;