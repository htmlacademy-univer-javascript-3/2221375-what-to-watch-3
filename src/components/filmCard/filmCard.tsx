import { Link, generatePath } from 'react-router-dom';
import VideoPlayer from '../videoPlayer/videoPlayer';
import { AppRoute } from '../../const';
import { useState } from 'react';

type FilmCardProps = {
  name: string;
  previewImage: string;
  id: string;
  previewVideo: string;
}

function FilmCard(props: FilmCardProps): JSX.Element {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <article onMouseOver={() => {
      setIsSelected(true);
    }}
    onMouseLeave={() => {
      setIsSelected(false);
    }}
    className="small-film-card catalog__films-card"
    >
      <div className="small-film-card__image">
        <VideoPlayer videoSrc={props.previewVideo} isActive={isSelected} poster={props.previewImage}/>
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={generatePath(AppRoute.Film, { id: props.id })}>{props.name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
