import { createContext } from "react";

const initialState = {
  noteList: JSON.parse(localStorage.getItem("noteList")) || [],
  noteListToFilter:
    JSON.parse(localStorage.getItem("noteList-To-Filter")) || [],
  user: {
    userName: localStorage.getItem("userName"),
  },
};

const ApplicationContext = createContext(initialState);

export { initialState, ApplicationContext };
