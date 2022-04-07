import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.css';
import {
  Switch,
  Redirect,
  Route,
  Link,
  useHistory
} from "react-router-dom";
import { Welcome } from './Welcome';
import { FoodList } from './FoodList';
import { NotFound } from './NotFound';
import { InitialFood_list } from './InitialFood_list';
import { AddFood } from './AddFood';
import { FoodDetails } from './FoodDetails';
import { EditFood } from './EditFood';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Paper from '@mui/material/Paper';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

// fetch("https://my-json-server.typicode.com/SaranyaS-12200/foodrecipedata/foodrecipeapp",{method:"GET "})
// .then((data)=>data.json())
// .then((mvs)=>console.log(mvs));

function App() {
  const [Food_list, setFood_list] = useState(InitialFood_list);//InitialFood_list
  const history = useHistory();
  const [mode, setMode] = useState("light");
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  
  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={4} style={{ borderRadius: "0px", minHeight: "100vh" }}>
        <div className="App">
          <AppBar position="static">
            <Toolbar>
              <Button color="inherit"
                onClick={() => history.push("/")}
              >Home</Button>
              <Button color="inherit"
                onClick={() => history.push("/foodfeast")}
              >FoodList</Button>
              <Button color="inherit"
                onClick={() => history.push("/foodfeast/add")}
              >AddFavorite Food</Button>
              <Button
                color="inherit"
                style={{ marginLeft:"auto"}}
                startIcon={mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                onClick={() => setMode(mode === "light" ? "dark" : "light")}
              >{mode === "light" ? "dark" : "light"} Mode</Button>
            </Toolbar>
          </AppBar>
          <div className='route_container'>
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
                <FoodList  />
              </Route>
              <Route path="**">
                <NotFound />
              </Route>
            </Switch>
          </div>
        </div>
      </Paper >
    </ThemeProvider>
  );
}

export default App;

// fetch("https://my-json-server.typicode.com/SaranyaS-12200/foodrecipedata/foodrecipeapp")
// .then((data)=>data.json())
// .then((data)=>console.log(data));


