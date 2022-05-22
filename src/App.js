import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Logout from "./pages/Logout";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route exact path="/logout">
            <Logout />
          </Route>
          <Route
            exact
            path="/create"
            render={(props) => {
              return <SignUp />;
            }}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
