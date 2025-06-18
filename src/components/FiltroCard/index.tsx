import { useSelector } from 'react-redux'
import * as S from './styles'
import { RootState } from '../../store'

export type Props = {
  legenda: string
}

const FiltroCard = ({ legenda }: Props) => {
  const contatos = useSelector((state: RootState) => state.contatos)

  const contador = contatos.itens.length

  return (
    <S.Card $ativo={true}>
      <S.Contador>{contador}</S.Contador>
      <S.Label>{legenda}</S.Label>
    </S.Card>
  )
}

export default FiltroCard
