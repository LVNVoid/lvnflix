import { getNowPlayingMovies, getPopularMovies } from '@/services/movieService';
import BackdropHero from '@/components/movie/backdrop-hero';
import PopularMovies from './_components/popular-movie';

export default async function Home() {

  const movies = await getPopularMovies();
  const nowPlayingMovies = await getNowPlayingMovies();

  return (
    <main className="min-h-screen bg-background">
      <BackdropHero movies={nowPlayingMovies} />

      <PopularMovies movies={movies} />

    </main>
  );
}
