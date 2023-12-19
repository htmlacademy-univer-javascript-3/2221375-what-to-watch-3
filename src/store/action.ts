import { createAction } from '@reduxjs/toolkit';
import { FilmCardType, SelectedFilmType } from '../types/mainType';
import { AuthorizationStatus, GenresValues, AppRoute } from './../const';
import { AddReviewFilmType, FilmReview, SimilarFilm } from '../types/mainType';

export const changeGenre = createAction<GenresValues>('genre/changeGenre');
export const getFilms = createAction('movies/get');
export const loadFilms = createAction<FilmCardType[]>('data/loadFilms');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const setError = createAction<string | null>('movies/setError');
export const setFilmsDataLoadingStatus = createAction<boolean>('data/setFilmsDataLoadingStatus');
export const loadAuthorPreview = createAction<string | null>('user/loadAuthorPreview');
export const redirectToRoute = createAction<AppRoute>('data/redirectToRoute');
export const loadFilmInfo = createAction<SelectedFilmType>('data/loadFilmInfo');
export const setFilmInfoDataLoadingStatus = createAction<boolean>('data/setFilmInfoDataLoadingStatus');
export const setFilmReviewData = createAction<FilmReview[]>('data/setFilmReviewDataLoading');
export const setFilmSimilarData = createAction<SimilarFilm[]>('data/setFilmSimilarDataLoading');
export const addFilmReview = createAction<AddReviewFilmType>('data/addFilmReview');
