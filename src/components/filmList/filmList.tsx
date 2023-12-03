import { useState } from 'react';
import { FilmCardType } from '../../type/mainType';
import FilmCard from '../filmCard/filmCard';

type FilmListProps = {
  filmsList: Array<FilmCardType>;
  filmsSection: number;
}

function FilmList({ filmsList, filmsSection }: FilmListProps): JSX.Element {
  const [selectedFilm, setSelectedFilm] = useState('');
  const newFilmsList = filmsList.slice(0, filmsSection);

  const changeSelectedFilm = (id: string): void => {
    setSelectedFilm(id);
  };

  return (
    <div className="catalog__films-list">
      {newFilmsList.map((element) => (
        <FilmCard
          key={element.id}
          id={element.id}
          previewImage={element.previewImage}
          name={element.name}
          changeSelectedFilm={changeSelectedFilm}
          isSelected={element.id === selectedFilm}
        />))}
    </div>
  );
}
export default FilmList;
