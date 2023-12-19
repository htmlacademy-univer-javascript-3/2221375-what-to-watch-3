import { createReducer } from '@reduxjs/toolkit';
import { changeGenre, loadAuthorPreview, setError, loadFilmInfo, loadFilms, requireAuthorization, setFilmInfoDataLoadingStatus, setFilmReviewData, setFilmSimilarData, setFilmsDataLoadingStatus } from './action';
import { FilmCardType, SelectedFilmType } from '../types/mainType';
import { AuthorizationStatus, Genres } from '../const';
import { FilmReview, SimilarFilm } from '../types/mainType';

type InitialState = {
  filmInfo: SelectedFilmType | null;
  filmReviews: FilmReview[];
  similarFilms: SimilarFilm[];
  genre: string;
  films: FilmCardType[];
  AuthorizationStatus: AuthorizationStatus;
  error: string | null;
  authorPreview: string | null;
  isFilmsDataLoading: boolean;
  isFilmInfoLoading: boolean;
}

const initialState: InitialState = {
  genre: Genres.All,
  films: [],
  filmInfo: null,
  filmReviews: [],
  similarFilms: [],
  AuthorizationStatus: AuthorizationStatus.Unknown,
  isFilmsDataLoading: false,
  error: null,
  authorPreview: null,
  isFilmInfoLoading: false
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      const { payload } = action;
      state.genre = payload;
    })
    .addCase(loadFilms, (state, action) => {
      const { payload } = action;
      state.films = payload;
    })
    .addCase(loadFilmInfo, (state, action) =>{
      state.filmInfo = action.payload;
    })
    .addCase(setFilmsDataLoadingStatus, (state, action) => {
      const { payload } = action;
      state.isFilmsDataLoading = payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      const { payload } = action;
      state.AuthorizationStatus = payload;
    })
    .addCase(setFilmInfoDataLoadingStatus, (state, action) => {
      state.isFilmInfoLoading = action.payload;
    })
    .addCase(setFilmReviewData, (state, action) =>{
      state.filmReviews = action.payload;
    })
    .addCase(setFilmSimilarData, (state, action) =>{
      state.similarFilms = action.payload;
    })
    .addCase(loadAuthorPreview, (state, action) => {
      const { payload } = action;
      state.authorPreview = payload;
    })
    .addCase(setError, (state, action) => {
      const { payload } = action;
      state.error = payload;
    });
});
