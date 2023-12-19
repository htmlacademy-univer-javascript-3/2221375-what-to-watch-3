import { FilmCardType } from '../../types/mainType';
import FilmCard from '../filmCard/filmCard';

type FilmListProps = {
  filmsList: Array<FilmCardType>;
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
