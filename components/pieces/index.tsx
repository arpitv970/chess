import { IPiece, IPieceBlock } from "@/lib/types";
import React from "react";

export const PieceCard: React.FC<IPieceBlock> = ({ color, name, curr }) => {
  return (
    <div
      className={`border ${color === "black" ? "bg-primary text-secondary" : "bg-secondary text-primary"} w-8 h-8 p-3 flex justify-center items-center rounded-lg`}
    >
      {name}
    </div>
  );
};

export const Pawn: React.FC<IPiece> = (props) => {
  return <PieceCard {...props} name="P" />;
};

export const Knight: React.FC<IPiece> = (props) => {
  return <PieceCard {...props} name="N" />;
};

export const Bishop: React.FC<IPiece> = (props) => {
  return <PieceCard {...props} name="B" />;
};

export const Rook: React.FC<IPiece> = (props) => {
  return <PieceCard {...props} name="R" />;
};

export const Queen: React.FC<IPiece> = (props) => {
  return <PieceCard {...props} name="Q" />;
};

export const King: React.FC<IPiece> = (props) => {
  return <PieceCard {...props} name="K" />;
};
