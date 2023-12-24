import SelectedFilm from '../../components/selected-film/selected-film';
import Header from '../../components/main-element-nav/header/header';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { Genres } from '../../const';
import { getFilms, getPromoFilm, getPromoFilmLoadStatus, getMyList } from '../../store/film-process/selectors';
import FilmCatalog from '../../components/film-catalog/film-catalog';
import Loader from '../../components/loader/loader';
import { useEffect } from 'react';
import { fetchPromoFilm, fetchMyList } from '../../store/api-actions';
import Footer from '../../components/main-element-nav/footer/footer';


function Main(): JSX.Element {
  const filmsList = useAppSelector(getFilms);
  const genres = [...new Set(filmsList.map((film) => film.genre))].sort();
  genres.unshift(Genres.All);
  const isPromoFilmLoading = useAppSelector(getPromoFilmLoadStatus);
  const promoFilm = useAppSelector(getPromoFilm);
  const myList = useAppSelector(getMyList);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPromoFilm());
    dispatch(fetchMyList());
  }, [dispatch]);

  if (isPromoFilmLoading || !promoFilm) {
    return <Loader />;
  }

  return (
    <main>
      <section className="film-card">
        <div className="film-card__bg">
          <img
            data-testid={`${promoFilm.backgroundImage}`}
            src={promoFilm.backgroundImage}
            alt={promoFilm.name}
          />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header />
        {
          <SelectedFilm
            myListLength={myList.length}
            isFavorite={promoFilm.isFavorite}
            name={promoFilm.name}
            genre={promoFilm.genre}
            posterImage={promoFilm.posterImage}
            dateFilm={promoFilm.released}
            id={promoFilm.id}
          />
        }
      </section>

      <div className="page-content">
        <FilmCatalog />
        <Footer />
      </div>
    </main >
  );
}

export default Main;
