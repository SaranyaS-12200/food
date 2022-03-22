import { Foodfeast } from "./Foodfeast";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import { useHistory } from "react-router-dom";

export function
  FoodList({ Food_list, setFood_list }) {
  const history = useHistory();
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
