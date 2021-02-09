import React, {FC} from 'react';
import {dataItem} from "../../Data/data";
import style from './card.module.css';
import {NavLink} from "react-router-dom";

type propsType = dataItem


const Card: FC<propsType> = ({image, title, description, properties, alias}) => {


    return (
        <div className={style.card_wrap}>
            <NavLink to={`/${alias}`}><img className={style.image} src={image}/></NavLink>

            <div className={style.description_wrap}>
                <NavLink to={`/${alias}`} className={style.navLink}><h1>{title}</h1></NavLink>
                <div>
                    <p className={style.description_content}>
                        {
                            description.length > 100 ? `${description.substring(0, 99)}...` : description
                        }
                    </p>
                </div>
                <div className={style.hashTag_wrap}>
                    {
                        properties.map(property => {
                            return <p className={style.hashTag} key={property.title}>{`#${property.value}`}</p>
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default Card