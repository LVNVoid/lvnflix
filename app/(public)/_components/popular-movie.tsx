'use client';

import Link from "next/link"
import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import MovieCard from "@/components/movie/movie-card"
import { Movie } from "@/types/movie"
import { Button } from "@/components/ui/button"

const PopularMovies = ({ movies }: { movies: Movie[] }) => {
    const limitedMovies = movies.slice(0, 8);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const { current } = scrollContainerRef;
            const scrollAmount = direction === 'left' ? -current.offsetWidth / 2 : current.offsetWidth / 2;
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section className="container mx-auto px-4 md:px-6 my-12 group/section">
            <div className="flex justify-between items-end mb-6">
                <h2 className="text-2xl md:text-3xl font-bold">Popular Movies</h2>
                <Link href="/popular" className="text-primary font-medium hover:underline text-sm md:text-base mb-1">
                    View All
                </Link>
            </div>

            {limitedMovies.length > 0 ? (
                <div className="relative">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex h-12 w-12 rounded-full bg-black/30 text-white backdrop-blur-sm hover:bg-black/50 opacity-0 group-hover/section:opacity-100 transition-opacity -ml-6"
                        onClick={() => scroll('left')}
                    >
                        <ChevronLeft className="h-8 w-8" />
                    </Button>

                    <div
                        ref={scrollContainerRef}
                        className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0 scroll-smooth"
                    >
                        {limitedMovies.map((movie) => (
                            <div key={movie.id} className="min-w-[160px] w-[160px] md:min-w-[220px] md:w-[220px] flex-shrink-0">
                                <MovieCard movie={movie} />
                            </div>
                        ))}
                    </div>

                    <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex h-12 w-12 rounded-full bg-black/30 text-white backdrop-blur-sm hover:bg-black/50 opacity-0 group-hover/section:opacity-100 transition-opacity -mr-6"
                        onClick={() => scroll('right')}
                    >
                        <ChevronRight className="h-8 w-8" />
                    </Button>
                </div>
            ) : (
                <p className="text-center text-gray-500">
                    No movies found. Please check your API configuration.
                </p>
            )}
        </section>
    )
}

export default PopularMovies