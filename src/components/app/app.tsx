import Page404 from '../../pages/404/404-page';
import Main from '../../pages/Main/Main';
import MoviePage from '../../pages/MoviePage/MoviePage';
import MyList from '../../pages/MyList/MyList';
import Player from '../../pages/Player/Player';
import SignIn from '../../pages/SignIn/SignIn';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateRoute, { AuthorizationStatus } from '../private-route/private-route';
import { FilmCardType, SelectedFilmType } from '../../type/mainType';
import { SeeReviewFilmType, AddReviewFilmType } from '../../type/mainType';
import AddReview from '../../pages/MoviePage/AddReview/addReview';

type AppProps = {
  CardsFilm: Array<FilmCardType>;
  selectedFilm: SelectedFilmType;
  SelectedFilmItem: SelectedFilmType;
  seeReviewsFilm: Array<SeeReviewFilmType>;
  reviewFilm: AddReviewFilmType;
  video: string;
}

function App(props: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <Main CardsFilm={props.CardsFilm} SelectedFilmItem={props.SelectedFilmItem} />
          }
        />
        <Route
          path='/login'
          element={<SignIn />}
        />
        <Route
          path='/mylist'
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <MyList CardsFilm={props.CardsFilm} />
            </PrivateRoute>
          }
        />
        <Route
          path='/films/:id'
          element={<MoviePage selectedFilm={props.selectedFilm} seeReviewsFilm={props.seeReviewsFilm} />}
        />
        <Route
          path='/films/:id/review'
          element={<AddReview reviewFilm={props.reviewFilm} />}
        />
        <Route
          path='/player/:id'
          element={<Player video={props.video} />}
        />
        <Route
          path='*'
          element={<Page404 />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
