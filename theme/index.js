import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';

const theme = createMuiTheme(
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

export default ({ children }) => (
    <MuiThemeProvider theme={ theme }>
        { children }
    </MuiThemeProvider>
);