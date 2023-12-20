import SelectedFilm from '../../components/selectedFilm/selectedFilm';
import Header from '../../components/header/header';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { Genres } from '../../const';
import { getFilms, getPromoFilm, getPromoFilmLoadStatus } from '../../store/filmProcess/selectors';
import FilmCatalog from '../../components/filmCatalog/filmCatalog';
import Spinner from '../../components/spinner/spinner';
import { useEffect } from 'react';
import { fetchPromoFilm } from '../../store/apiActions';
import Footer from '../../components/footer/footer';


function Main(): JSX.Element {
  const filmsList = useAppSelector(getFilms);
  const genres = [...new Set(filmsList.map((film) => film.genre))].sort();
  genres.unshift(Genres.All);
  const isPromoFilmLoading = useAppSelector(getPromoFilmLoadStatus);
  const promoFilm = useAppSelector(getPromoFilm);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPromoFilm());
  }, [dispatch]);

  if (isPromoFilmLoading || !promoFilm) {
    return <Spinner />;
  }

  return (
    <main>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={promoFilm.backgroundImage} alt={promoFilm.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header />
        {<SelectedFilm isFavorite={promoFilm.isFavorite} name={promoFilm.name} genre={promoFilm.genre} posterImage={promoFilm.posterImage} dateFilm={promoFilm.released} id={promoFilm.id} />}
      </section>

      <div className="page-content">
        <FilmCatalog />

        <Footer />
      </div>
    </main >
  );
}

export default Main;
