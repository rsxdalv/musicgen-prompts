import React from "react";
import { GenerationRaw } from "../types/Generation";
import { MetadataMusicGen } from "./MetadataMusicGen";
import { AudioPlayer, prettifyDate } from "./CardBig";

export const CardGenerationMusicGen = ({
  generation: { text: prompt, filename, date, ...rest },
}: {
  generation: GenerationRaw;
}) => {
  // Detect if prompt is Japanese
  const isJapanese = prompt.match(/[\u3040-\u309F\u30A0-\u30FF]/);
  const maxLength = isJapanese ? 30 : 50;
  // const maxLength = 100000;
  return (
    <div className="flex flex-col items-center justify-start w-full max-w-md py-4 px-6 bg-white rounded shadow-lg">
      <div className="flex flex-col space-y-4 w-full h-full justify-between">
        <div className="flex w-full">
          <h1 className="text-2xl font-bold text-gray-900">
            <span
              className={
                prompt.length > maxLength
                  ? "text-xl font-bold text-gray-900"
                  : "text-2xl font-bold text-gray-900"
              }
            >
              {prompt.length > maxLength
                ? prompt.substring(0, maxLength) + "..."
                : prompt}
            </span>
          </h1>
        </div>
        <div className="flex w-full justify-between">
          <AudioPlayer audio={filename} />
          <p className="text-gray-500">{prettifyDate(date)}</p>
        </div>
        <MetadataMusicGen text={prompt} {...rest} />
      </div>
    </div>
  );
};
