import { useState } from 'react';
import { FilmCardType } from '../../type/mainType';
import FilmCard from '../filmCard/filmCard';

type FilmListProps = {
  filmsList: Array<FilmCardType>;
}

function FilmList({ filmsList }: FilmListProps): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedFilm, setSelectedFilm] = useState('');
  const changeSelectedFilm = (id: string): void => {
    setSelectedFilm(id);
  };

  return (
    <div className="catalog__films-list">
      {filmsList.map((element) => (
        <FilmCard
          key={element.id}
          id={element.id}
          previewImage={element.previewImage}
          name={element.name}
          changeSelectedFilm={changeSelectedFilm}
        />))}
    </div>
  );
}
export default FilmList;
