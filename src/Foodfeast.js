import { useState } from 'react';
import IconButton from '@mui/material/IconButton';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoIcon from '@mui/icons-material/Info';

import { Counter } from './Counter';
import { useHistory } from "react-router-dom";


export function Foodfeast({ name, poster, summary, rating, deleteButton, id, editButton }) {
  const [showFood, setShowFood] = useState(true);
  const history = useHistory();
  const color = {
    color: rating > 4.7 ? "green" : "red",
  };
  return (
    <Card className='food_container1'>
      <img src={poster} alt={name} className='Food_poster' />
      <CardContent>
        <div className='Foodspace'>
          <h2 className='Food_name'>{name}
            <IconButton color="primary" aria-label="Toogle_Foodsummary"
              onClick={() => {
                setShowFood(!showFood);
              }}
            >
              {showFood ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
            <IconButton color="primary" aria-label="Toogle_Foodsummary"
              onClick={() => {
                history.push(`/foodfeast/${id}`)
              }}
            >
              <InfoIcon />
            </IconButton>
          </h2>
          <p className='Food_rating' style={color}>⭐{rating}</p>
        </div>
        {showFood ? <p className='Food_summary'>{summary}</p> : ""}
      </CardContent>
      <CardActions>
        <Counter />{deleteButton}{editButton}
      </CardActions>
    </Card>
  );
}
