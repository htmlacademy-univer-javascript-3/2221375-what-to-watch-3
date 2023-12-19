import Page404 from '../../pages/pageNotFound/pageNotFound.tsx';
import Main from '../../pages/Main/Main';
import MoviePage from '../../pages/MoviePage/MoviePage';
import MyList from '../../pages/MyList/MyList';
import Player from '../../pages/Player/Player';
import SignIn from '../../pages/SignIn/SignIn';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from '../private-route/private-route';
import { AppRoute, AuthorizationStatus } from '../../const';
import { FilmCardType, SelectedFilmType } from '../../types/mainType';
import AddReview from '../../pages/MoviePage/AddReview/addReview';
import { useAppSelector } from '../../hooks/index.ts';
import Spinner from '../spinner/spinner.tsx';
import HistoryRouter from '../historyRouter/historyRouter.tsx';
import { browserHistory } from '../../browserHistory.ts';

type AppProps = {
  CardsFilm: Array<FilmCardType>;
  SelectedFilmItem: SelectedFilmType;
  video: string;
}

function App(props: AppProps): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.AuthorizationStatus);

  if (authorizationStatus === AuthorizationStatus.Unknown) {
    return <Spinner />;
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={
            <Main SelectedFilmItem={props.SelectedFilmItem} />
          }
        />
        <Route
          path={AppRoute.SignIn}
          element={<SignIn />}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute
              authorizationStatus={authorizationStatus}
            >
              <MyList CardsFilm={props.CardsFilm} />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Film}
          element={<MoviePage />}
        />
        <Route
          path={AppRoute.AddReview}
          element={<AddReview />}
        />
        <Route
          path={AppRoute.Player}
          element={<Player video={props.video} />}
        />
        <Route
          path='*'
          element={<Page404 />}
        />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
