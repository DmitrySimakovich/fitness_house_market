import React, {FC} from 'react';
import {useSelector} from "react-redux";

/* Components */
import loader from "../../assets/Ripple-1.3s-197px.svg";
import Filters from "../Filters/filters";
import ProductList from "../ProductList/productList";

/* Types */
import {AppRootStateType} from "../../App/store";

/* Style */
import style from "./homePage.module.scss";

const HomePage: FC = () => {

    const loaderStatus = useSelector<AppRootStateType, boolean>(state => state.app.statusLoading)

    if (loaderStatus) {
        return (
            <div className={style.wrap_loader}>
                <img src={loader} alt={'Загрузка...'}/>
            </div>
        )
    }

    return (
        <>
            <div className={style.filters_box}>
                <Filters/>
            </div>

            <div className={style.product_box}>
                <ProductList/>
            </div>
        </>
    )
}
export default HomePage