export interface IColor {
  color: "black" | "white";
}

export interface IBlock extends IColor {
  children: React.ReactNode;
}

export interface ICoordinate {
  file: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8";
  rank: "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h";
}

export interface IName {
  name: "P" | "N" | "B" | "R" | "Q" | "K";
}

export interface IPiece extends IColor {
  curr?: ICoordinate;
}

export interface IPieceBlock extends IColor, IName {
  curr?: ICoordinate;
}
