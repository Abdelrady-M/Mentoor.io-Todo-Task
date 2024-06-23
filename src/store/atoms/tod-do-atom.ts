import { atom } from "@mongez/react-atom";
import { ITodo } from "../../types";


export const todoAtom = atom<ITodo[]>({
  key: "todos",
  default: [{
      id: 1,
      title: "React [Mongez]",
      completed: true
  }],
})

