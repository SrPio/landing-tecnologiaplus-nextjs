import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import HomeHeroSection from "./home/components/HeroSection/HomeHeroSection";
import SecondaryHeader from "./components/SecondaryHeader/SecondaryHeader";
import HomeClientsSection from "./home/components/ClientsSection/HomeClientsSection";
import HomeProductsSection from "./home/components/ProductsSection/HomeProductsSection";
import HomeBenefitsSection from "./home/components/BenefitsSection/HomeBenefitsSection";
import HomeRecentPostsSection from "./home/components/RecentPost/HomeRecentPostsSection";
import ContactForm from "./rollos-termicos/components/ContactForm/ContactForm";
import WppBtn from "./components/WppBtn/WppBtn";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <>
      <HomeHeroSection />
      <SecondaryHeader />
      <HomeClientsSection />
      <HomeProductsSection />
      <HomeBenefitsSection />
      <HomeRecentPostsSection />
      <ContactForm />
      <WppBtn />
      <Footer />
    </>
  );
}