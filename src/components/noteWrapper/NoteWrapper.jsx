import styles from "./index.module.scss";

import { useContext } from "react";
import { ApplicationContext, initialState } from "../../store";
import NoteList from "../noteList/NoteList";

function NoteWrapper() {
  //const { dispatch } = useContext(ApplicationContext);

  console.log(initialState.noteList);
  return (
    <div className={styles.noteWrapper}>
      <NoteList />
    </div>
  );
}

export default NoteWrapper;
