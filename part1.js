/******************************
	Q1) Create an object called person with properties name, age, and city.
 Set appropriate values for these properties.
********************************/
const person = {
  name: "Wahab",
  age: "24",
  city: "Kuwait",
};
/******************************
	Q2) Add a new key email to the person object and assign it an email address.
********************************/
person.email = "wahab@hotmail,.com";
/******************************
	Q3) Write a JavaScript function called hasKey that takes two arguments:
 an object and a key. The function should return true if the object contains
 the specified key, and false otherwise. For example, if the object is
 { name: 'John', age: 25 }, and the key is 'name', the function should return true,
 but if the key is 'city', it should return false.
********************************/

const movies = [
  {
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    year: 1994,
    genre: "Drama",
  },
  {
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: 1972,
    genre: "Crime",
  },
  {
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: 1994,
    genre: "Crime",
  },
  {
    title: "The Dark Knight",
    director: "Christopher Nolan",
    year: 2008,
    genre: "Action",
  },
  {
    title: "Forrest Gump",
    director: "Robert Zemeckis",
    year: 1994,
    genre: "Drama",
  },
];
const hasKey = (object, keys) => {
  const nameFinder = object[keys];

  if (nameFinder === undefined) {
    return false;
  } else return true;
};
console.log(hasKey(movies[0], "title"));

/******************************
      Q4) Create a function that accepts an array of objects called 'movies'
  and iterates through it to print the titles of all the movies.
  ********************************/
const movieTitle = (movieList) => {
  const titles = movieList.map((movies) => movies.title);
  return titles;
};
console.log(movieTitle(movies));
/******************************
      Q5) Create a function that accepts an array of objects called 'movies'
  and iterates through it to count how many movies were released in the year 1994.
  ********************************/
// const movieYear = (movieList) => {
//   const titles = movieList.filter((movies) => movies.year === 1994);
//   return titles.length;
// };

// console.log(movieYear(movies));
/******************************
      Q6) Write a function that updates the genre of the movie "The Dark Knight"
   to "Action/Drama" and returns the modified array of movies.
  ********************************/
const movieGenreUpdate = (movieList, movieName) => {
  const titles = movieList.filter((movies) => movies.title === movieName);
  titles[0].genre = "Action/Drama";
  console.log(titles[0].genre);
  return movieList;
};

console.log(movieGenreUpdate(movies, "The Dark Knight"));
