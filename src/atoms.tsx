import { atom } from "recoil";

export interface ToDoObject {
  id: string;
  text: string;
}

interface ToDoStateInterface {
  [key: string]: ToDoObject[];
}
export const toDoState = atom<ToDoStateInterface>({
  key: "toDo",
  default: {
    TODO: [],
    DOING: [],
    DONE: [],
  },
});
