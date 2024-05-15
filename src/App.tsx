import { CharacterCarousel } from "./components/characters/carousel";
import { EpisodeCarousel } from "./components/episodes/carousel";
import { LocationCarusel } from "./components/locations/carousel";
import { NavBar } from "./components/utils/navbar";
import { useAllTypes } from "./hooks/useAllTypes"

function App() {

  const { loading, result: catalog } = useAllTypes();

  return (
    <div data-bs-theme="dark">
      <div className="bg-body">
        <NavBar />
        <main>
          <CharacterCarousel characters={catalog?.characters.results} />
          <div className="border-top border-primary"></div>
          <LocationCarusel locations={catalog?.locations.results} />
          <div className="border-top border-primary"></div>
          <EpisodeCarousel episodes={catalog?.episodes.results} />
        </main>
      </div>
    </div>
  )
}

export default App
