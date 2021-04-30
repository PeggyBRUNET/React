import { Fragment } from 'react'
import Exam from "./components/Exam"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={Exam} />
        </Switch>
          </Router>
    </Fragment>
  );
}

export default App;
