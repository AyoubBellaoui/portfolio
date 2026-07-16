import { About } from "./_components/about";
import { Contact } from "./_components/contact";
import { Hero } from "./_components/hero";
import { Journey } from "./_components/journey";
import { Projects } from "./_components/projects";
import { Skills } from "./_components/skills";

export default function Home() {
  return (
    <>
      <Hero />
      <Journey />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
