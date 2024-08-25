import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { ICoordinate, IName, IPieceBlock } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const initializeWhitePieces = (): IPieceBlock[] => {
  const pieces: IPieceBlock[] = [];

  // initialize pawns
  const pawnRank: ICoordinate["rank"] = "2";
  const pawnFiles: ICoordinate["file"][] = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
  ];

  for (const file of pawnFiles) {
    pieces.push({
      name: "P",
      color: "white",
      curr: {
        file,
        rank: pawnRank,
      },
    });
  }

  // initialize other pieces
  const majorPieceRank: ICoordinate["rank"] = "1";
  const majorPieces: IName["name"][] = ["R", "N", "B", "Q", "K", "B", "N", "R"];
  majorPieces.forEach((name, idx) => {
    pieces.push({
      name,
      color: "white",
      curr: {
        file: pawnFiles[idx],
        rank: majorPieceRank,
      },
    });
  });

  return pieces;
};

export const initializeBlackPieces = (): IPieceBlock[] => {
  const pieces: IPieceBlock[] = [];

  // initialize pawns
  const pawnRank: ICoordinate["rank"] = "7";
  const pawnFiles: ICoordinate["file"][] = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
  ];

  for (const file of pawnFiles) {
    pieces.push({
      name: "P",
      color: "black",
      curr: {
        file,
        rank: pawnRank,
      },
    });
  }

  // initialize other pieces
  const majorPieceRank: ICoordinate["rank"] = "8";
  const majorPieces: IName["name"][] = ["R", "N", "B", "Q", "K", "B", "N", "R"];
  majorPieces.forEach((name, idx) => {
    pieces.push({
      name,
      color: "black",
      curr: {
        file: pawnFiles[idx],
        rank: majorPieceRank,
      },
    });
  });

  return pieces;
};

export const initializeAllPieces = (): IPieceBlock[] => {
  const whitePieces = initializeWhitePieces();
  const blackPieces = initializeBlackPieces();

  return [...whitePieces, ...blackPieces];
};
