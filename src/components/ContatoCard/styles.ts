import styled from 'styled-components'

export const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 12px 20px;
  margin-bottom: 12px;
  background: #f9f9f9;
`

export const Titulo = styled.h2`
  font-size: 18px;
  margin-bottom: 8px;
  color: #333;
`

export const Descricao = styled.input`
  display: block;
  width: 100%;
  padding: 8px;
  font-size: 14px;
  margin-bottom: 8px;
  border: 1px solid #bbb;
  border-radius: 4px;

  &:disabled {
    background-color: #eee;
    color: #666;
  }
`

export const BarraAcoes = styled.div`
  display: flex;
  gap: 8px;
`

export const BotaoCancelarRemover = styled.button`
  background: transparent;
  border: none;
  color: #d9534f;
  cursor: pointer;
  font-weight: bold;
`
