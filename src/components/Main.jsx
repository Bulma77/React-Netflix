import movies from "../assets/movies.json";

const Main = () => {
  return (
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
  );
};
export default Main;
