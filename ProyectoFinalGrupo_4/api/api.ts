export const getGames = async () => {
    const url = "https://api.rawg.io/api/games?key=990db89b2ae64cecbdceca51022ef2a2"
    try {
        const response = await fetch(url);
        if (response.ok) {
          const payload = await response.json();
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
  const url = `https://api.rawg.io/api/games/${id}?key=990db89b2ae64cecbdceca51022ef2a2`

  /*
  Access to fetch at 'https://api.rawg.io/api/games/258322' from origin 'http://localhost:5173' has been blocked by CORS 
  policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, 
  set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
  */
 
  try {
    const response = await fetch(url);
    if (response.ok) {
      const payload = await response.json();
      console.log(payload)
      return payload;
    } else {
      console.error("An error happened");
      return [];
    }
  } catch (error) {
    console.error(error);
  }
}