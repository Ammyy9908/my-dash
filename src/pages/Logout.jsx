import React from "react";
import styles from "../Logout.module.scss";
function Logout() {
  React.useEffect(() => {
    localStorage.removeItem("user");
    setTimeout(() => {
      window.location.href = "/create";
    }, 3000);
  }, []);
  return (
    <div>
      <div className={styles.logout__wrapper}>
        <h1>Logging out...</h1>
      </div>
    </div>
  );
}

export default Logout;
