import ContactForm from "@/app/components/ContactForm/ContactForm";
import WppBtn from "@/app/components/WppBtn/WppBtn";
import Footer from "@/app/components/Footer/Footer";
import style from "../../../llamador-meseros/components/RelatedProducts/LlamadorMeserosRelatedProducts.module.scss";
import SecondaryHeader from "@/app/components/SecondaryHeader/SecondaryHeader";
import ProductGallery from "./components/ProductGallery/ProductGallery";
import LogosSection from "../../termicos/components/LogosSection/LogosSection";
import TechnicalSheet from "./components/TechnicalSheet/TechnicalSheet";
import LlamadorMeserosRelatedProducts from "@/app/llamador-meseros/components/RelatedProducts/LlamadorMeserosRelatedProducts";

export default function VerMasMeserosHabladorParaMesa() {
    return (
        <>
            <ProductGallery />
            <SecondaryHeader />
            <TechnicalSheet />
            <LogosSection />
            <LlamadorMeserosRelatedProducts titleClassName={style.customTitle} />
            <ContactForm />
            <WppBtn />
            <Footer />
        </>
    )
}