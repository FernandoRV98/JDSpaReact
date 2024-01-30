import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom';
import {Button, CardActions} from '@mui/material';

export default function ItemCard({product}) { 
    // Obtén la primera imagen del array images
    const imageUrl = product.images[0]; 

    return (
        <Card sx={{maxWidth: 345, width: '100%'}}>
            <CardMedia
                component="img"
                height="140"
                image={imageUrl}
                alt={product.name} 
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {product.name} 
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.description} 
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary" component={Link} to={`/producto/${product.id}`}>
                    Ver Más
                </Button>
                <Typography variant="body2" color="text.secondary">
                    {`Precio: $${product.price}`} 
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {`Duración: ${product.time}`} 
                </Typography>
            </CardActions>
        </Card>
    );
}