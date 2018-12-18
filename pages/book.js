import 'isomorphic-fetch';
import '../styles/index.scss';
import React, { Component } from 'react';
import BookInfo from '../components/book/BookInfo';
import Header from '../components/Header';
import Title from '../components/Title';

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
                <Title>{ volumeInfo.title }</Title>
                <Header />
                <BookInfo id={ id } { ...volumeInfo } />
            </div>
        );
    }
}