import { createStore } from "redux";
import  {musicReducer} from "../reducer/musicReducer";

export const myStore= createStore(musicReducer);