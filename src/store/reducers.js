import { ACTIONS } from "./ACTIONS";

const globalReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_NEW_NOTE:
      localStorage.setItem(
        "noteList",
        JSON.stringify([...state.noteList, action.payload])
      );
      localStorage.setItem(
        "noteList-To-Filter",
        JSON.stringify([...state.noteListToFilter, action.payload])
      );
      return {
        ...state,
        noteList: [...state.noteList, action.payload],
        noteListToFilter: [...state.noteList, action.payload],
      };

    case ACTIONS.DELETE_NOTE:
      return {
        ...state,
        noteList: state.noteList.filter((note) => note.id !== action.payload),
      };

    case ACTIONS.SEARCH_NOTE:
      return {
        ...state,
        noteList: state.noteListToFilter.filter((note) =>
          note.title.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };

    case ACTIONS.SET_USERNAME:
      localStorage.setItem("userName", action.payload);
      return {
        ...state,
        user: {
          ...state.user,
          userName: action.payload,
        },
      };

    case ACTIONS.DELETE_USERNAME:
      localStorage.removeItem("userName");
      return {
        ...state,
        user: { ...state.user, userName: "" },
      };
  }
};

export { globalReducer };
