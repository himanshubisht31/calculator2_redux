import { ADD_COUNT, SUB_COUNT, MUL, DIV } from "./actionTypes"


export const reducerFun = (state, { type, payload }) => {
    
    switch (type) {
        
        case ADD_COUNT:
            return {
                ...state,
                counter:state.counter+payload
            }
        
        case SUB_COUNT:
            return {
                ...state,
                counter:state.counter-payload
            }
        
        case MUL:
            return {
                ...state,
                counter:state.counter*payload
            }
        
        case DIV:
            return {
                ...state,
                counter:payload?state.counter/payload:'ERROR'
            }
        
        default:
            return  {...state}
    }
    
}