import Page404 from '../../pages/pageNotFound/pageNotFound.tsx';
import Main from '../../pages/Main/Main';
import MoviePage from '../../pages/MoviePage/MoviePage';
import MyList from '../../pages/MyList/MyList';
import Player from '../../pages/Player/Player';
import SignIn from '../../pages/SignIn/SignIn';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from '../private-route/private-route';
import { AppRoute } from '../../const';
import AddReview from '../../pages/Review/Review.tsx';

function App(): JSX.Element {
  return (
    <Routes>
      <Route
        path={AppRoute.Main}
        element={
          <Main />
        }
      />
      <Route
        path={AppRoute.SignIn}
        element={<SignIn />}
      />
      <Route
        path={AppRoute.MyList}
        element={
          <PrivateRoute>
            <MyList />
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
        element={<Player />}
      />
      <Route
        path='*'
        element={<Page404 />}
      />
    </Routes>
  );
}

export default App;
