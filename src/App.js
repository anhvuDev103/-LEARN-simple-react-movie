
import Banner from './components/Banner';
import Header from './components/Header';
import MovieList from './components/movie/MovieList';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <section className="my-10 movie-layout body-container">
        <h2 className="text-[30px] font-semibold mb-4">Now Playing</h2>
        <MovieList type="now_playing"/>
      </section>
      <section className="my-10 movie-layout body-container">
        <h2 className="text-[30px] font-semibold mb-4">Top rated</h2>
        <MovieList type="top_rated"/>
      </section>
      <section className="my-10 movie-layout body-container">
        <h2 className="text-[30px] font-semibold mb-4">Trending</h2>
        <MovieList type="popular"/>
      </section>
    </div>
  );
}

export default App;
