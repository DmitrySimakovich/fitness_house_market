import {InferValueTypes} from "../ProductList/productList-reducer";

const initialState = {
    count: 0,
    totalAmount: 0,
    aliases: [] as Array<string>
}

const basketReducer = (state: basketStateType = initialState, action: ActionsType): basketStateType => {
    switch (action.type) {
        case "BASKET/ADD-PRODUCT":{
            return {
                ...state,
                count: state.count + 1,
                totalAmount: state.totalAmount + action.payload.price,
                aliases: [...state.aliases, action.payload.alias]
            }
        }

        default:
            return state
    }
}

// ACTION
export const basketAction = {
    addProduct: (price: number, alias: string) => ({type: 'BASKET/ADD-PRODUCT', payload: {price, alias}} as const),
    deleteProduct: (price: number, alias: string) => ({type: 'BASKET/DELETE-PRODUCT', payload: {price, alias}} as const)
}
//THUNKS
export const basketThunk = {}
//TYPES

type basketStateType = typeof initialState
type ActionsType = ReturnType<InferValueTypes<typeof basketAction>>

export default basketReducer