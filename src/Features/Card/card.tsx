import React, {FC} from 'react';
import {NavLink} from "react-router-dom";

/* Types */
import {dataItem} from "../../Data/data";


/* Style */
import style from './card.module.scss';


const Card: FC<dataItem> = ({image, title, description, properties, alias}) => {


    return (
        <div className={style.card_item}>
            <div className={style.card_item__wrap}>
                <NavLink to={`/${alias}`}>
                    <img className={style.image} src={image} alt={'Oops...ImageCard'}/>
                </NavLink>

                <NavLink to={`/${alias}`} className={style.navLink}>
                    <h2>{title}</h2>
                </NavLink>

                <p className={style.description}>
                    {
                        description.length > 100 ? `${description.substring(0, 99)}...` : description
                    }
                </p>


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