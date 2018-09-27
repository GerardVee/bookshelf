import { Component } from 'react';
import Router from 'next/router';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const base = '/';

export default class extends Component
{
    state =
    {
        value: 'books',
    };

    handleChange = (event, value) => this.setState({ value });

    render()
    {
        const { bookSearch, userSearch } = this.props;
        const { value } = this.state;
        return (
            <>
                <Paper square className='bookshelf-search-tabs-container'>
                    <Tabs value={ value } indicatorColor='primary' textColor='primary' onChange={ this.handleChange }>
                        <Tab value='books' label='Books' />
                        <Tab value='users' label='Users' />
                    </Tabs>
                </Paper>
                { value === 'books' && <div className='col bookshelf-search-book-results'>
                    { bookSearch.map(result => (
                        <div className='row align-center bookshelf-search-book-result'>
                            { result.volumeInfo.imageLinks && result.volumeInfo.imageLinks.smallThumbnail && <img src={ result.volumeInfo.imageLinks.smallThumbnail } className='bookshelf-search-book-result-image' /> }
                            { (!(result.volumeInfo.imageLinks) || !(result.volumeInfo.imageLinks.smallThumbnail)) && <img src='https://books.google.com/googlebooks/images/no_cover_thumb.gif' className='bookshelf-search-book-result-image' /> }
                            <div className='col bookshelf-search-book-result-info' style={{ alignContent: 'flex-end' }}>
                                <Typography variant='title' color='primary' onClick={ () => Router.push(`${ base }book?id=${ result.id }`) }
                                    className='center'>{ result.volumeInfo.title }</Typography>
                                <Typography variant='body1' color='default' className='black center'>by { result.volumeInfo.authors.join(', ') }</Typography>
                            </div>
                        </div>
                    ))}
                </div>}
            </>
        );
    }
}