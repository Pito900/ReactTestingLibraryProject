import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithoutRouter';

describe('Testando o componente <PokemonDetails.js />', () => {
  test('Testando se os detalhes dos Pokemons são  renderizados', () => {
    renderWithRouter(<App />);
    const detailsLink = screen.getByRole('link', { name: /more details/i });
    userEvent.click(detailsLink);
    const summaryDetails = screen.getByRole('heading', {
      level: 2,
      name: 'Summary',
    });
    const detailsName = screen.getByRole('heading', {
      leval: 2,
      name: 'Pikachu Details',
    });
    expect(detailsName).toBeInTheDocument();
    expect(summaryDetails).toBeInTheDocument();
    expect(screen.getByText(/roasts hard berries with electricity/i)).toBeInTheDocument();
  });
  test('Testa se tem um local, nos detalhes, para os mapas.', () => {
    renderWithRouter(<App />);
    const detailsLink = screen.getByRole('link', { name: /more details/i });
    userEvent.click(detailsLink);
    const locText = screen.getByRole('heading', {
      level: 2,
      name: 'Game Locations of Pikachu',
    });
    const figure = screen.getAllByRole('img')[1];
    expect(locText).toBeInTheDocument();
    expect(figure.src).toBe('https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');
    expect(figure.alt).toBe('Pikachu location');
  });

  test('Testa se podemos favoritar da página de detalhes.', () => {
    renderWithRouter(<App />);
    const detailsLink = screen.getByRole('link', { name: /more details/i });
    userEvent.click(detailsLink);
    const favoritar = screen.getByText('Pokémon favoritado?');
    expect(favoritar).toBeInTheDocument();
  });
});
