import { atom, selector } from "recoil";

export const toDosState = atom({
  key: "toDosState",
  default: ["a", "b", "c", "d", "e", "f", "g", "h"],
});
