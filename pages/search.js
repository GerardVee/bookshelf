import 'isomorphic-fetch';
import { Component } from 'react';

import Theme from '../theme';
import Header from '../components/Header';
import Tabs from '../components/search/Tabs';

import '../styles/index.scss';

export default class extends Component
{
    static async getInitialProps({ query })
    {
        const { name } = query;
        const req = await fetch('https://www.googleapis.com/books/v1/volumes?q=' + name);
        const json = await req.json();
        return { bookResults: json.items };
    }

    render()
    {
        const { bookResults } = this.props;
        return (
            <div className='bookshelf-page'>
                <Theme>
                    <Header messages={ 0 } notifications={ 0 } />
                    <Tabs bookSearch={ bookResults } userSearch={ [] } />
                </Theme>
            </div>
        );
    }
}