import Footer from "@/components/layout/footer"
import Navbar from "@/components/layout/navbar"

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="min-h-screen">
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}

export default PublicLayout