'use client';

import { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Movie } from '@/types/movie';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BackdropHeroProps {
    movies: Movie[];
}

export default function BackdropHero({ movies }: BackdropHeroProps) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })]);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    if (!movies || movies.length === 0) return null;

    return (
        <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden group">
            <div className="overflow-hidden h-full" ref={emblaRef}>

                <div className="flex h-full">
                    {movies.map((movie) => (
                        <div className="relative flex-[0_0_100%] min-w-0 h-full" key={movie.id}>
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent z-10" />
                            {movie.poster_path && (
                                <Image
                                    src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}
                                    alt={movie.title}
                                    fill
                                    className="object-cover md:hidden"
                                    priority
                                />
                            )}

                            {/* Desktop Landscape Image */}
                            {movie.backdrop_path ? (
                                <Image
                                    src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
                                    alt={movie.title}
                                    fill
                                    className={`object-cover ${movie.poster_path ? 'hidden md:block' : ''}`}
                                    priority
                                />
                            ) : (
                                !movie.poster_path && (
                                    <div className="w-full h-full bg-muted flex items-center justify-center">
                                        <span className="text-muted-foreground">No Image Available</span>
                                    </div>
                                )
                            )}

                            <div className="absolute bottom-0 left-0 z-20 w-full pb-12 md:pb-16 flex flex-col justify-end h-full box-border pointer-events-none">
                                <div className="container mx-auto px-4 md:px-6 pointer-events-auto">
                                    <div className="max-w-3xl space-y-4">
                                        <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold text-foreground drop-shadow-md tracking-tight">
                                            {movie.title}
                                        </h2>
                                        <div className="flex items-center space-x-4 text-foreground/90">
                                            <div className="flex items-center text-yellow-400">
                                                <Star className="fill-current w-5 h-5 mr-1" />
                                                <span className="font-semibold">{movie.vote_average.toFixed(1)}</span>
                                            </div>
                                            <span>|</span>
                                            <span>{movie.release_date.split('-')[0]}</span>
                                        </div>

                                        <p className="text-sm md:text-lg line-clamp-2 md:line-clamp-2 max-w-2xl drop-shadow-sm text-muted-foreground hidden sm:block">
                                            {movie.overview}
                                        </p>


                                        <div className="flex flex-wrap items-center gap-4 pt-4">
                                            <Button size="lg" className="w-full sm:w-auto font-semibold text-base px-8">
                                                Watch Now
                                            </Button>
                                            <Button size="lg" variant="outline" className="w-full sm:w-auto font-semibold text-base px-8 bg-foreground/10 backdrop-blur-sm border-foreground/20 text-foreground hover:bg-foreground/20">
                                                Details
                                            </Button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
