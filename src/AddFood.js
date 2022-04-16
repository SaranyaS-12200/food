import { useState } from 'react';
import { useHistory } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export function AddFood({ Food_list, setFood_list }) {
  const history = useHistory();
  const [foodname, setFoodname] = useState('');
  const [foodposter, setFoodposter] = useState('');
  const [foodrating, setFoodrating] = useState('');
  const [foodsummary, setFoodsummary] = useState('');
  const [foodrecipe_video, setFoodrecipe_video] = useState('');
  return (
    <div>
      <h1 className='FoodForm_heading'>Welcome to Food Festival!!!🥗🥤🍹🥪</h1>
      <h2 className='FoodForm_heading'>Add your "FAVORITE FOOD RECIPE😋😊 " and win the Festival!!!🎉🎊✨🎉</h2>
      <div className='Add_FoodForm'>
        <TextField id="outlined-basic" label="FoodName:" variant="outlined" value={foodname}
          onChange={(event) => setFoodname(event.target.value)} />
        <TextField id="outlined-basic" label="FoodPoster" variant="outlined" value={foodposter}
          onChange={(event) => setFoodposter(event.target.value)} />
        <TextField id="outlined-basic" label="FoodRecipe_video" variant="outlined" value={foodrecipe_video}
          onChange={(event) => setFoodrecipe_video(event.target.value)} />
        <TextField id="outlined-basic" label="FoodRating" variant="outlined" value={foodrating}
          onChange={(event) => setFoodrating(event.target.value)} />
        <TextField id="outlined-basic" label="FoodSummary" variant="outlined" value={foodsummary} onChange={(event) => setFoodsummary(event.target.value)} />
        <Button variant="contained"
          onClick={() => {
            console.log(foodname, foodposter, foodsummary, foodrating, foodrecipe_video);

            const newFood = {
              name: foodname,
              poster: foodposter,
              rating: foodrating,
              summary: foodsummary,
              recipe_url: foodrecipe_video
            };
   
            const copyFood_list=[...Food_list,newFood];
            setFood_list(copyFood_list);
            // setFood_list([...Food_list, newFood]);
            history.push("/foodfeast");
          }}
        >Add Food🧆</Button>
      </div>
    </div>
  );
}

