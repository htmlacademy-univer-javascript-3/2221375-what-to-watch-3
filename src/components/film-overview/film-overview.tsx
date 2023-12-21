import { PromoFilm } from '../../types/mainType';

type FilmOverviewType = {
  film: PromoFilm;
}

export default function FilmOverview({ film }: FilmOverviewType): JSX.Element {
  const getRating = () => {
    if (film.rating >= 0 && film.rating < 3) {
      return 'Bad';
    } else if (film.rating >= 3 && film.rating < 5) {
      return 'Normal';
    } else if (film.rating >= 5 && film.rating < 8) {
      return 'Good';
    } else if (film.rating >= 8 && film.rating < 10) {
      return 'Very Good';
    }
    return 'Awesome';
  };

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{film.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{getRating()}</span>
          <span className="film-rating__count">{`${film.scoresCount} ratings`}</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{film.description}</p>

        <p className="film-card__director"><strong>{`Director: ${film.director}`}</strong></p>

        <p className="film-card__starring"><strong>{`Starring: ${film.starring.join(', ')}`}</strong></p>
      </div>
    </>
  );
}
