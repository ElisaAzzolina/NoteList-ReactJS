import styles from "./index.module.scss";

import { useContext } from "react";
import { ApplicationContext } from "../../store";

import Note from "../note";

function NoteList() {
  const { state } = useContext(ApplicationContext);

  return (
    <div className={styles.noteList}>
      {state.noteList.map((note) => (
        <Note data={note} key={note.id} />
      ))}
    </div>
  );
}

export default NoteList;
