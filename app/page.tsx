
import { Header } from "./_components/Header";
import { Profil } from "./_components/Profil";
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
    </main>
  );
}
