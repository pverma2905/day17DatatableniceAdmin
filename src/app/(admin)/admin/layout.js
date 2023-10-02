import Aside from "@/components/layouts/Aside";
import Breadcrum from "@/components/layouts/Breadcrum";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";

export default function DashboardLayout({
    children, // will be a page or nested layout
}) {
    return (
        <section>
            {/* Include shared UI here e.g. a header or sidebar */}
            <Header />
            <Aside />
            <main id="main" className="main">
                <Breadcrum />
                {children}
            </main>
            <Footer />
        </section>
    )
}
