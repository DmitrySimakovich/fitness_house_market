import React, {FC} from 'react';
import {NavLink} from "react-router-dom";

/* Components */
import Basket from "../Basket/basket";

/* Style*/
import style from './header.module.scss';

const Header: FC = () => {
    return (
        <div className={style.wrap}>
            <NavLink to={'/'} className={style.navLink}>Fitness House Market</NavLink>
            <div className={style.basket}>
                <Basket/>
            </div>
        </div>
    )
}
export default Header