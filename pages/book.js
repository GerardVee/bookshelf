import 'isomorphic-fetch';
import { Component } from 'react';

import Header from '../components/Header';
import BookInfo from '../components/book/BookInfo';

import '../styles/index.scss';

export default class extends Component
{
    static async getInitialProps({ query })
    {
        const { id } = query;
        const req = await fetch('https://www.googleapis.com/books/v1/volumes/' + id);
        const json = await req.json();
        return { bookdetails: json };
    }

    render()
    {
        const { bookdetails: { id, volumeInfo } } = this.props;
        return (
            <div className='bookshelf-page'>
                <Header />
                <BookInfo id={ id } { ...volumeInfo } />
            </div>
        );
    }
}