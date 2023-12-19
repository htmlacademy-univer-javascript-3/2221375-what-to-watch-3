import { store } from '../store';
import { AuthorizationStatus } from '../const';
import { FilmCardType, SelectedFilmType } from './mainType';
import { FilmReview, SimilarFilm } from './mainType';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  avatarUrl: string | null;
}

export type FilmProcess = {
  films: FilmCardType[];
  filmInfo: SelectedFilmType | null;
  similarFilms: SimilarFilm[];
  isFilmsDataLoading: boolean;
  isFilmInfoLoading: boolean;
  isSimilarFilmsLoading: boolean;
  hasError: boolean;
}

export type GenreProcess = {
  genre: string;
}

export type ReviewProcess = {
  filmReviews: FilmReview;
  isFilmReviewsLoading: boolean;
}
