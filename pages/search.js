import 'isomorphic-fetch';
import '../styles/index.scss';
import React, { Component } from 'react';
import Header from '../components/Header';
import Tabs from '../components/search/Tabs';
import Title from '../components/Title';
import { get } from '../utils/methods';

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
            return { bookResults: books.items, userResults: [], search: name };
        }
        return { bookResults: books.items, userResults: users, search: name };
    }

    render()
    {
        const { bookResults, userResults, search } = this.props;
        return (
            <div className='bookshelf-page'>
                <Title>Search { `"${ search.slice(0, 9) }..."` }</Title>
                <Header />
                <Tabs bookSearch={ bookResults } userSearch={ userResults } />
            </div>
        );
    }
}