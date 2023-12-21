import { store } from '../store';
import { AuthorizationStatus } from '../const';
import { FilmPreview, PromoFilm } from './mainType';
import { FilmReview, SimilarFilm } from './mainType';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  avatarUrl: string | null;
}

export type FilmProcess = {
  films: FilmPreview[];
  filmInfo: PromoFilm | null;
  similarFilms: SimilarFilm[];
  promoFilm: PromoFilm | null;
  myList: FilmPreview[];
  isFilmsDataLoading: boolean;
  isFilmInfoLoading: boolean;
  isPromoFilmLoading: boolean;
  isMyListLoading: boolean;
  isSimilarFilmsLoading: boolean;
}

export type GenreProcess = {
  genre: string;
}

export type ReviewProcess = {
  filmReviews: FilmReview;
  isFilmReviewsLoading: boolean;
}
