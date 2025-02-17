import Footer from "../components/Footer/Footer";
import Pagination from "../components/Pagination/Pagination";
import WppBtn from "../components/WppBtn/WppBtn";
import ContactForm from "../rollos-termicos/components/ContactForm/ContactForm";
import BlogPostEjemploUno from "./articulos/BlogPostEjemploUno";
import BlogPostsList from "./components/BlogContentPosts/BlogPostsList";
import BlogHeroSection from "./components/HeroSection/BlogHeroSection";


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