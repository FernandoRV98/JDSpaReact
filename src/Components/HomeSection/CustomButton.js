import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const CustomButton = styled(Button)({
    color: '#fff',
    backgroundColor: '#99475f',
    fontFamily:'Open Sans',
    '&:hover': {
        backgroundColor: '#ef909e',
    },
});

export default CustomButton;