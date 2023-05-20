import { Inter } from "next/font/google";
import React from "react";

import { FavoritesProvider, Favorites } from "../components/FavoritesProvider";
import { LocalVotesProvider, VotesProvider } from "@/components/VotesProvider";
import { CardBig, CardEmpty, CardGeneration } from "../components/CardBig";
import { Voice } from "../types/Voice";
import { getGenerationsData, getVoicesData } from "../data/getVoicesData";
import { Generation } from "../types/Generation";

const inter = Inter({ subsets: ["latin"] });

export default function Home({
  list_of_voices,
  list_of_generations,
}: {
  list_of_voices: Voice[];
  list_of_generations: Generation[];
}) {
  // Simple hash router
  const [hash, setHash] = React.useState(
    typeof window !== "undefined" && window.location.hash
  );
  const route = hash ? hash.slice(1) : "";
  React.useEffect(() => {
    if (hash) {
      window.location.hash = hash;
    }
  }, [hash]);
  return (
    <FavoritesProvider>
      <LocalVotesProvider>
        <VotesProvider>
          <main
            className={`flex min-h-screen flex-col items-center justify-between p-12 space-y-4 ${inter.className}`}
          >
            <Header setHash={setHash} />
            {route === "voices" && (
              <VoiceDirectory list_of_voices={list_of_voices} />
            )}
            {route === "generations" && (
              <GenerationsDirectory list_of_generations={list_of_generations} />
            )}
          </main>
        </VotesProvider>
      </LocalVotesProvider>
    </FavoritesProvider>
  );
}

export const getStaticProps = async () => {
  const list_of_voices: Voice[] = getVoicesData();
  const list_of_generations: Voice[] = getGenerationsData();
  return {
    props: {
      list_of_voices: list_of_voices,
      list_of_generations: list_of_generations,
    },
  };
};

const VoiceDirectory = ({ list_of_voices }: { list_of_voices: Voice[] }) => (
  <>
    <div className="flex flex-col items-center justify-center w-full p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center text-gray-900">
        Voice Directory
      </h2>
      <p className="text-md text-center text-gray-700">Voices for Bark TTS</p>
    </div>
    <Favorites list_of_voices={list_of_voices} />
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {list_of_voices.map((voice) => (
        <CardBig key={voice.download} voice={voice} />
      ))}
      <CardEmpty
        title="Add a new voice"
        link="https://github.com/rsxdalv/bark-speaker-directory/pull/2"
      />
    </div>
  </>
);

const GenerationsDirectory = ({
  list_of_generations,
}: {
  list_of_generations: Generation[];
}) => (
  <>
    <div className="flex flex-col items-center justify-center w-full p-8 bg-white rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-center text-gray-900">
        Generations
      </h1>
      <p className="text-lg text-center text-gray-700">
        Sounds generated by Bark TTS
      </p>
    </div>
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {list_of_generations.map((generation) => (
        <CardGeneration key={generation.download} generation={generation} />
      ))}
      <CardEmpty
        title="Add a new generation"
        link="https://github.com/rsxdalv/bark-speaker-directory/pull/2"
      />
    </div>
  </>
);

// Header component
const Header = ({
  setHash,
}: {
  setHash: React.Dispatch<React.SetStateAction<string | false>>;
}) => (
  <div className="flex flex-col items-center justify-center w-full p-8 bg-white rounded-lg shadow-lg">
    <h1 className="text-4xl font-bold text-center text-gray-900">
      Bark Speaker Directory
    </h1>
    <p className="text-lg text-center text-gray-700">
      <a
        href="#voices"
        onClick={(e) => {
          e.preventDefault();
          setHash("#voices");
        }}
      >
        Voices
      </a>{" "}
      |{" "}
      <a
        href="#generations"
        onClick={(e) => {
          e.preventDefault();
          setHash("#generations");
        }}
      >
        Generations
      </a>
    </p>
  </div>
);
