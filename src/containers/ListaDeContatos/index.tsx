import { useSelector } from 'react-redux'
import ContatoCard from '../../components/ContatoCard'
import { MainContainer, Titulo } from '../../styles'
import { RootState } from '../../store'

const ListaDeContatos = () => {
  const { itens, termo } = useSelector((state: RootState) => state.contatos)

  // Filtra contatos pelo termo (nome ou email)
  const contatosFiltrados = itens.filter(
    (contato) =>
      contato.nome.toLowerCase().includes(termo.toLowerCase()) ||
      contato.email.toLowerCase().includes(termo.toLowerCase())
  )

  return (
    <MainContainer>
      <Titulo>Contatos</Titulo>
      {contatosFiltrados.length === 0 && <p>Nenhum contato encontrado</p>}
      <ul>
        {contatosFiltrados.map((contato) => (
          <li key={contato.id}>
            <ContatoCard {...contato} />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ListaDeContatos
