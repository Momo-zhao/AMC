import {combineReducers, createStore} from 'redux'
import UserStore from "./store";

// 合并多个reducer
const reducers = combineReducers(
    {resultInfo: UserStore.reducer}
)

// 创建store
const store = createStore(reducers)

export {store}