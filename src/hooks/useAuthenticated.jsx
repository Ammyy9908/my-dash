import React from "react";

function useAuthenticated() {
  const [authenticated, setAutennticated] = React.useState(false);

  React.useEffect(() => {
    if (localStorage.getItem("user")) {
      setAutennticated(true);
    }
  }, []);
  return authenticated;
}

export default useAuthenticated;
