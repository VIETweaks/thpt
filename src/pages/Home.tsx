import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Programs } from "../components/Programs";
import { News } from "../components/News";
import { Contact } from "../components/Contact";

export function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Programs />
      <News />
      <Contact />
    </div>
  );
}