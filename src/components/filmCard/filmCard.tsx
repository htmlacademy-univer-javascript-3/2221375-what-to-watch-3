import { Link } from 'react-router-dom';

type FilmCardProps = {
  name: string;
  previewImage: string;
  id: string;
  changeSelectedFilm: (id: string) => void;
}

function FilmCard(props: FilmCardProps): JSX.Element {
  return (
    <article onMouseOver={() => {
      props.changeSelectedFilm(props.id);
    }} className="small-film-card catalog__films-card"
    >
      <div className="small-film-card__image">
        <img src={props.previewImage} alt={props.name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${props.id}`}>{props.name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
