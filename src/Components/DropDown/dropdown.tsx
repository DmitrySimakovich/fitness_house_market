import React, {FC, useState} from 'react';
import arrow from '../../assets/left-arrow.png';
import style from './dropDown.module.css';

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
            <div>{value}</div>
            {
                isOpen ?
                    <div className={style.arrow_box}><img src={arrow} className={style.arrow_up}/></div>
                    :
                    <div className={style.arrow_box}><img src={arrow} className={style.arrow_down}/></div>
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