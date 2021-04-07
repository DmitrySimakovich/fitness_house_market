import React, {FC, useState} from 'react';

/* Style */
import style from './dropDown.module.scss';

type propsType = {
    submit: (title: string, value?: string) => void
    values: Array<string>
    title: string
}

const DropDown: FC<propsType> = (props) => {

    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [value, setValue] = useState<string>(props.title)

    const handlerSubmit = (title: string, value?: string) => {
        props.submit(title, value)
    }

    return <>
        <div onClick={() => setIsOpen((prevState) => (!prevState))}
            className={`${style.dropDown_title} ${isOpen ? style.dropDown_title_open : null}`}>
            <h3>{value}</h3>
            {
                isOpen ?
                    <span className={`${style.arrow_box}`}></span>
                    :
                    <span className={`${style.arrow_box} ${style.arrow_box__down}`}></span>
            }
        </div>
        {
            isOpen ?
                <div className={style.filter_box}>
                    <ul className={style.filter_box_ul}>
                        {
                            props.values.map(vl => <li className={style.filter_box_li} key={vl} onClick={() => {
                                setIsOpen(false)
                                setValue(vl)
                                handlerSubmit(props.title, vl)
                            }}>{vl}</li>)
                        }
                        <li onClick={() => {
                            setIsOpen(false)
                            setValue(props.title)
                            handlerSubmit(props.title)
                        }}>{props.title}</li>
                    </ul>
                </div> : null
        }
    </>
}
export default DropDown