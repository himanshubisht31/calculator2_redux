import {createStore} from 'redux'
import { reducerFun } from './reducer'


const initState = {
    counter:0
}

export const store = createStore(reducerFun, initState)
