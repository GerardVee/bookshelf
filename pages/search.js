import 'isomorphic-fetch';
import { Component } from 'react';

import { get } from '../utils/methods';
import Theme from '../theme';
import Header from '../components/Header';
import Tabs from '../components/search/Tabs';

import '../styles/index.scss';

export default class extends Component
{
    static async getInitialProps({ query })
    {
        const { name } = query;
        const booksReq = await fetch('https://www.googleapis.com/books/v1/volumes?q=' + name);
        const books = await booksReq.json();
        const usersReq = await fetch('https://78g40e4ff5.execute-api.us-east-1.amazonaws.com/prod/bookshelf/user/search/' + name, get());
        const users = await usersReq.json();
        if (typeof(users) === typeof(' '))
        {
            return { bookResults: books.items, userResults: [] };
        }
        return { bookResults: books.items, userResults: users };
    }

    render()
    {
        const { bookResults, userResults } = this.props;
        return (
            <div className='bookshelf-page'>
                <Theme>
                    <Header />
                    <Tabs bookSearch={ bookResults } userSearch={ userResults } />
                </Theme>
            </div>
        );
    }
}