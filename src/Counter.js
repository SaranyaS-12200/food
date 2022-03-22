import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

export function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  return (
    <div className='Counter_container'>
      <IconButton aria-label="Like Button "
        color="primary"
        className="like_dislike" onClick={() => setLike(like + 1)}>
        <Badge badgeContent={like} color="primary">
          👍
        </Badge>
      </IconButton>
      <IconButton aria-label="Dislike Button"
        color="error"
        className="like_dislike" onClick={() => setDislike(dislike + 1)}>
        <Badge badgeContent={dislike} color="error">
          👎
        </Badge>
      </IconButton>
    </div>
  );
}
