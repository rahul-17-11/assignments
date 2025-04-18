let data = [
  {
    movieName: "The Shawshank Redemption",
    actors: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
    rating: 4.8,
    bestScenes: [
      {
        title: "Andy Dufresne escapes from prison",
        duration: "15 mins",
      },
      {
        title: "Brooks was here",
        duration: "10 mins",
      },
    ],
  },
  {
    movieName: "The Godfather",
    actors: ["Marlon Brando", "Al Pacino", "James Caan"],
    rating: 4.9,
    bestScenes: [
      {
        title: "Horse head in bed",
        duration: "5 mins",
      },
      {
        title: "Cannoli scene",
        duration: "3 mins",
      },
    ],
  },
  {
    movieName: "The Dark Knight",
    actors: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
    rating: 4.8,
    bestScenes: [
      {
        title: "Opening bank robbery",
        duration: "12 mins",
      },
      {
        title: "Why So Serious interrogation",
        duration: "8 mins",
      },
    ],
  },
  {
    movieName: "The Lord of the Rings: The Return of the King",
    actors: ["Elijah Wood", "Viggo Mortensen", "Ian McKellen"],
    rating: 4.9,
    bestScenes: [
      {
        title: "Ride of the Rohirrim",
        duration: "10 mins",
      },
      {
        title: "Frodo destroys the One Ring",
        duration: "7 mins",
      },
    ],
  },
];

function longestScene(data) {
  return data.map((movie) => ({
    movieName: movie.movieName,
    longestSceneDuration: movie.bestScenes.reduce((max, scene) => {
      const duration = parseInt(scene.duration);
      return Math.max(max, duration);
    }, 0),
  }));
}

// console.log(longestScene(data));

function avgRatings(data) {
  let ratingSum = data.reduce((sum, movie) => {
    const rating = movie.rating;
    return rating + sum;
  }, 0);
  return ratingSum / data.length;
}

// console.log(avgRatings(data));

function sortMovie(data) {
  let ans = data.sort((a, b) => a.rating - b.rating);
  return ans;
}

console.log(sortMovie(data));
