let inc = 1;

export const fetchMovies = () => ({
  type: 'FETCH_MOVIES',
  movie: `John ${inc++}`
})
