// MultiActionAreaCard.js
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function MultiActionAreaCard({ massage }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg" // Aquí puedes poner la imagen correspondiente a cada masaje
          alt={massage.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {massage.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {massage.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Ver Más
        </Button>
        <Typography variant="body2" color="text.secondary">
            {`Precio: $${massage.price}`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {`Duración: ${massage.time}`}
        </Typography>
      </CardActions>
    </Card>
  );
}
