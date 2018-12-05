import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';

export const theme = createMuiTheme(
{
    palette:
    {
        default:
        {
            main: '#000000',
        },
        primary:
        {
            main: blue[800],
        },
        secondary:
        {
            main: red[700],
        },
    }
});