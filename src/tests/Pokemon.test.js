import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithoutRouter';
import App from '../App';
import Pokemon from '../components/Pokemon';
import poke from '../data';

describe('Test the <Pokemon.js /> component', () => {
  it('Tests if a Pokemon card is rendered.', () => {
    renderWithRouter(<Pokemon pokemon={ poke[0] } />);
    const pokName = screen.getByText(/Pikachu/i);
    const pokType = screen.getByText(/Electric/i);
    const averageWeight = screen.getByText(/Average weight: 6.0 kg/i);
    const pokFigure = screen.getAllByRole('img')[0].src;
    const srcFigure = 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png';
    const altFigure = screen.getByAltText(/Pikachu sprite/i);
    expect(pokName).toBeInTheDocument();
    expect(pokType).toBeInTheDocument();
    expect(averageWeight).toBeInTheDocument();
    expect(pokFigure).toBe(srcFigure);
    expect(altFigure).toBeInTheDocument();
  });

  test('Testa se o card tem um link de detalhes', () => {
    renderWithRouter(<App />);
    const detailLink = screen.getByRole('link', { name: /More details/i });
    expect(detailLink).toBeInTheDocument();
    expect(detailLink.href).toContain('/pokemons/25');
  });

  it('Tests if there is a star icon in favorite Pokemons.', () => {
    renderWithRouter(<App />);
    const detailsLink = screen.getByText(/More details/i);
    userEvent.click(detailsLink);
    const favoritePoke = screen.getByLabelText(/Pokémon favoritado?/);
    userEvent.click(favoritePoke);
    const starTag = screen.getByRole('img', { name: /Pikachu is marked as favorite/i });
    expect(starTag).toBeInTheDocument();
    expect(starTag.src).toBe('http://localhost/star-icon.svg');
  });
});
