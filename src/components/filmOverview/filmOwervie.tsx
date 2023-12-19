type FilmOverviewType = {
  rating: number;
  scoresCount: number;
  description: string;
  director: string;
  starringList: string;
}

export default function FilmOverview(props: FilmOverviewType): JSX.Element {
  const getRating = () => {
    if (props.rating >= 0 && props.rating < 3) {
      return 'Bad';
    } else if (props.rating >= 3 && props.rating < 5) {
      return 'Normal';
    } else if (props.rating >= 5 && props.rating < 8) {
      return 'Good';
    } else if (props.rating >= 8 && props.rating < 10) {
      return 'Very Good';
    }
    return 'Awesome';
  };

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{props.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{getRating()}</span>
          <span className="film-rating__count">{`${props.scoresCount} ratings`}</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{props.description}</p>

        <p className="film-card__director"><strong>{`Director: ${props.director}`}</strong></p>

        <p className="film-card__starring"><strong>{`Starring: ${props.starringList}`}</strong></p>
      </div>
    </>
  );
}
