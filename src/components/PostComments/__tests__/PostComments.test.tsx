import { fireEvent, render, screen } from '@testing-library/react'
import Post from '../../PostComments'

describe('Teste para o componente post', () => {
  test('Deve renderizar corretamente', () => {
    render(<Post />)
    expect(screen.getByText('Comentar'))
  })

  test('Deve renderizar comentário', () => {
    render(<Post />)
    fireEvent.change(screen.getByTestId('campo-comentario'), {
      target: {
        value: 'Maneiro! Eu sou a escuridão!'
      }
    })
    fireEvent.click(screen.getByTestId('btn-postar'))
    expect(screen.getByText('Maneiro! Eu sou a escuridão!')).toBeInTheDocument()
  })
})