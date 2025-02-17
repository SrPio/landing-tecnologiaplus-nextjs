import Header from "@/app/components/Header/Header";
import altStyles from "../../components/Header/HeaderAlt.module.scss";
const { default: ContactForm } = require("@/app/rollos-termicos/components/ContactForm/ContactForm");
const { default: BlogHeroSection } = require("../components/HeroSection/BlogHeroSection");
const { default: BlogPostEjemploUno } = require("./BlogPostEjemploUno");
const { default: WppBtn } = require("@/app/components/WppBtn/WppBtn");
const { default: Footer } = require("@/app/components/Footer/Footer");

export default function BlogPostArticuloUno() {
    return (
        <>
            <Header
                customStyles={{
                    header: altStyles.altHeader,
                    phoneBtn: altStyles.altPhoneBtn,
                    searchIcon: altStyles.altSearchIcon,
                }}
            />
            <BlogPostEjemploUno />
            <ContactForm />
            <WppBtn />
            <Footer />
        </>
    );
}