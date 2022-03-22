import { useHistory, useParams } from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Button from '@mui/material/Button';

export function FoodDetails({ Food_list }) {
  const history = useHistory();
  const { id } = useParams();
  console.log(id, Food_list);
  const Food = Food_list[id];
  return (
    <div className='foodDetail_container1'>
      <iframe
        width="100%"
        height="650"
        src={Food.recipe_url}
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div className='Foodspace'>
        <h3 className='Food_name'>{Food.name}</h3>
        <p className='Food_rating'>⭐{Food.rating}</p>
      </div>
      <p className='Food_summary'>{Food.summary}</p>
      <Button
        variant="contained"
        onClick={() => history.goBack()}
        startIcon={<ArrowBackIosIcon />}>
        Back
      </Button>
    </div>
  );
}
