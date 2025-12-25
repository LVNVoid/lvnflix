
const Footer = () => {
    return (
        <footer className="w-full border-t bg-background py-8 mt-12">
            <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-xl font-bold text-primary tracking-wider">
                    LVN MOVIE
                </div>
                <p className="text-sm text-muted-foreground text-center md:text-right">
                    © {new Date().getFullYear()} LVN Movie. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer