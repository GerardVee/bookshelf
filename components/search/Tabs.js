import { Component } from 'react';
import Router from 'next/router';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Avatar from '@material-ui/core/Avatar';
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
                { value === 'users' && <div className='col bookshelf-search-user-results'>
                    { userSearch.map(({ username, profile_picture }) => (
                        <div className='row align-center bookshelf-search-user-result' onClick={ () => Router.push(`${ base }user?name=${ username }`)}>
                            <Avatar alt={ username } src={ profile_picture } className='bookshelf-search-user-avatar' />
                            <Typography variant='title' color='primary' className='bookshelf-search-user-username'>{ username }</Typography>
                        </div>
                    ))}
                </div>}   
                { value === 'books' && <div className='col bookshelf-search-book-results'>
                    { bookSearch.map(result => (
                        <div className='row align-center bookshelf-search-book-result'>
                            { result.volumeInfo.imageLinks && result.volumeInfo.imageLinks.smallThumbnail && <img src={ result.volumeInfo.imageLinks.smallThumbnail } className='bookshelf-search-book-result-image' /> }
                            { (!(result.volumeInfo.imageLinks) || !(result.volumeInfo.imageLinks.smallThumbnail)) && <img src='https://books.google.com/googlebooks/images/no_cover_thumb.gif' className='bookshelf-search-book-result-image' /> }
                            <div className='col bookshelf-search-book-result-info'>
                                <Typography variant='title' color='primary' onClick={ () => Router.push(`${ base }book?id=${ result.id }`) }
                                    className='center'>{ result.volumeInfo.title }</Typography>
                                <Typography variant='body1' color='default' className='black center'>{ result.volumeInfo.authors ? 'by ' + result.volumeInfo.authors.join(', ') : '' }</Typography>
                            </div>
                        </div>
                    ))}
                </div>}
            </>
        );
    }
}