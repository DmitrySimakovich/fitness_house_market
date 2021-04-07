
import {Dispatch} from "redux";

import {AppRootStateType, InferValueTypes} from "../../App/store";

const initialState = {
    count: 0,
    totalAmount: 0,
    aliases: [] as Array<itemsInBasket>
}

const basketReducer = (state: basketStateType = initialState, action: ActionsType): basketStateType => {
    switch (action.type) {
        case "BASKET/ADD-PRODUCT": {
            return {
                ...state,
                count: state.count + 1,
                totalAmount: state.totalAmount + action.payload.price,
                aliases: state.aliases.map(al => al.alias === action.payload.alias ? {
                    ...al,
                    value: al.value + 1
                } : {...al})
            }
        }
        case "BASKET/ADD-NEW-PRODUCT":{
            return {
                ...state,
                count: state.count+1,
                totalAmount: state.totalAmount + action.payload.price,
                aliases: [...state.aliases, {alias: action.payload.alias, value: 1}]
            }
        }
        default:
            return state
    }
}

// ACTION
export const basketAction = {
    addProduct: (alias: string, price: number) => ({type: 'BASKET/ADD-PRODUCT', payload: {price, alias}} as const),

    addNewProduct: (alias: string, price: number) => ({type: 'BASKET/ADD-NEW-PRODUCT', payload: {alias, price}} as const),
}
//THUNKS
export const basketThunk = {
    addProductThunk: (alias: string, price: number) => (dispatch: Dispatch, getState: () => AppRootStateType) => {
        const state = getState().basket

        if (state.aliases.filter(al => al.alias === alias).length) {
            dispatch(basketAction.addProduct(alias, price))
        } else {
            dispatch(basketAction.addNewProduct(alias, price))
        }
    },
}

//TYPES
type basketStateType = typeof initialState
type ActionsType = ReturnType<InferValueTypes<typeof basketAction>>
export type itemsInBasket = {
    alias: string
    value: number
}


export default basketReducer