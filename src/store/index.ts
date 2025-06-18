import { configureStore } from '@reduxjs/toolkit'
import contatosReducer from './reducers/contatos'
import filtroReducer from './reducers/filtro'

export const store = configureStore({
  reducer: {
    contatos: contatosReducer,
    filtro: filtroReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
