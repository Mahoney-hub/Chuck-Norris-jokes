import {combineReducers, configureStore} from '@reduxjs/toolkit';
import userReducer from './reducers/UserSlice';

// Для объединения всех рудьюсеров в один в Redux по умолчанию используют combineReducers
// В Redux Toolkit можно использовать просто объект

const rootReducer = combineReducers({
    userReducer
})

// Функция в которой мы будем конфигурировать наше Redux хранилище
// Без использования Toolkit мы использовали функцию createStore()
// В Toolkit используем функцию configureStore()
export const setupStore = () => {
    return  configureStore({
        reducer: rootReducer
    })
}

// Тип из reducer
export type RootState = ReturnType<typeof rootReducer>
// Получим Тип самого store
export type AppStore = ReturnType<typeof setupStore>
// Получим Тип Dispatch нашего хранилища
export type AppDispatch = AppStore['dispatch']






