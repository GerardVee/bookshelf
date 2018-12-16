import { createGenerateClassName, createMuiTheme } from '@material-ui/core/styles';
import { SheetsRegistry } from 'jss';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';

export const theme = createMuiTheme({
    palette:
    {
        primary:
        {
            light: blue[600],
            main: blue[800],
            dark: blue[900],
        },
        secondary:
        {
            light: red[500],
            main: red[700],
            dark: red[900],
        },
    },
    typography: { useNextVariants: true, },
});

function createPageContext()
{
    return {
        theme,
        sheetsManager: new Map(),
        sheetsRegistry: new SheetsRegistry(),
        generateClassName: createGenerateClassName(),
    };
}

export default function getPageContext()
{
    if (!process.browser)
    {
        return createPageContext();
    }
    if (!global.__INIT_MATERIAL_UI__)
    {
        global.__INIT_MATERIAL_UI__ = createPageContext();
    }
    return global.__INIT_MATERIAL_UI__;
};