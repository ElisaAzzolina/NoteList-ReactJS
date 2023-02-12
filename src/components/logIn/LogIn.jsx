import styles from "./index.module.scss";

import { useState, useContext } from "react";
import { ApplicationContext } from "../../store";
import { ACTIONS } from "../../store/ACTIONS";

function LogIn() {
  const { dispatch } = useContext(ApplicationContext);
  const [userName, setUserName] = useState("");

  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.SET_USERNAME, payload: userName });
  };

  return (
    <div className={styles.logIn}>
      <h1>Login</h1>
      <form onSubmit={onHandleSubmit}>
        <input
          type="text"
          value={userName}
          id="userName"
          name="userName"
          placeholder="Nome Utente"
          onChange={(e) => setUserName(() => e.target.value)}
        />
        <input type="submit" value="Accedi" />
      </form>
    </div>
  );
}

export default LogIn;
