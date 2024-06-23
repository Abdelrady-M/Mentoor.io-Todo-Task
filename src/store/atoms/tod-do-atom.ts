import { atom } from "@mongez/react-atom";
import { ITodo } from "../../types";


export const todoAtom = atom<ITodo[]>({
  key: "todos",
  default: [],
})

