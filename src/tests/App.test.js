import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithoutRouter';

describe('Testando o componente <App.js />', () => {
  test('Verificando se os links, de navegação, estão sendo renderizados', () => {
    renderWithRouter(<App />);
    const linkAppHome = screen.getByRole(('link'), { name: /home/i });
    const linkAppAbout = screen.getByRole(('link'), { name: /about/i });
    const linkAppFavorite = screen.getByRole(('link'), { name: /Favorite Pokémons/i });
    expect(linkAppHome).toBeInTheDocument();
    expect(linkAppAbout).toBeInTheDocument();
    expect(linkAppFavorite).toBeInTheDocument();
  });

  test('Verificando se ao clicar no link Home, o app volta para a URL /', () => {
    const { history } = renderWithRouter(<App />);
    const linkAppHome = screen.getByRole(('link'), { name: /home/i });
    userEvent.click(linkAppHome);
    expect(history.location.pathname).toBe('/'); // dentro do history tem o location e dentro do location tem o pathname. Daii, queremos ver se o pathname, quando clicar no link é igual a /.
  });
  test('Verifica, se ao clicar no Favorites, o app vai para a URL /favorites', () => {
    const { history } = renderWithRouter(<App />);
    const linkAppFavorite = screen.getByRole(('link'), { name: 'Favorite Pokémons' });
    userEvent.click(linkAppFavorite);
    expect(history.location.pathname).toBe('/favorites');
  });
  test('Verifica, se caso a URL ão exista, o app para a página NotFound', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/notfound'); // Esse path está na pasta componente. Dai só coloquei ele no history para podermos acessar na proxima linha.
    const notFoundImage = screen.getByText(/page requested not found/i);
    expect(notFoundImage).toBeInTheDocument();
  });
});
