import React from "react";
import { Pawn, Knight, Bishop, Rook, Queen, King } from "@/components/pieces";

export const PiecesSec = () => {
  return (
    <div className="space-y-5 h-max mt-5">
      <div className="flex justify-between items-start">
        <Pawn color="black" />
        <Knight color="black" />
        <Bishop color="black" />
        <Rook color="black" />
        <Queen color="black" />
        <King color="black" />
      </div>
      <div className="flex justify-between items-start">
        <Pawn color="white" />
        <Knight color="white" />
        <Bishop color="white" />
        <Rook color="white" />
        <Queen color="white" />
        <King color="white" />
      </div>
    </div>
  );
};
