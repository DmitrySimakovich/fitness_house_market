import React, {FC, useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

/* BLL */
import {basketAction, itemsInBasket, titlePopup} from './basket-reducer';

/* Types */
import {AppRootStateType} from "../../App/store";
import {dataItem} from "../../Data/data";

/* Style */
import style from './basket.module.scss'
import basket from '../../assets/shopping-basket-512.png';

type propsBasketPopup = {
    title: titlePopup
    resetShowPopup: () => void
    isShowPopup: boolean
}

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


const BasketPopup: FC<propsBasketPopup> = ({title, resetShowPopup, isShowPopup}) => {

    useEffect(() => {
        const timeOutId = setTimeout(() => {resetShowPopup()}, 2500)

        return (
            () => {
                clearTimeout(timeOutId)
            }
        )
    }, [isShowPopup, resetShowPopup])

    return (
        <span className={style.popup_title}>
            {title}
        </span>
    )
}

const Basket: FC = () => {

    const dispatch = useDispatch()
    const count = useSelector<AppRootStateType, number>(state => state.basket.count)
    const isShowPopup = useSelector<AppRootStateType, boolean>(state => state.basket.isShowPopup)
    const titlePopup = useSelector<AppRootStateType, titlePopup>(state => state.basket.titlePopup)

    const callBackShowPopup = useCallback(() => {
        dispatch(basketAction.setShowPopup(false, 'Added to cart!'))
    }, [dispatch])

    return (
        <div className={style.pos_relative}>
            <div className={style.basket}>
                <div className={style.basket_value}>{count}</div>
                <img src={basket} className={style.basket_icon} alt=''/>
                <div>Корзина</div>
            </div>

            <div className={`${style.popup} ${isShowPopup ? style.popup__open : style.popup__close }`}>
                <BasketPopup title={titlePopup} resetShowPopup={callBackShowPopup} isShowPopup={isShowPopup} />
            </div>

            <BoughtList/>

        </div>
    )
}
export default Basket