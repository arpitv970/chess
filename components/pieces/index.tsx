import { IPiece } from "@/lib/types";
import React from "react";

export const PieceCard: React.FC<IPiece> = ({ color, name }) => {
  return (
    <div
      className={`border ${color === "black" ? "bg-primary text-secondary" : "bg-secondary text-primary"} w-8 h-8 p-3 flex justify-center items-center rounded-lg`}
    >
      {name}
    </div>
  );
};

export const Pawn: React.FC<IPiece> = ({ color, name }) => {
  return <PieceCard color={color} name={name} />;
};

export const Knight: React.FC<IPiece> = ({ color, name }) => {
  return <PieceCard color={color} name={name} />;
};

export const Bishop: React.FC<IPiece> = ({ color, name }) => {
  return <PieceCard color={color} name={name} />;
};

export const Rook: React.FC<IPiece> = ({ color, name }) => {
  return <PieceCard color={color} name={name} />;
};

export const Queen: React.FC<IPiece> = ({ color, name }) => {
  return <PieceCard color={color} name={name} />;
};

export const King: React.FC<IPiece> = ({ color, name }) => {
  return <PieceCard color={color} name={name} />;
};
