import {InferValueTypes} from "./store";


const initialState = {
    statusLoading: false
}

const appReducer = (state: AppInitialStateType = initialState, action: appActionsType): AppInitialStateType => {
    switch (action.type) {
        case "APP/SET-STATUS-LOADING":
            return {...state, statusLoading: action.value}
        default:
            return state
    }
}

export const appActions = {
    setStatusLoading: (value: boolean) => ({type: 'APP/SET-STATUS-LOADING', value})
}

export default appReducer

export type appActionsType = ReturnType<InferValueTypes<typeof appActions>>
export type AppInitialStateType = typeof initialState