import React, {FC, useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";

/*BLL*/
import {filterActions, filterAlias, filterType} from "./filter-reducer";

/* Components*/
import DropDown from '../../Components/DropDown/dropdown';

/* Types */
import {AppRootStateType} from "../../App/store";

/*Style*/

const Filters: FC = () => {

    const dropDowns = [
        {
            title: 'Количество занятий',
            values: ['100 занятий', '18 занятий', '36 занятий', 'разовое посещение']
        },
        {
            title: 'Срок действия',
            values: ['1 месяц', '6 месяцев', '1 год']
        },
        {
            title: 'Категория тренера',
            values: ['мастер', 'профи']
        },
        {
            title: 'Время посещения',
            values: ['утро', 'вечер']
        },
        {
            title: 'Тип секции',
            values: ['вода']
        },
    ]

    const dispatch = useDispatch()
    const activeFilters = useSelector<AppRootStateType, Array<filterType>>(state => state.filters.activeFilter)


    const submit = useCallback((title: string, value?: string) => {
        if (value) {
            dispatch(filterActions.addFilter(title, value))
        } else {
            dispatch(filterActions.deleteFilter(title))
        }
    }, [])


    return (<>
            {
                dropDowns.map(dd => {
                    const isActive = activeFilters.find(fl => fl.title === dd.title)

                    return (
                        <DropDown title={dd.title}
                                  values={dd.values}
                                  activeValue={isActive ? isActive.value : undefined}
                                  submit={submit}/>
                    )
                })
            }
        </>
    )

}


export default Filters