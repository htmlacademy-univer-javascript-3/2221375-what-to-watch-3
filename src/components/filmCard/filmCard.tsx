import { Link, generatePath } from 'react-router-dom';
import VideoPlayer from '../videoPlayer/videoPlayer';
import { AppRoute } from '../../const';

type FilmCardProps = {
  name: string;
  previewImage: string;
  id: string;
  changeSelectedFilm: (id: string) => void;
  isSelected: boolean;
  previewVideo: string;
}

function FilmCard(props: FilmCardProps): JSX.Element {
  return (
    <article onMouseOver={() => {
      props.changeSelectedFilm(props.id);
    }}
    onMouseLeave={() => {
      props.changeSelectedFilm('');
    }}
    className="small-film-card catalog__films-card"
    >
      <div className="small-film-card__image">
        <VideoPlayer videoSrc={props.previewVideo} isActive={props.isSelected} poster={props.previewImage}/>
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={generatePath(AppRoute.Film, { id: props.id })}>{props.name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
