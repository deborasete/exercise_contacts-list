import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatosState = {
  itens: Contato[]
  termo: string
}

const initialState: ContatosState = {
  itens: [
    new Contato(
      1,
      'Débora Sete Acosta',
      'deborasete@gmail.com',
      '(11) 99999-0000'
    ),
    new Contato(
      2,
      'Maria Consuelo',
      'mariaconsuelo@gmail.com',
      '(11) 98888-0000'
    ),
    new Contato(3, 'João Gael', 'joaogael@gmail.com', '(11) 97777-0000')
  ],
  termo: ''
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const existe = state.itens.some(
        (c) => c.email.toLowerCase() === action.payload.email.toLowerCase()
      )
      if (existe) {
        alert('Já existe um contato com esse e-mail')
      } else {
        const ultimoId =
          state.itens.length > 0 ? state.itens[state.itens.length - 1].id : 0
        const novoContato = new Contato(
          ultimoId + 1,
          action.payload.nome,
          action.payload.email,
          action.payload.telefone
        )
        state.itens.push(novoContato)
      }
    },
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((c) => c.id !== action.payload)
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const index = state.itens.findIndex((c) => c.id === action.payload.id)
      if (index >= 0) {
        state.itens[index] = action.payload
      }
    },
    alterarTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    }
  }
})

export const { cadastrar, remover, editar, alterarTermo } =
  contatosSlice.actions
export default contatosSlice.reducer
