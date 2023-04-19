import { fireEvent, render, screen } from '@testing-library/react'
import Post from '../../PostComments'

describe('Teste para o componente post', () => {
  test('Deve renderizar corretamente', () => {
    render(<Post />)
    expect(screen.getByText('Comentar'))
  })

  test('Deve renderizar o comentário', () => {
    render(<Post />)
    fireEvent.change(screen.getByTestId('campo-comentario'), {
      target: {
        value: 'Maneiro! Eu sou a escuridão!'
      }
    })
    fireEvent.click(screen.getByTestId('btn-postar'))
    expect(screen.getByText('Maneiro! Eu sou a escuridão!')).toBeInTheDocument()
  })

  test('Deve renderizar outro comentário', () => {
    render(<Post />)
    fireEvent.change(screen.getByTestId('campo-comentario'), {
      target: {
        value: 'Maneiro! Eu sou a velocidade!'
      }
    })
    fireEvent.click(screen.getByTestId('btn-postar'))
    expect(screen.getByText('Maneiro! Eu sou a velocidade!')).toBeInTheDocument()
  })
})