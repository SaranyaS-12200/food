import { useState } from 'react';
import { useHistory, useParams } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export function EditFood({ Food_list, setFood_list }) {
  const { id } = useParams();
  const Food = Food_list[id];
  console.log(Food);
  const history = useHistory();
  const [foodname, setFoodname] = useState(Food.name);
  const [foodposter, setFoodposter] = useState(Food.poster);
  const [foodrating, setFoodrating] = useState(Food.rating);
  const [foodsummary, setFoodsummary] = useState(Food.summary);
  const [foodrecipe_video, setFoodrecipe_video] = useState(Food.recipe_url);
  return (
    <div>
      <h1 className='FoodForm_heading'>Welcome to Food Festival!!!🥗🥤🍹🥪</h1>
      <h2 className='FoodForm_heading'>Edit your "FAVORITE FOOD RECIPE😋😊 " !!!🎉🎊✨🎉</h2>
      <div className='Add_FoodForm'>
        <TextField id="outlined-basic"
          label="FoodName:"
          variant="outlined"
          value={foodname}
          onChange={(event) => setFoodname(event.target.value)} />
        <TextField id="outlined-basic"
          label="FoodPoster"
          variant="outlined"
          value={foodposter}
          onChange={(event) => setFoodposter(event.target.value)} />
        <TextField id="outlined-basic"
          label="FoodRecipe_video"
          variant="outlined"
          value={foodrecipe_video}
          onChange={(event) => setFoodrecipe_video(event.target.value)} />
        <TextField id="outlined-basic"
          label="FoodRating"
          variant="outlined"
          value={foodrating}
          onChange={(event) => setFoodrating(event.target.value)} />
        <TextField id="outlined-basic"
          label="FoodSummary"
          variant="outlined"
          value={foodsummary}
          onChange={(event) => setFoodsummary(event.target.value)} />
        <Button
          variant="contained"
          color="success"
          onClick={() => {
            console.log(foodname, foodposter, foodsummary, foodrating, foodrecipe_video);

            const updatedFood = {
              name: foodname,
              poster: foodposter,
              rating: foodrating,
              summary: foodsummary,
              recipe_url: foodrecipe_video
            };
            const copyFood_list = [...Food_list];
            copyFood_list[id] = updatedFood;
            setFood_list(copyFood_list);
            history.push("/foodfeast");
          }}
        >Save Food🧆</Button>
      </div>
    </div>
  );
}
