import FilmCard from '../film-card/film-card';
import { FilmPreview } from '../../types/mainType';

type FilmListProps = {
  filmsList: FilmPreview[];
  filmsSection: number;
}

function FilmList({ filmsList, filmsSection }: FilmListProps): JSX.Element {
  const newFilmsList = filmsList.slice(0, filmsSection);

  return (
    <div className="catalog__films-list">
      {newFilmsList.map((element) => (
        <FilmCard
          key={element.id}
          id={element.id}
          previewImage={element.previewImage}
          name={element.name}
          previewVideo={element.previewVideoLink}
        />))}
    </div>
  );
}
export default FilmList;
