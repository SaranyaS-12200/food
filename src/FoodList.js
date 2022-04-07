import { Foodfeast } from "./Foodfeast";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import { useHistory } from "react-router-dom";
import { useEffect,useState } from "react";
import {InitialFood_list} from "./InitialFood_list";


export function
  FoodList() {
    // { Food_list, setFood_list }
    const history = useHistory();
    const [Food_list, setFood_list] = useState([]);//InitialFood_list
    useEffect(()=>{ 
      fetch("https://my-json-server.typicode.com/SaranyaS-12200/foodrecipedata/foodrecipeapp",{method : "GET"})
      .then((data)=>data.json())
      .then((data)=>setFood_list(data));
    },[]);
  return (
    <div className='Food_list'>
      {Food_list.map(({ name, poster, rating, summary }, index) => {
        return (
          <Foodfeast
            key={index}
            name={name}
            poster={poster}
            rating={rating}
            summary={summary}
            deleteButton={
              <IconButton
              style={{ marginLeft:"auto"}}
                aria-label="delete"
                color="error"
                onClick={() => {
                  console.log(index);
                  const copyFood_list = [...Food_list];
                  copyFood_list.splice(index, 1);
                  setFood_list(copyFood_list);
                }}
              >
                <DeleteIcon />
              </IconButton>
            }
            editButton={
              <IconButton
                aria-label="Edit"
                color="secondary"
                onClick={() => {
                  console.log(index);
                  history.push(`/foodfeast/edit/${index}`)
                }}
              >
                <EditIcon />
              </IconButton>
            }
            id={index}
          />
        );
      })}
    </div>
  );
}
