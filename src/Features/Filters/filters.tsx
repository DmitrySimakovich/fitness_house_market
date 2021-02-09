import React, {FC} from 'react';
import {useDispatch} from "react-redux";
import DropDown from '../../Components/DropDown/dropdown';
import {filterActions} from "./filter-reducer";
import style from './filters.module.css';


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
            <div className={style.dropDown_item}>
                <DropDown title={'Количество занятий'}
                          values={['100 занятий', '18 занятий', '36 занятий', 'разовое посещение']} submit={submit}/>
            </div>

            <div className={style.dropDown_item}>
                <DropDown title={'Срок действия'} values={['1 месяц', '6 месяцев', '1 год']} submit={submit}/>
            </div>

            <div className={style.dropDown_item}>
                <DropDown title={'Категория тренера'} values={['мастер', 'профи']} submit={submit}/>
            </div>

            <div className={style.dropDown_item}>
                <DropDown title={'Время посещения'} values={['утро', 'вечер']} submit={submit}/>
            </div>

            <div className={style.dropDown_item}>
                <DropDown title={'Тип секции'} values={['вода']} submit={submit}/>
            </div>
        </>
    )

}
export default Filters