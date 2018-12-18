import App, { Container } from 'next/app';
import { makeStore, saveState } from '../ducks/store';
import CssBaseline from '@material-ui/core/CssBaseline';
import { JssProvider } from 'react-jss';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import React from 'react';
import Router from 'next/router';
import Snackbar from '../components/Snackbar';
import getPageContext from '../utils/getPageContext';
import throttle from 'lodash/throttle';
import withRedux from 'next-redux-wrapper';

class MyApp extends App
{
    constructor(props)
    {
        super(props);
        this.pageContext = getPageContext();
    }

    static async getInitialProps({ Component, ctx })
    {
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
        return { pageProps, path: ctx.asPath };
    }

    componentDidMount()
    {
        const { store, path } = this.props;
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles && jssStyles.parentNode)
        {
            jssStyles.parentNode.removeChild(jssStyles);
        }
        if (store.getState().user.utoken === '' && path !== '/login')
        {
            Router.push('/' + 'login');
        }
        store.subscribe(throttle(() =>
        {
            saveState(store.getState());
        }, 1000));
    }

    render()
    {
        const { Component, store, pageProps, path } = this.props;
        return (
            <Container>
                <JssProvider registry={ this.pageContext.sheetsRegistry } generateClassName={ this.pageContext.generateClassName }>
                    <MuiThemeProvider theme={ this.pageContext.theme } sheetsManager={ this.pageContext.sheetsManager }>
                        <CssBaseline />
                        <Provider store={ store }>
                            <>
                                <Component pageContext={ this.pageContext } { ...pageProps } path={ path } />
                                <Snackbar />
                            </>
                        </Provider>
                    </MuiThemeProvider>
                </JssProvider>
            </Container>
        );
    }
}

export default withRedux(makeStore)(MyApp);