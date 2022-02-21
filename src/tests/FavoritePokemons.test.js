import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FavoritePokemons from '../components/FavoritePokemons';
import App from '../App';
import renderWithRouter from '../renderWithoutRouter';

describe('Testando o componente <FavoritePokemons.js />', () => {
  test('Teste se é exibido na tela a mensagem No favorite pokemon found, ...', () => {
    renderWithRouter(<FavoritePokemons />);
    const pokemonFav = screen.getByText(/no favorite pokemon found/i);
    expect(pokemonFav).toBeInTheDocument();
  });
  test('Testa se os os pokemons favoritados são listados em <FavoritePokemons />', () => {
    renderWithRouter(<App />);
    const PokemonsDet = screen.getByRole('link', { name: /More details/i });
    userEvent.click(PokemonsDet); // entramos no link para ver os detalhes
    const favCheckBox = screen.getByRole('checkbox', { name: /Pokémon favoritado/i });
    userEvent.click(favCheckBox);
    const favPokemons = screen.getByRole('link', { name: /Favorite Pokémons/i });
    userEvent.click(favPokemons);
    const PokemonPeso = screen.getByText(/Average weight/i);
    expect(PokemonPeso).toBeInTheDocument();
  });
});
