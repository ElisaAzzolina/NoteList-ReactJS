import styles from "./App.module.scss";

import { ApplicationContext } from "./store";
import { useReducer } from "react";
import { initialState } from "./store";
import { globalReducer } from "./store/reducers";

import AddNote from "./components/addNote";
import NoteWrapper from "./components/noteWrapper/NoteWrapper";
import LogIn from "./components/logIn/LogIn";
import Navbar from "./components/navbar/Navbar";

function App() {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  return (
    <div className={styles.app}>
      <ApplicationContext.Provider value={{ state, dispatch }}>
        {!state.user.userName && !localStorage.getItem("userName") ? (
          <LogIn />
        ) : (
          <>
            <main>
              <div className={styles.sxSide}>
                <AddNote />
              </div>
              <div className={styles.dxSide}>
                <Navbar />
                <NoteWrapper />
              </div>
            </main>
          </>
        )}
      </ApplicationContext.Provider>
    </div>
  );
}

export default App;
