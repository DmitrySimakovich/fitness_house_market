import React, {FC} from 'react';
import {dataItem} from "../../Data/data";
import style from './fullCard.module.css';
import {useDispatch} from "react-redux";
import {basketAction} from "../Basket/basket-reducer";

type propsType = dataItem

const FullCard: FC<propsType> = (
    {
        image,
        title,
        properties,
        description,
        price,
        alias
    }) => {

    const dispatch = useDispatch()

    const addProduct = (price: number, alias: string) => {
        dispatch(basketAction.addProduct(price, alias))
    }

    const priceFormatEnd = String(price).slice(-3)
    const priceFormatBegin = Math.floor(price/1000)

    return (
        <div className={style.fullCard_wrap}>
            <div className={style.fullCard_container}>
                <div>
                    <img src={image} className={style.fullCard_image} alt=''/>
                </div>

                <div className={style.fullCard_description_wrap}>
                    <h1 className={style.fullCard_description_title}>{title}</h1>
                    <div className={style.fullCard_description_main}>{description}</div>
                    <div>
                        {
                            properties.map(property => <div key={property.title}
                                                            className={style.fullCard_description_property}>
                                <span className={style.fullCard_description_property_title}>{`${property.title} `}</span>
                                <strong className={style.fullCard_description_property_value}>{` - ${property.value}`}</strong></div>)
                        }
                    </div>
                    <div className={style.fullCard_buy}>
                        <div className={style.fullCard_price}>
                            {`${priceFormatBegin} ${priceFormatEnd} руб.`}
                        </div>
                        <div className={style.fullCard_button_buy}>
                            <button onClick={() => {
                                addProduct(price, alias)
                            }}>Купить
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FullCard