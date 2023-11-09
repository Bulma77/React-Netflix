import "./App.css";
import movies from "./assets/movies.json";
import logo from "./assets/logo.jpeg";

// console.log(movies);
function App() {
  return (
    <div className="container">
      <header>
        <h1>
          <img src={logo} alt="Netflix Logo" />
        </h1>
      </header>
      <main>
        {movies.map((movie) => {
          return (
            <section key={movie.category}>
              <h2>{movie.category}</h2>
              <div className="section">
                {movie.images.map((picture) => {
                  return (
                    <div key={picture}>
                      <img src={picture} alt="movies pictures" />
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}
      </main>
      <footer>
        <h3>
          Made with React by{" "}
          <a href="https://github.com/" target="blank">
            Pricillia EDOU EDOU
          </a>
        </h3>
      </footer>
    </div>
  );
}

export default App;
