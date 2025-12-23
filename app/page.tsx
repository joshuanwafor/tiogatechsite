import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/sections/Hero";
import Features from "./components/sections/Features";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
