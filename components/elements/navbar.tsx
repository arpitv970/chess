import Link from "next/link";
import { Button } from "../ui/button";

export const Navbar = () => {
  return (
    <nav className="absolute w-screen py-3 border">
      <div className="flex w-3/4 mx-auto justify-between items-center">
        <h1 className="text-3xl font-black">Chess</h1>
        <div className="space-x-3">
          <Link href={"/"}>
            <Button variant={"ghost"}>Home</Button>
          </Link>
          <Link href={"/rules"}>
            <Button variant={"ghost"}>Rules</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
