export interface IColor {
  color: "black" | "white";
}

export interface IPiece extends IColor {
  name: string;
}
