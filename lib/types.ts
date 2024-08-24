export interface IColor {
  color: "black" | "white";
}

export interface ICoordinate {
  rank: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8";
  file: "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h";
}

export interface IName {
  name: "P" | "N" | "B" | "R" | "Q" | "K";
}

export interface IPiece extends IColor, IName {
  curr: ICoordinate;
}
