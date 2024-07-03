export const getGames = async () => {
  const url = "https://api.rawg.io/api/games?key=5ab14b1518de492b8cc6eac52a5c9264&ordering=-metacritic&page_size=30"
  try {
      const response = await fetch(url);
      if (response.ok) {
        const payload = await response.json();
        console.log(payload.results)
        return payload.results;
      } else {
        console.error("An error happened");
        return [];
      }
    } catch (error) {
      console.error(error);
    }
}

export const getGamesWithDate = async (date1, date2) => {
  const url = `https://api.rawg.io/api/games?key=5ab14b1518de492b8cc6eac52a5c9264&dates=${date1},${date2}&page_size=30`
  try {
      const response = await fetch(url);
      if (response.ok) {
        const payload = await response.json();
        console.log(url)
        return payload.results;
      } else {
        console.error("An error happened");
        return [];
      }
    } catch (error) {
      console.error(error);
    }
}

export const getGameById = async (id) => {
  const url = `https://api.rawg.io/api/games/${id}?key=5ab14b1518de492b8cc6eac52a5c9264`

  /*
  Access to fetch at 'https://api.rawg.io/api/games/258322' from origin 'http://localhost:5173' has been blocked by CORS 
  policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, 
  set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
  */
 
  try {
    const response = await fetch(url);
    if (response.ok) {
      const payload = await response.json();
      return payload;
    } else {
      console.error("An error happened");
      return [];
    }
  } catch (error) {
    console.error(error);
  }
}

export const getGameScreenshotsById = async (id) => {
  const url = `https://api.rawg.io/api/games/${id}/screenshots?key=5ab14b1518de492b8cc6eac52a5c9264`
 
  try {
    const response = await fetch(url);
    if (response.ok) {
      const payload = await response.json();
      return payload;
    } else {
      console.error("An error happened");
      return [];
    }
  } catch (error) {
    console.error(error);
  }
}

export const getGameMoviesById = async (id) => {
  const url = `https://api.rawg.io/api/games/${id}/movies?key=5ab14b1518de492b8cc6eac52a5c9264`

  try {
    const response = await fetch(url);
    if (response.ok) {
      const payload = await response.json();
      return payload;
    } else {
      console.error("An error happened");
      return [];
    }
  } catch (error) {
    console.error(error);
  }
}