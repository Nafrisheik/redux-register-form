import "./App.css";
import ReduxForm from "./components/ReduxForm";
import { Provider } from "react-redux";
import store from "./redux/store";
import CustomizedTables from "./components/Table";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={CustomizedTables} />
            <Route path="/form" component={ReduxForm} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
