import { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'
import { remover, editar } from '../../store/reducers/contatos'
import Contato from '../../models/Contato'
import { Botao, BotaoSalvar } from '../../styles'

type Props = Contato

const ContatoCard = ({
  nome: nomeOriginal,
  email: emailOriginal,
  telefone: telefoneOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  useEffect(() => {
    setNome(nomeOriginal)
    setEmail(emailOriginal)
    setTelefone(telefoneOriginal)
  }, [nomeOriginal, emailOriginal, telefoneOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setNome(nomeOriginal)
    setEmail(emailOriginal)
    setTelefone(telefoneOriginal)
  }

  function salvarEdicao() {
    dispatch(
      editar({
        id,
        nome,
        email,
        telefone
      })
    )
    setEstaEditando(false)
  }

  return (
    <S.Card>
      <S.Titulo>{estaEditando ? 'Editando contato' : nomeOriginal}</S.Titulo>

      <S.Descricao
        disabled={!estaEditando}
        value={nome}
        placeholder="Nome completo"
        onChange={(e: ChangeEvent<HTMLInputElement>) => setNome(e.target.value)}
      />
      <S.Descricao
        disabled={!estaEditando}
        value={email}
        placeholder="E-mail"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value)
        }
      />
      <S.Descricao
        disabled={!estaEditando}
        value={telefone}
        placeholder="Telefone"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setTelefone(e.target.value)
        }
      />

      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <BotaoSalvar onClick={salvarEdicao}>Salvar</BotaoSalvar>
            <S.BotaoCancelarRemover onClick={cancelarEdicao}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
            <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default ContatoCard
