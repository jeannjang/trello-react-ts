import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "todoLocal",
  storage: localStorage,
});

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
  effects_UNSTABLE: [persistAtom],
});
