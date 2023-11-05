type FilmOverviewType = {
  rating: number;
  scoresCount: number;
  description: string;
  director: string;
  starringList: string;
}

export default function FilmOverview(props: FilmOverviewType): JSX.Element {
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{props.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">Very good</span>
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
