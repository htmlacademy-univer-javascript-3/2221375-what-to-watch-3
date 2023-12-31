import { render, screen } from '@testing-library/react';
import { makeFakeStore, withHistory, withStore } from '../../services/mocks';
import Main from './Main';
import { SelectedFilmItem } from '../../mocks/films';

describe('MainPage', () => {
  it('renders correctly', () => {
    const { withStoreComponent } = withStore(
      withHistory(<Main />),
      makeFakeStore()
    );
    render(withStoreComponent);

    expect(screen.getByTestId(SelectedFilmItem.backgroundImage)).toBeInTheDocument();
  });
});

