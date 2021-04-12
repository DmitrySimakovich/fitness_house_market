import React, {FC, useEffect, useState} from 'react';

/* Style */
import style from './dropDown.module.scss';

type propsType = {
    submit: (title: string, value?: string) => void
    values: Array<string>
    title: string
    activeValue?: string
}

const DropDown: FC<propsType> = (props) => {

    useEffect(() => {
        if (props.activeValue) {
            setValue(props.activeValue)
        }
    }, [])

    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [value, setValue] = useState<string>(props.title)

    const callBackSubmit = (title: string, value?: string) => {
        props.submit(title, value)
    }

    const handleBlur = () => {
        if (isOpen) {
            setTimeout(() => {
                setIsOpen(false)
            }, 100)
        }
    }
    const handleClickItem = (title: string, vl?: string) => {
        callBackSubmit(props.title, vl)
        if (isOpen) {
            setTimeout(() => {
                if (vl) {
                    setValue(vl)
                } else {
                    setValue(title)
                }
            }, 0)
        }
        setIsOpen(false)

    }

    return <div className={style.item_wrap}>
        <div tabIndex={0}
             onClick={() => setIsOpen((prevState) => (!prevState))}
             onBlur={handleBlur}
             className={`${style.dropDown_title} ${isOpen ? style.dropDown_title_open : null}`}>
            <h3>{value}</h3>
            {
                isOpen ?
                    <span className={`${style.arrow_box}`}></span>
                    :
                    <span className={`${style.arrow_box} ${style.arrow_box__down}`}></span>
            }
        </div>

        <div className={`${style.filter_box}`} hidden={!isOpen}>
            <ul className={`${style.filter_box_ul} ${isOpen ? style.filter_box_ul__open:style.filter_box_ul__close}`}>
                {
                    props.values.map(vl => <li className={style.filter_box_li}
                                               key={vl}
                                               onClick={() => handleClickItem(props.title, vl)}>{vl}</li>)
                }
                <li onClick={() => handleClickItem(props.title)}>{props.title}</li>
            </ul>
        </div>
    </div>
}
export default DropDown