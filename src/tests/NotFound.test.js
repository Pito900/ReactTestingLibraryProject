import React from 'react';
import { screen } from '@testing-library/react';
import NotFound from '../components/NotFound';
import renderWithRouter from '../renderWithoutRouter';

describe('Testando o componente <NotFound.js />', () => { // Fiz esse bem parecido com os requisitos anteriores.
  test('Testando o componente <NotFound /> tem um h2', () => {
    renderWithRouter(<NotFound />);
    const tagH2 = screen.getByRole('heading', {
      name: /Page requested not found/i,
      level: 2, // aqui é o nível da tag H que queremos testar.
    });
    expect(tagH2).toBeInTheDocument();
  });
  test('Testando o componente <NotFound.js /> tem a imagem.', () => {
    renderWithRouter(<NotFound />);
    const figure = screen.getByAltText(/ /i); // no git passado n tem nds no alt text. Dai coloquei vazio.
    expect(figure).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
