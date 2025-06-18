import { useDispatch, useSelector } from 'react-redux'
import { alterarTermo } from '../../store/reducers/contatos'
import { RootState } from '../../store'
import { Botao, Campo } from '../../styles'
import { useNavigate } from 'react-router-dom'
import * as S from './styles'

type Props = {
  mostrarFiltros: boolean
}

const BarraLateral = ({ mostrarFiltros }: Props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const termo = useSelector((state: RootState) => state.contatos.termo)

  return (
    <S.Aside>
      <div>
        {mostrarFiltros ? (
          <>
            <Campo
              type="text"
              placeholder="Buscar contatos por nome ou e-mail"
              value={termo}
              onChange={(e) => dispatch(alterarTermo(e.target.value))}
            />
          </>
        ) : (
          <Botao onClick={() => navigate('/')}>
            Voltar à lista de contatos
          </Botao>
        )}
      </div>
    </S.Aside>
  )
}

export default BarraLateral
