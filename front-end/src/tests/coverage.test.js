import { screen, render } from '@testing-library/react';
import App from '../App'

describe('testa se tem cobertura', () => {
  test('verifica se tem o inpout cep', () => {

    render(<App />)
    const cep = screen.getAllByTestId('cep')
    expect(cep).toBeinTheDocument();
  })
})