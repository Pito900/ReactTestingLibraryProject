import React from 'react';
import { screen } from '@testing-library/react';
import About from '../components/About';
import renderWithRouter from '../renderWithoutRouter';

describe('Testando o componente <About.js />', () => {
  test('Testa se nesta página existe um resumo sobre a Pokédex.', () => {
    renderWithRouter(<About />);
    const aboutOne = screen.getByText(/This application simulates a Poké/i);
    const aboutTwo = screen.getByText(/One can filter Pokém/i);
    expect(aboutOne).toBeInTheDocument();
    expect(aboutTwo).toBeInTheDocument();
  });
  test('Testando o componente <About.js /> tem um h2 com o texto About Pokédex.', () => {
    renderWithRouter(<About />);
    const tagH2 = screen.getByRole('heading', {
      name: /About Pokédex/i,
      level: 2, // aqui é o nível da tag H que queremos testar.
    });
    expect(tagH2).toBeInTheDocument();
  });

  test('Testando o componente <About.js /> existem dois parágrados.', () => {
    renderWithRouter(<About />);
    const textOne = screen.getByText(/This application simulates a Poké/i);
    const textTwo = screen.getByText(/One can filter Pokém/i);
    expect(textOne).toBeInTheDocument();
    expect(textTwo).toBeInTheDocument();
  });
  test('Testando o componente <About.js /> tem a imagem de uma Pokédex.', () => {
    renderWithRouter(<About />);
    const figure = screen.getByRole('img');
    expect(figure).toBeInTheDocument();
    expect(figure).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
