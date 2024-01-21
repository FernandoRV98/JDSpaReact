import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const CustomButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText('#D6A3B2'),
    backgroundColor: '#D6A3B2',
    fontFamily:'Open Sans',
    '&:hover': {
        backgroundColor: '#B5838D',
    },
}));

export default CustomButton;