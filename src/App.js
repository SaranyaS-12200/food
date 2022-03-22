import { useState } from 'react';
import './App.css';
import {
  Switch,
  Redirect,
  Route,
  Link
} from "react-router-dom";
import { Welcome } from './Welcome';
import { FoodList } from './FoodList';
import { NotFound } from './NotFound';
import { InitialFood_list } from './InitialFood_list';
import { AddFood } from './AddFood';
import { FoodDetails } from './FoodDetails';
import { EditFood } from './EditFood';
function App() {

  const [Food_list, setFood_list] = useState(InitialFood_list);

  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/foodfeast">FoodFeast</Link>
        </li>
        <li>
          <Link to="/foodfeast/add">Add Favorite Food</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/">
          <Welcome />
        </Route>
        <Route path="/foodfestival">
          <Redirect to="/foodfeast" />
        </Route>
        <Route path="/foodfeast/add">
          <AddFood Food_list={Food_list} setFood_list={setFood_list} />
        </Route>
        <Route path="/foodfeast/edit/:id">
          <EditFood Food_list={Food_list} setFood_list={setFood_list} />
        </Route>
        <Route path="/foodfeast/:id">
          <FoodDetails Food_list={Food_list} />
        </Route>
        <Route path="/foodfeast">
          <FoodList Food_list={Food_list} setFood_list={setFood_list} />
        </Route>
        <Route path="**">
          <NotFound />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
