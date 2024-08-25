"use client";
import { IBlock, IColor, ICoordinate, IPiece, IPieceBlock } from "@/lib/types";
import React, { useState } from "react";
import { Bishop, King, Knight, Pawn, Queen, Rook } from "../pieces";
import { initializeAllPieces, initializeWhitePieces } from "@/lib/utils";

export const Board = () => {
  const files: ICoordinate["file"][] = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const ranks: ICoordinate["rank"][] = ["8", "7", "6", "5", "4", "3", "2", "1"];

  const [boardState, setBoardState] = useState<IPieceBlock[]>(
    initializeAllPieces(),
  );

  const renderPiece = (
    file: ICoordinate["file"],
    rank: ICoordinate["rank"],
  ) => {
    const piece = boardState.find(
      (p) => p.curr?.rank === rank && p.curr.file === file,
    );
    if (!piece) return null;

    switch (piece.name) {
      case "P":
        return <Pawn color={piece.color} curr={piece.curr} />;
      case "N":
        return <Knight color={piece.color} curr={piece.curr} />;
      case "B":
        return <Bishop color={piece.color} curr={piece.curr} />;
      case "R":
        return <Rook color={piece.color} curr={piece.curr} />;
      case "Q":
        return <Queen color={piece.color} curr={piece.curr} />;
      case "K":
        return <King color={piece.color} curr={piece.curr} />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center m-auto">
      <div className="flex justify-center items-start">
        <div className="flex flex-col justify-evenly items-center gap-[5px] md:gap-[15px] h-[300px] md:h-[500px]">
          {ranks.map((item, idx) => (
            <div key={idx}>{item}</div>
          ))}
        </div>
        <div className="flex flex-col justify-center items-center m-auto">
          <div className="border border-primary drop-shadow-xl rounded-xl overflow-hidden grid grid-cols-8 gap-0 h-[300px] w-[300px] md:h-[500px] md:w-[500px]">
            {Array.from(ranks, (rank, r_idx) =>
              Array.from(files, (file, c_idx) => (
                <Block
                  key={`${r_idx}${c_idx}`}
                  color={(c_idx + r_idx) % 2 === 0 ? "black" : "white"}
                >
                  {/*
                  <div>
                    {file}
                    {rank}
                  </div>
                  <Pawn color="white" curr={{ file, rank }} />
                  */}
                  {renderPiece(file, rank)}
                </Block>
              )),
            )}
          </div>
          <div className="w-[330px] md:w-[560px] mt-3 flex justify-evenly items-center">
            {files.map((item, idx) => (
              <div key={idx}>{item}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const Block: React.FC<IBlock> = ({ color = "white", children }) => {
  return (
    <div
      className={`${color === "white" ? "bg-primary text-secondary" : "bg-secondary text-primary"} relative flex justify-center items-center m-auto h-full w-full`}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {children}
      </div>
    </div>
  );
};
