import React from "react";
import { Pawn, Knight, Bishop, Rook, Queen, King } from "@/components/pieces";

export const PiecesSec = () => {
  return (
    <div className="space-y-5 h-max mt-5">
      <div className="flex justify-between items-start">
        <Pawn color="black" name="P" />
        <Knight color="black" name="N" />
        <Bishop color="black" name="B" />
        <Rook color="black" name="R" />
        <Queen color="black" name="Q" />
        <King color="black" name="K" />
      </div>
      <div className="flex justify-between items-start">
        <Pawn color="white" name="P" />
        <Knight color="white" name="N" />
        <Bishop color="white" name="B" />
        <Rook color="white" name="R" />
        <Queen color="white" name="Q" />
        <King color="white" name="K" />
      </div>
    </div>
  );
};
