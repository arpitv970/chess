import { IColor } from "@/lib/types";
import React from "react";

export const Board = () => {
  const rows = 8;
  const cols = 8;
  return (
    <div className="w-full h-screen flex justify-center items-center m-auto">
      <div className="border border-primary drop-shadow-xl rounded-xl overflow-hidden grid grid-cols-8 gap-0 h-[700px] w-[700px]">
        {Array.from({ length: rows }, (r_item, r_idx) =>
          Array.from({ length: cols }, (c_item, c_idx) => (
            <Block
              key={`${r_idx}${c_idx}`}
              color={(c_idx + r_idx) % 2 === 0 ? "black" : "white"}
            />
          )),
        )}
      </div>
    </div>
  );
};

export const Block: React.FC<IColor> = ({ color = "white" }) => {
  return (
    <div
      className={`${color === "black" ? "bg-primary text-secondary" : "bg-secondary text-primary"} flex justify-center items-center m-auto h-full w-full`}
    ></div>
  );
};
