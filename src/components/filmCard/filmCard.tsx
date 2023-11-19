import { Link } from 'react-router-dom';
import { videoSrc } from '../../mocks/video';
import VideoPlayer from '../videoPlayer/videoPlayer';

type FilmCardProps = {
  name: string;
  previewImage: string;
  id: string;
  changeSelectedFilm: (id: string) => void;
  isSelected: boolean;
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
        <VideoPlayer videoSrc={videoSrc} isActive={props.isSelected} poster={props.previewImage} />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${props.id}`}>{props.name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
