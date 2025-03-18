"use client";


import { useState, useEffect } from "react";
import ContactForm from "@/app/components/ContactForm/ContactForm";
import WppBtn from "@/app/components/WppBtn/WppBtn";
import Footer from "@/app/components/Footer/Footer";
import style from "../../llamador-meseros/components/RelatedProducts/LlamadorMeserosRelatedProducts.module.scss";
import SecondaryHeader from "@/app/components/SecondaryHeader/SecondaryHeader";
import ProductGallery from "./components/ProductGallery/ProductGallery";
import LogosSection from "../termicos/components/LogosSection/LogosSection";
import TechnicalSheet from "./components/TechnicalSheet/TechnicalSheet";
import LlamadorMeserosRelatedProducts from "@/app/llamador-meseros/components/RelatedProducts/LlamadorMeserosRelatedProducts";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import MobileProductGallery from "./components/ProductGallery/MobileProductGallery";


export default function VerMasRollosTurnos() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1025);
        };

        // Verificamos el tamaño de la pantalla en el montaje
        handleResize();

        // Agregamos el event listener
        window.addEventListener("resize", handleResize);

        // Limpiamos el event listener al desmontar el componente
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            {isMobile ? <MobileProductGallery /> : <ProductGallery />}
            <SecondaryHeader />
            <TechnicalSheet />
            <HowItWorks />
            <LogosSection />
            <LlamadorMeserosRelatedProducts titleClassName={style.customTitle} />
            <ContactForm />
            <WppBtn />
            <Footer />
        </>
    );
}