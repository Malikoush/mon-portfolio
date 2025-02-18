
import { Contact } from "./_components/Contact";
import { Footer } from "./_components/Footer";
import { Header } from "./_components/Header";
import { Profil } from "./_components/Profil";
import { Skills } from "./_components/Skills";
import { Spacing } from "./_components/Spacing";
import { Status } from "./_components/Status";

export default function Home() {
  return (
    <main>
      <Header/>
      <Spacing size="md"/>
      <Profil/>
      <Spacing size="md"/>
      <Status/>
      <Spacing size="md"/>
      <Skills/>
      <Spacing size="md"/>
      <Contact />
      <Spacing size="md"/>
      <Footer/>
    </main>
  );
}
