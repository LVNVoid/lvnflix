import {
  getNowPlayingMovies,
  getPopularMovies,
  getWeekTranding,
} from '@/services/movieService';
import BackdropHero from '@/components/movie/backdrop-hero';
import MovieSection from '@/components/movie/movie-section';

export default async function Home() {
  const nowPlayingMovies = await getNowPlayingMovies();
  const popularMovies = await getPopularMovies();
  const weekTranding = await getWeekTranding();

  return (
    <main className="min-h-screen bg-background">
      <BackdropHero movies={nowPlayingMovies} />

      <MovieSection movies={popularMovies} title="Popular Movies" />
      <MovieSection movies={weekTranding} title="Tranding This Week" />
    </main>
  );
}
