import styles from "./index.module.scss";

import { useContext } from "react";
import { ApplicationContext } from "../../store";
import { ACTIONS } from "../../store/ACTIONS";

function Note({ data }) {
  const { dispatch } = useContext(ApplicationContext);

  const onHandleDelete = () => {
    dispatch({ type: ACTIONS.DELETE_NOTE, payload: data.id });
  };

  return (
    <div className={styles.note}>
      <h2>{data.title}</h2>
      <p>{data.content}</p>
      <button onClick={onHandleDelete}>x</button>
    </div>
  );
}

export default Note;
