
import Footer from "../components/Footer/Footer";
import Pagination from "../components/Pagination/Pagination";
import WppBtn from "../components/WppBtn/WppBtn";
import ContactForm from "../rollos-termicos/components/ContactForm/ContactForm";
import BlogPostEjemploUno from "./articulos/BlogPostEjemploUno";
import BlogPostsList from "./components/BlogContentPosts/BlogPostsList";
import BlogHeroSection from "./components/HeroSection/BlogHeroSection";


export const metadata = {
    title: "Blog - Tecnología Plus",
    description:
        "Somos fabricantes. Descubre en nuestro blog cómo la tecnología mejora la experiencia de los usuarios en comercios. ¡Innovación para un mejor servicio!",
    viewport: "width=device-width, initial-scale=1, minimum-scale=1",
    alternates: {
        canonical: "https://tecnologiaplus.com/blog-tecnologia-plus/",
    },
    openGraph: {
        locale: "es_ES",
        type: "article",
        title: "Blog - Tecnología Plus",
        description:
            "Descubre en nuestro blog cómo la tecnología mejora la experiencia de los usuarios en comercios. ¡Innovación para un mejor servicio!",
        url: "https://tecnologiaplus.com/blog-tecnologia-plus/",
        siteName: "TecnologiaPlus",
        images: [
            {
                url: "https://tecnologiaplus.com/wp-content/uploads/2024/07/smiling-barista-using-digital-tablet-while-working-bar-min-scaled.jpg",
                width: 2560,
                height: 1707,
                type: "image/jpeg",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Blog",
        description:
            "Descubre en nuestro blog cómo la tecnología mejora la experiencia de los usuarios en comercios. ¡Innovación para un mejor servicio!",
        images: [
            "https://tecnologiaplus.com/wp-content/uploads/2024/07/smiling-barista-using-digital-tablet-while-working-bar-min-scaled.jpg",
        ],
    },
    icons: {
        other: [
            {
                rel: "msapplication-TileImage",
                url: "https://tecnologiaplus.com/wp-content/uploads/2018/08/cropped-favicon-tecnologia-plus-270x270.png",
            },
        ],
    },
};


export default function BlogLanding() {
    return (
        <>
            <BlogHeroSection />
            <BlogPostsList />
            <ContactForm />
            <WppBtn />
            <Footer />
        </>
    );
}