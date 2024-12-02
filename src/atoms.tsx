import { atom } from "recoil";

interface ToDoStateInterface {
  [key: string]: string[];
}
export const toDoState = atom<ToDoStateInterface>({
  key: "toDo",
  default: {
    TODO: ["a", "b", "c"],
    DOING: ["d", "e", "f"],
    DONE: ["g", "h"],
  },
});
