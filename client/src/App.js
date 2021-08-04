import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import TodoDetail from "./pages/TodoDetail";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/todo/:id'>
          <TodoDetail />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
