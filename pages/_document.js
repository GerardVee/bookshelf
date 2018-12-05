import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import JssProvider from 'react-jss/lib/JssProvider';
import flush from 'styled-jsx/server';

import getPageContext from '../utils/getPageContext';

class MyDocument extends Document
{
    static async getInitialProps(ctx)
    {
        const pageContext = getPageContext();
        const page = ctx.renderPage(Component =>
        {
            const WrappedComponent = props =>
            {
                return <Component { ...props } />;
            };
            return WrappedComponent;
        });
        return { ...page, pageContext, styles: (<React.Fragment>
                <style id='jss-server-side' dangerouslySetInnerHTML={{ __html: pageContext.sheetsRegistry.toString() }} />
                { flush() || null }
            </React.Fragment>
        )};
    }

    render()
    {
        const { pageContext } = this.props;
        return (
            <html lang='en' dir='ltr'>
                <Head>
                    <meta charSet='utf-8' />
                    <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no' />
                    <meta name='theme-color' content={ pageContext.theme.palette.primary.main } />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}

export default MyDocument;