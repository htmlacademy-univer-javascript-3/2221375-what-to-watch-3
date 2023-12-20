export type FilmPreview = {
    id: string;
    previewImage: string;
    name: string;
    genre: string;
    previewVideoLink: string;
};

export type ChangeFilmStatus = {
    id: string;
    status: number;
}

export type PromoFilm = {
    id: string;
    name: string;
    posterImage: string;
    backgroundImage: string;
    backgroundColor: string;
    videoLink: string;
    description: string;
    rating: number;
    scoresCount: number;
    director: string;
    starring: Array<string>;
    runTime: number;
    genre: string;
    released: number;
    isFavorite?: boolean;
}

export type AddReviewFilm = {
    id: string;
    rating: number;
    comment: string;
};

export type SeeReviewFilm = {
    id: string;
    date: string;
    user: string;
    comment: string;
    rating: number;
}

export type SimilarFilm = {
    id: string;
    name: string;
    previewImage: string;
    previewVideoLink: string;
    genre: string;
}

export type FilmReview = {
    id: string;
    date: string;
    user: string;
    comment: string;
    rating: number;
}[]
