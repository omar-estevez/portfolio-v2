import { Footer } from "./components/layout/Footer/Footer"
import { Navbar } from "./components/layout/Navbar/Navbar"
import { About } from "./components/sections/about/About"
import { Certifications } from "./components/sections/certifications/Certifications"
import { Contact } from "./components/sections/contact/Contact"
import { Hero } from "./components/sections/hero/Hero"
import { Projects } from "./components/sections/projects/Projects"
import { Stack } from "./components/sections/stack/Stack"
import { Strengths } from "./components/sections/strengths/Strengths"

export const PortfolioApp = () => {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <About />
                <Projects />
                <Strengths />
                <Stack />
                <Certifications />
                <Contact />
            </main>
            <Footer />
        </>
    )
}
