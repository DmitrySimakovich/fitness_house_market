import { InferValueTypes } from "../../App/store"


const initialState = [] as Array<filterType>

const filterReducer = (state: filtersStateType = initialState, action: filterActionType): filtersStateType => {
    switch (action.type) {
        case "FILTERS/ADD-FILTER": {
            if (state.find( fl => fl.title === action.payload.title )) {
                return [
                    ...state.map( fl => {
                        if (fl.title=== action.payload.title) {
                            return {...fl, value: action.payload.value}
                        } else {
                            return fl
                        }
                    })
                ]
            } else {
                return [
                    ...state,
                    action.payload
                ]
            }
        }
        case "FILTERS/DELETE-FILTER": {
            return [
                ...state.filter( item => item.title !== action.payload)
            ]
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
type filtersStateType = typeof initialState
type filterActionType = ReturnType<InferValueTypes<typeof filterActions>>

export default filterReducer