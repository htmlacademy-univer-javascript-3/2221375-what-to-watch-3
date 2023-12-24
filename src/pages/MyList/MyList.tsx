import FilmList from '../../components/film-list/film-list';
import { AppRoute } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getMyList, getMyListLoadStatus } from '../../store/film-process/selectors';
import { useEffect } from 'react';
import { fetchMyList, logoutAction } from '../../store/api-actions';
import Loader from '../../components/loader/loader';
import Footer from '../../components/main-element-nav/footer/footer';
import { Link } from 'react-router-dom';
import { getAuthorAvatar } from '../../store/user-process/selectors';

function MyList(): JSX.Element {
  const filmList = useAppSelector(getMyList);
  const listLoadingStatus = useAppSelector(getMyListLoadStatus);
  const authorAvatar = useAppSelector(getAuthorAvatar);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchMyList());
  }, [dispatch]);

  if (listLoadingStatus) {
    return <Loader />;
  }

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Link to={AppRoute.Main} className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{filmList.length}</span></h1>
        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src={authorAvatar ? authorAvatar : ''} alt="User avatar" width="63" height="63" />
            </div>
          </li>
          <li onClick={() => {
            dispatch(logoutAction());
          }} className="user-block__item"
          >
            <a className="user-block__link">Sign out</a>
          </li>
        </ul>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmList filmsSection={filmList.length} filmsList={filmList} />
      </section >

      <Footer />
    </div >
  );
}

export default MyList;
