import React, {FC} from 'react';
import {useDispatch} from "react-redux";

/* BLL */
import {basketThunk} from "../Basket/basket-reducer";

/* Types */
import {dataItem} from "../../Data/data";

/* Style */
import style from './fullCard.module.scss';

const FullCard: FC<dataItem> = (
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
        dispatch(basketThunk.addProductThunk(alias, price))
    }

    const priceFormatEnd = String(price).slice(-3)
    const priceFormatBegin = Math.floor(price / 1000)

    return (
        <div className={style.wrap}>
            <div className={style.image}>
                <img src={image} alt='Oops...card'/>
            </div>

            <div className={style.description}>
                <h4 className={style.title}>{title}</h4>
                <div className={style.main}>{description}</div>
                {
                    properties.map(property => (
                        <div key={property.title}
                             className={style.property}>
                                <span
                                    className={style.fullCard_description_property_title}>{`${property.title} `}</span>
                            <strong
                                className={style.fullCard_description_property_value}>{` - ${property.value}`}</strong>
                        </div>))
                }
                <div className={style.purchase}>
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
    )
}
export default FullCard