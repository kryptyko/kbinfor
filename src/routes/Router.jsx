// routes/Router.jsx
import React from 'react';
//import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { createBrowserRouter } from "react-router-dom";

import ErrorList from '../components/ErrorList';
import ErrorDetails from '../components/ErrorDetails';
import NewError from '../components/NewError';

const AppRouter = createBrowserRouter([
{
element: <Layaout/>
children: [
{

index:true,
element:<Home />,

}



]



}





])
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Error List</Link>
            </li>
            <li>
              <Link to="/new-error">New Error</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/error/:id">
            <ErrorDetails />
          </Route>
          <Route path="/new-error">
            <NewError />
          </Route>
          <Route path="/">
            <ErrorList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;