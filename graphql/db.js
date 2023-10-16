let movies = [
    {
      id: 1,
      name: "The Lord of the Rings",
      score: 8,
    },
    {
      id: 2,
      name: "Home Alone",
      score: 7,
    },
    {
      id: 3,
      name: "Who Framed Roger Rabbit",
      score: 8,
    },
    {
      id: 4,
      name: "Star Wars",
      score: 9,
    },
    {
      id: 5,
      name: "Shrek",
      score: 6,
    },
];
  
export const getMovies = () => movies;

export const getById = (id) => movies.find((movie) => id === movie.id);

export const deleteMovie = (id) => {
    const cleanedMovies = movies.filter((movie) => movie.id !== id);
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  }
};

export const addMovie = (name, score) => {
    const newMovie = {
      id: movies.length + 1,
      name,
      score,
    };
    movies.push(newMovie);
    return newMovie;
};