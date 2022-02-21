import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithoutRouter';
import App from '../App';

describe('Test the <Pokedex.js /> component', () => {
  test('Testa se existe uma tagH2', () => {
    renderWithRouter(<App />);
    const heading = screen.getByText(/Encountered pokémons/i);
    expect(heading).toBeInTheDocument();
  });
  test('testa se vai para o proximo pokemon da lista', () => {
    renderWithRouter(<App />);
    const button = screen.getByText('Próximo pokémon');
    expect(button).toBeInTheDocument();
  }); // Aqui testamos duas coisas ao mesmo tempo...dois requisitos bem parecidos (n entendi a diferença)
  test('Testa se é mostrado um pokemon por vez.', () => {
    renderWithRouter(<App />);
    const pokemonsMostrados = screen.getAllByTestId(/pokemon-name/i);
    expect(pokemonsMostrados).toHaveLength(1);
  });
  test('Testa se a Pokédex tem o botão de filtro.', () => {
    renderWithRouter(<App />);
    const typesPokemonsRange = 7; // o número de tipos de pokemons..ou seja...o número de botões
    const pokemonButtons = screen.getAllByTestId(/pokemon-type-button/i);
    expect(pokemonButtons).toHaveLength(typesPokemonsRange);
  });
  test('Testa se tem um filtro por tipo de pokemon.', () => {
    renderWithRouter(<App />);
    const ElectricButton = screen.getAllByRole('button', { name: /electric/i });
    expect(ElectricButton).toHaveLength(1);
    const FireButton = screen.getAllByRole('button', { name: /fire/i });
    expect(FireButton).toHaveLength(1);
    const BugButton = screen.getAllByRole('button', { name: /bug/i });
    expect(BugButton).toHaveLength(1);
    const PoisonButton = screen.getAllByRole('button', { name: /poison/i });
    expect(PoisonButton).toHaveLength(1);
    const PsychicButton = screen.getAllByRole('button', { name: /psychic/i });
    expect(PsychicButton).toHaveLength(1);
    const NormalButton = screen.getAllByRole('button', { name: /normal/i });
    expect(NormalButton).toHaveLength(1);
    const DragonButton = screen.getAllByRole('button', { name: /dragon/i });
    expect(DragonButton).toHaveLength(1);
  });

  test('Testa se a Pokédex tem o botão para resetar o filtro', () => {
    renderWithRouter(<App />);
    const button = screen.getByText('All');
    expect(button).toBeInTheDocument();
    userEvent.click(button);
  });
});
