import { createAction } from '@reduxjs/toolkit';
import { FilmCardType } from '../types/mainType';
import { AuthorizationStatus, GenresValues } from './../const';

export const changeGenre = createAction<GenresValues>('genre/changeGenre');
export const getFilms = createAction('movies/get');
export const loadFilms = createAction<FilmCardType[]>('data/loadFilms');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const setError = createAction<string | null>('movies/setError');
export const setFilmsDataLoadingStatus = createAction<boolean>('data/setFilmsDataLoadingStatus');
