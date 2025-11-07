async function searchMovie() {
  const movieName = document.getElementById("movieInput").value.trim();
  const resultDiv = document.getElementById("movieResult");

  if (movieName === "") {
    resultDiv.innerHTML = "<p>Please enter a movie name.</p>";
    return;
  }

  const apiKey = "8d1254a5"; // 🔑 Replace with your OMDb API key
  const url = `https://www.omdbapi.com/?t=${movieName}&apikey=${apiKey}`;

  try {
    resultDiv.innerHTML = "<p>Loading...</p>";
    const response = await fetch(url);
    const data = await response.json();

    if (data.Response === "True") {
      resultDiv.innerHTML = `
        <h2>${data.Title}</h2>
        <p>⭐ Rating: ${data.imdbRating}</p>
        <p>📅 Year: ${data.Year}</p>
        <img src="${data.Poster}" alt="Poster not found">
      `;
    } else {
      resultDiv.innerHTML = "<p>Movie not found! ❌</p>";
    }
  } catch (error) {
    resultDiv.innerHTML = "<p>Something went wrong. Please try again.</p>";
    console.error(error);
  }
}