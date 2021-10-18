import { ADD_COUNT, SUB_COUNT, MUL,DIV } from "./actionTypes"

export const addCount = (data) => {
   return { type: ADD_COUNT,payload:data}
}

export const subCount = (data) => {
    return { type: SUB_COUNT,payload:data}
}

export const multiply = (data) => {
    return { type: MUL,payload:data}
}

export const division = (data) => {
    return { type: DIV,payload:data}
}