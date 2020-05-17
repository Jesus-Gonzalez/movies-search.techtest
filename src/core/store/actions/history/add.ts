export const addToHistory = (film: IFilmObject) => ({
  type: 'HISTORY_ADD',
  film,
});
