import React from "react";

import { CardEmpty } from "../components/CardBig";
import { CardGenerationMusicGen } from "@/components/CardGenerationMusicGen";
import { getMusicGenOggData } from "../data/getVoicesData";
import { GenerationRaw } from "../types/Generation";
import { Template } from "../components/Template";

export default function Home({
  generations,
}: {
  generations: GenerationRaw[];
}) {
  return (
    <Template>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {generations.map((generation) => (
          <CardGenerationMusicGen key={generation.date} generation={generation} />
        ))}
        <CardEmpty
          title="Add a new generation"
          link="https://github.com/rsxdalv/musicgen-prompts/pull/1"
        />
      </div>{" "}
    </Template>
  );
}

export const getStaticProps = async () => {
  const generations: GenerationRaw[] = await getMusicGenOggData();
  return {
    props: {
      generations: generations,
    },
  };
};
