import { FilmPreview } from '../types/mainType';

function getFlimsOfGenre(filmList: Array<FilmPreview>, genre: string): Array<FilmPreview> {
  if (genre === 'All') {
    return filmList;
  }
  const result: Array<FilmPreview> = [];
  filmList.forEach((element) => {
    if (element.genre === genre) {
      result.push(element);
    }
  });
  return result;
}
export default getFlimsOfGenre;
