import React from 'react';
import App, { Container } from 'next/app';
import Router from 'next/router';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import JssProvider from 'react-jss/lib/JssProvider';
import withRedux from 'next-redux-wrapper';
import throttle from 'lodash/throttle';

import { makeStore, saveState } from '../ducks/store';
import Snackbar from '../components/Snackbar';
import getPageContext from '../utils/getPageContext';

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
        if (store.getState().user.utoken === '' && path !== '/login')
        {
            Router.push('/' + 'login');
        }
        store.subscribe(throttle(() =>
        {
            saveState(store.getState());
        }, 1000));
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles && jssStyles.parentNode)
        {
            jssStyles.parentNode.removeChild(jssStyles);
        }
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