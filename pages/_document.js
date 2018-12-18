import Document, { Head, Main, NextScript } from 'next/document';
import PropTypes from 'prop-types';
import React from 'react';
import flush from 'styled-jsx/server';

class MyDocument extends Document
{
    render()
    {
        const { pageContext } = this.props;
        return (
            <html lang='en' dir='ltr'>
                <Head>
                    <meta charSet='utf-8' />
                    <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no' />
                    <meta name='description' content='Bookshelf - Share your love of books!' />
                    <meta property='og:description' content='Bookshelf - Share your love of books!' />
                    <meta property='og:image' content='https://s3.amazonaws.com/gerardvee/site/1545010587062.png' />
                    <meta name='theme-color' content={ pageContext.theme.palette.primary.main } />
                    <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500' />
                    <link rel='icon' type='image/png' href='https://s3.amazonaws.com/gerardvee/site/1545010587062.png' />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}

MyDocument.getInitialProps = ctx =>
{
    let pageContext;
    const page = ctx.renderPage(Component =>
    {
        const WrappedComponent = props =>
        {
            pageContext = props.pageContext;
            return <Component { ...props } />;
        };
        WrappedComponent.propTypes = { pageContext: PropTypes.object.isRequired };
        return WrappedComponent;
    });
    return {
        ...page,
        pageContext,
        // Styles fragment is rendered after the app and page rendering finish.
        styles: (
            <React.Fragment>
                <style id='jss-server-side'
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={{ __html: pageContext.sheetsRegistry.toString() }}
                />
                { flush() || null }
            </React.Fragment>
        ),
    };
};

export default MyDocument;