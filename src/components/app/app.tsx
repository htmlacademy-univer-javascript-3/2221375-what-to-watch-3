import Page404 from '../../pages/404/404-page';
import Main from '../../pages/Main/Main';
import MoviePage from '../../pages/MoviePage/MoviePage';
import MyList from '../../pages/MyList/MyList';
import Player from '../../pages/Player/Player';
import Review from '../../pages/Review/Review';
import SignIn from '../../pages/SignIn/SignIn';
import Card from '../card/card';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateRoute, { AuthorizationStatus } from '../private-route/private-route';

const imgData = [
  { id: '1', imgPath: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg', imgName: 'Fantastic Beasts: The Crimes of Grindelwald' },
  { id: '2', imgPath: 'img/bohemian-rhapsody.jpg', imgName: 'Bohemian Rhapsody' },
  { id: '3', imgPath: 'img/macbeth.jpg', imgName: 'Macbeth' },
  { id: '4', imgPath: 'img/aviator.jpg', imgName: 'Aviator' },
  { id: '5', imgPath: 'img/we-need-to-talk-about-kevin.jpg', imgName: 'We need to talk about Kevin' },
  { id: '6', imgPath: 'img/what-we-do-in-the-shadows.jpg', imgName: 'What We Do in the Shadows' },
  { id: '7', imgPath: 'img/revenant.jpg', imgName: 'Revenant' },
  { id: '8', imgPath: 'img/johnny-english.jpg', imgName: 'Johnny English' },
  { id: '9', imgPath: 'img/shutter-island.jpg', imgName: 'Shutter Island' },
  { id: '10', imgPath: 'img/pulp-fiction.jpg', imgName: 'Pulp Fiction' },
  { id: '11', imgPath: 'img/no-country-for-old-men.jpg', imgName: 'No Country for Old Men' },
  { id: '12', imgPath: 'img/snatch.jpg', imgName: 'Snatch' },
  { id: '13', imgPath: 'img/moonrise-kingdom.jpg', imgName: 'Moonrise Kingdom' },
  { id: '14', imgPath: 'img/seven-years-in-tibet.jpg', imgName: 'Seven Years in Tibet' },
  { id: '15', imgPath: 'img/midnight-special.jpg', imgName: 'Midnight Special' },
  { id: '16', imgPath: 'img/war-of-the-worlds.jpg', imgName: 'War of the Worlds' },
  { id: '17', imgPath: 'img/dardjeeling-limited.jpg', imgName: 'Dardjeeling Limited' },
  { id: '18', imgPath: 'img/orlando.jpg', imgName: 'Orlando' },
  { id: '19', imgPath: 'img/mindhunter.jpg', imgName: 'Mindhunter' },
  { id: '20', imgPath: 'img/midnight-special.jpg', imgName: 'Midnight Special' }
];

type MainData = {
  name: string;
  genre: string;
  dateFilm: string;
};

function App(props: MainData): JSX.Element {
  const Cards: JSX.Element[] = imgData.map((element) =>
    <Card imgPath={element.imgPath} imgName={element.imgName} key={element.id} />
  );
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Main name={props.name} genre={props.genre} dateFilm={props.dateFilm} Cards={Cards} />}
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
              <MyList />
            </PrivateRoute>
          }
        />
        <Route
          path='/films/:id'
          element={<MoviePage imgData={imgData} />}
        />
        <Route
          path='/films/:id/review'
          element={<Review imgData={imgData} />}
        />
        <Route
          path='/player/:id'
          element={<Player imgData={imgData} />}
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
