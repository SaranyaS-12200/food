import { useHistory, useParams } from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Button from '@mui/material/Button';
import { useEffect,useState } from "react";

export function FoodDetails() {
  const[food,setFood]=useState({});
  const history = useHistory();
  const { id } = useParams();
  // console.log(id, Food_list);
  // const Food = Food_list[id];

  useEffect(()=>{
    fetch(`https://my-json-server.typicode.com/SaranyaS-12200/foodrecipedata/foodrecipeapp/${id}`,{
      method:"GET"
    }).then((data)=>data.json())
    .then((data)=>setFood(data))
  },[]);
  return (
    <div className='foodDetail_container1'>
      <iframe
        width="100%"
        height="650"
        src={food.recipe_url}
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div className='Foodspace'>
        <h3 className='Food_name'>{food.name}</h3>
        <p className='Food_rating'>⭐{food.rating}</p>
      </div>
      <p className='Food_summary'>{food.summary}</p>
      <Button
        variant="contained"
        onClick={() => history.goBack()}
        startIcon={<ArrowBackIosIcon />}>
        Back
      </Button>
    </div>
  );
}
