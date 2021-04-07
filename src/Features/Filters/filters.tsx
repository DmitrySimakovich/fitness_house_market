import React, {FC} from 'react';
import {useDispatch} from "react-redux";

/*BLL*/
import {filterActions} from "./filter-reducer";

/* Components*/
import DropDown from '../../Components/DropDown/dropdown';

/*Style*/
import style from './filters.module.scss';

const Filters: FC = () => {

    const dispatch = useDispatch()

    const submit = (title: string, value?: string) => {
        if (value) {
            dispatch(filterActions.addFilter(title, value))
        } else {
            dispatch(filterActions.deleteFilter(title))
        }
    }

    return (<>
            <div className={style.item_wrap}>
                <DropDown title={'Количество занятий'}
                          values={['100 занятий', '18 занятий', '36 занятий', 'разовое посещение']} submit={submit}/>
            </div>

            <div className={style.item_wrap}>
                <DropDown title={'Срок действия'} values={['1 месяц', '6 месяцев', '1 год']} submit={submit}/>
            </div>

            <div className={style.item_wrap}>
                <DropDown title={'Категория тренера'} values={['мастер', 'профи']} submit={submit}/>
            </div>

            <div className={style.item_wrap}>
                <DropDown title={'Время посещения'} values={['утро', 'вечер']} submit={submit}/>
            </div>

            <div className={style.item_wrap}>
                <DropDown title={'Тип секции'} values={['вода']} submit={submit}/>
            </div>
        </>
    )

}
export default Filters