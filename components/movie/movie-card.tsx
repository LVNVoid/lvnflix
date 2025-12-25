import Link from "next/link"
import Image from "next/image"
import type { Movie } from "@/types/movie"
import { TMDB_IMAGE_BASE_URL } from "@/utils/constants"

interface MovieCardProps {
    movie: Movie
}

const MovieCard = ({ movie }: MovieCardProps) => {
    return (
        <Link
            href={`/movie/${movie.id}`}
            className="group relative block overflow-hidden rounded-md transition-all duration-300 ease-out hover:scale-105 hover:z-10"
        >
            <div className="relative aspect-[2/3] w-full bg-black">
                {movie.poster_path ? (
                    <Image
                        src={`${TMDB_IMAGE_BASE_URL}${movie.poster_path}`}
                        alt={movie.title}
                        fill
                        className="object-cover transition-opacity duration-300 group-hover:opacity-80"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                ) : (
                    <div className="flex items-center justify-center h-full text-gray-500">No Image</div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <h3 className="text-white font-semibold text-base line-clamp-2 mb-2">{movie.title}</h3>
                    <div className="flex items-center gap-2">
                        <span className="text-green-400 font-semibold text-sm">{movie.vote_average.toFixed(1)}</span>
                        <span className="text-gray-300 text-xs">Rating</span>
                    </div>
                </div>
            </div>

            <div className="absolute inset-0 rounded-md shadow-none transition-shadow duration-300 group-hover:shadow-2xl group-hover:shadow-black/50" />
        </Link>
    )
}

export default MovieCard
