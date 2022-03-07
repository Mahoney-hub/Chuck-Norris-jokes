import {createTheme} from '@mui/material';
import {blueGrey, indigo} from '@mui/material/colors';

export const themeOptions = createTheme ({
    palette: {
        primary: {
            main: blueGrey[700],
        },
        secondary: {
            main: indigo[700],
        },
    },
});