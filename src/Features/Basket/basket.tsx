import React, {FC, useState} from 'react';
import style from './basket.module.css'
import basket from '../../assets/shopping-basket-512.png';
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../App/store";
import {dataItem} from "../../Data/data";

type propsType = {}

const Basket: FC<propsType> = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false)

    const count = useSelector<AppRootStateType, number>(state => state.basket.count)
    const products = useSelector<AppRootStateType, Array<dataItem>>(state => state.productList.services)
    const boughtAlias = useSelector<AppRootStateType, Array<string>>( state => state.basket.aliases)

    const boughtList = products.filter( product => boughtAlias.includes(product.alias))

    return (
        <div className={style.basket} onClick={ () => setIsOpen( prevState => !prevState)} onBlur={ () => setIsOpen(false)}>
            <div className={style.basket_value}>{count}</div>
            <img src={basket} className={style.basket_icon} alt=''/>
            <div>Корзина</div>
            <div className={style.basket_list}>
                { isOpen?
                    <div>
                        {
                            boughtList.map( el => <div key={el.title}>{el.title}</div>)
                        }
                    </div>
                    : null
                }
            </div>
        </div>
    )
}
export default Basket