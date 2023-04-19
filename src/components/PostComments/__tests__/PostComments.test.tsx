import { fireEvent, render, screen } from '@testing-library/react'
import Post from '../../PostComments'

describe('Teste para o componente post', () => {
  beforeEach(() => {
    render(<Post />)
  })
  
  test('Deve renderizar corretamente', () => {
    expect(screen.getByText('Comentar'))
  })

  test('Deve renderizar o comentário', () => {
    fireEvent.change(screen.getByTestId('campo-comentario'), {
      target: {
        value: 'Maneiro! Eu sou a escuridão!'
      }
    })
    fireEvent.click(screen.getByTestId('btn-postar'))
    expect(screen.getByText('Maneiro! Eu sou a escuridão!')).toBeInTheDocument()
  })

  test('Deve renderizar outro comentário', () => {
    fireEvent.change(screen.getByTestId('campo-comentario'), {
      target: {
        value: 'Maneiro! Eu sou a velocidade!'
      }
    })
    fireEvent.click(screen.getByTestId('btn-postar'))
    expect(screen.getByText('Maneiro! Eu sou a velocidade!')).toBeInTheDocument()
  })
})