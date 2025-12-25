import Image from "next/image"

const Hero = () => {
    return (
        <div className="relative h-[80vh] w-full">
            {/* Background Image */}
            <Image
                src={backdropUrl}
                alt={title}
                fill
                priority
                className="object-cover"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

            {/* Content */}
            <div className="relative z-10 h-full flex items-end">
                <div className="container pb-24 space-y-4">
                    <span className="text-sm bg-black/60 px-3 py-1 rounded-full w-fit">
                        Series
                    </span>

                    <h1 className="text-4xl md:text-6xl font-bold max-w-2xl">
                        The Last Of Us Season 1
                    </h1>

                    <p className="max-w-xl text-sm md:text-base text-gray-300 line-clamp-3">
                        After a global pandemic destroys civilization, a hardened survivor
                        takes charge of a 14-year-old girl who may be humanity’s last hope.
                    </p>

                    <div className="flex gap-3 pt-4">
                        <button className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-md font-semibold">
                            ▶ Continue Watching
                        </button>

                        <button className="border border-white/30 px-6 py-3 rounded-md">
                            + Add Watchlist
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Hero