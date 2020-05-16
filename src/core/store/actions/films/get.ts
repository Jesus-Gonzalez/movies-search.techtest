export const getFilm = (filmId: string) => ({
  type: 'GET_FILM',
  filmId,
});
