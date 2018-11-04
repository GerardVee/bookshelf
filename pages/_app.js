import App, { Container } from 'next/app';
import { Provider } from 'react-redux';
import Router from 'next/router';
import withRedux from 'next-redux-wrapper';
import throttle from 'lodash/throttle';

import { makeStore, saveState } from '../ducks/store';
import Snackbar from '../components/Snackbar';

class MyApp extends App
{
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
    }

    render()
    {
        const { Component, pageProps, store } = this.props;
        return (
            <Container>
                <Provider store={ store }>
                    <>
                        <Component { ...pageProps } />
                        <Snackbar />
                    </>
                </Provider>
            </Container>
        );
    }
}

export default withRedux(makeStore)(MyApp);