import {InferValueTypes} from "../../App/store"


const initialState = {
    activeFilter: [] as Array<filterType>,
}

const filterReducer = (state: filtersStateType = initialState, action: filterActionType): filtersStateType => {
    switch (action.type) {
        case "FILTERS/ADD-FILTER": {
            if (state.activeFilter.find(fl => fl.title === action.payload.title)) {
                return {
                    ...state,
                    activeFilter: state.activeFilter.map(fl => {
                        if (fl.title === action.payload.title) {
                            return {...fl, value: action.payload.value}
                        } else {
                            return fl
                        }
                    })
                }
            } else {
                return {
                    ...state,
                    activeFilter: [...state.activeFilter, action.payload]
                }
            }
        }
        case "FILTERS/DELETE-FILTER": {
            return {
                ...state,
                activeFilter: state.activeFilter.filter(item => item.title !== action.payload)
            }
        }
        default:
            return state
    }

}


//ACTIONS
export const filterActions = {
    addFilter: (title: string, value: string) => ({type: 'FILTERS/ADD-FILTER', payload: {title, value}} as const),
    deleteFilter: (title: string) => ({type: 'FILTERS/DELETE-FILTER', payload: title} as const),
}

//TYPES
export type filterType = {
    title: string
    value: string
}
export type filterAlias = 'Количество занятий' | 'Срок действия' | 'Категория тренера' | 'Время посещения' | 'Тип секции'

type filtersStateType = typeof initialState
type filterActionType = ReturnType<InferValueTypes<typeof filterActions>>

export default filterReducer