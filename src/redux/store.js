import {combineReducers, configureStore} from '@reduxjs/toolkit'
import UserSlice from './UserSlice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import MovieSlice from './MovieSlice'
import MenuSlice from './MenuSlice'

const reducer = combineReducers({
    UserSlice,
    MovieSlice
})

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, reducer)

const store = configureStore({
    reducer: {
        persistedReducer,
        MenuSlice
    }
})

export const persistor = persistStore(store)
export default store