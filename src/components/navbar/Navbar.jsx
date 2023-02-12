import styles from "./index.module.scss";

import { useContext } from "react";
import { ApplicationContext } from "../../store";
import { ACTIONS } from "../../store/ACTIONS";

function Navbar() {
  const { state, dispatch } = useContext(ApplicationContext);
  const Logout = () => {
    localStorage.removeItem("userName");
    dispatch({ type: ACTIONS.DELETE_USERNAME });
  };

  const onHandleSearch = (e) => {
    dispatch({ type: ACTIONS.SEARCH_NOTE, payload: e.target.value });
  };
  return (
    <div className={styles.navbar}>
      <div className={styles.title}>
        <h2>Ecco le tue Note</h2>
        <p>
          Puoi scorrere tra le diverse note per rileggerle, modificarle o
          eliminarle.
        </p>
        <input
          onInput={onHandleSearch}
          type="text"
          id="search"
          name="search"
          placeholder="Cerca"
        />
      </div>
      <div className={styles.user}>
        <h2>
          Ciao, <span>{state.user.userName}</span>!
        </h2>
        <button onClick={() => Logout()}>
          Non sei <span>{state.user.userName}</span>?
        </button>
      </div>
    </div>
  );
}

export default Navbar;
