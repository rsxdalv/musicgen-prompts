import React from "react";
import { GenerationRaw } from "../types/Generation";

const Row = ({
  label,
  value,
}: {
  label: React.ReactNode;
  value: React.ReactNode;
}) => (
  <div className="flex flex-row">
    <div className="font-bold">{label}:</div>
    <div className="ml-1">{value}</div>
  </div>
);

export const Metadata = ({
  prompt,
  seed,
  hash,
}: Pick<GenerationRaw, "prompt" | "seed" | "hash">) => (
  <div className="text-xs text-gray-500 flex flex-col w-full break-words">
    <div className="font-bold">Generation details:</div>
    <div className="flex flex-col">
      <Row label="Prompt" value={prompt} />
      <Row label="Seed" value={seed} />
      <Row label="Hash" value={hash || "unknown"} />
    </div>
  </div>
);
