import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Income from './Income';
import Expense from './Expense';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/income">Income</Link>
            </li>
            <li>
              <Link to="/expense">Expense</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/income" component={Income} />
          <Route path="/expense" component={Expense} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
