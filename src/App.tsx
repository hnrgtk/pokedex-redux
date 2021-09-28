import { BrowserRouter, Route, Switch } from "react-router-dom";
import Detail from "./pages/Detail";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/pokemon/:name" exact component={Detail} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
