import React, {FC} from 'react';
import {useSelector} from "react-redux";

/* BLL */
import {itemsInBasket} from './basket-reducer';

/* Types */
import {AppRootStateType} from "../../App/store";
import {dataItem} from "../../Data/data";

/* Style */
import style from './basket.module.scss'
import basket from '../../assets/shopping-basket-512.png';

const BoughtList = () => {

    const boughtAlias = useSelector<AppRootStateType, Array<itemsInBasket>>(state => state.basket.aliases)
    const totalAmount = useSelector<AppRootStateType, number>(state => state.basket.totalAmount)
    const products = useSelector<AppRootStateType, Array<dataItem>>(state => state.productList.services)

    return (
        <div className={style.basket_list}>
            {
                boughtAlias.map(el => {
                    const product = products.find(pr => pr.alias === el.alias)

                    if (product) {
                        return (
                            <div className={style.element} key={el.alias}>
                                <span className={style.element_title}>{product.title}</span>

                                <div className={style.price}>
                                                <span className={style.element_price}>{`${product.price}руб.`}
                                                    <strong>{`x${el.value}`}</strong></span>
                                </div>
                            </div>
                        )
                    }
                })
            }
            <div className={style.amount}>
                Итого:
                <span> {totalAmount}руб.</span>
            </div>
        </div>
    )
}

const Basket: FC = () => {

    const count = useSelector<AppRootStateType, number>(state => state.basket.count)

    return (
        <div className={style.pos_relative}>
            <div className={style.basket}>
                <div className={style.basket_value}>{count}</div>
                <img src={basket} className={style.basket_icon} alt=''/>
                <div>Корзина</div>
            </div>

            <BoughtList/>

        </div>
    )
}
export default Basket