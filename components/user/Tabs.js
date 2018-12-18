import 'isomorphic-fetch';
import React, { Component } from 'react';
import BookCard from '../BookCard';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import NoSsr from '@material-ui/core/NoSsr';
import Paper from '@material-ui/core/Paper';
import PostCard from '../PostCard';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
    gridList:
    {
        width: '100%',
        height: '100%'
    }
});

export default withStyles(styles)(class extends Component
{
    state = { value: 'posts' };

    handleChange = (event, value) => this.setState({ value });

    render()
    {
        const { user, posts, setLikeOnPost, classes } = this.props;
        const { will_read, have_read } = user.books;
        const reading = user.books.reading ? user.books.reading : { book_id: '' };
        const { value } = this.state;
        return (
            <>
                <NoSsr>
                    <Paper square className='bookshelf-profile-tabs-container'>
                        <Tabs value={ value } indicatorColor='primary' textColor='primary' onChange={ this.handleChange }>
                            <Tab value='posts' label='Posts' />
                            <Tab value='books' label='Books' />
                        </Tabs>
                    </Paper>
                </NoSsr>
                { value === 'posts' && (
                    <div className='bookshelf-profile-books-container'>
                        { (posts ? posts.length === 0 : true) && <Typography variant='title' color='default'>No posts yet</Typography> }
                        { posts.length > 0 && (
                            <GridList className={ classes.gridList } cols={ 3 }>
                                { posts.map(post => (
                                    <GridListTile key={ post.post_id } cols={ 1 }>
                                        <PostCard { ...post } setLikeOnPost={ (liked) => setLikeOnPost(post.post_id, liked) } />
                                    </GridListTile> ))}
                            </GridList> )}
                    </div> )}
                { value === 'books' && (
                    <div className='bookshelf-profile-books-container'>
                        <div className='bookshelf-profile-books-container-shelf col'>
                            <Typography variant='title' color='default'>Book I{ '\'' }m reading</Typography>
                            { reading.book_id !== '' && <BookCard { ...reading } immutable /> }
                            { reading.book_id === '' && <Typography variant='subheading' color='default'>No book here yet</Typography> }
                        </div>
                        <div className='bookshelf-profile-books-container-shelf col'>
                            <Typography variant='title' color='default'>Books I{ '\'' }ve read ({ have_read.length })</Typography>
                            <div className='row wrap'>
                                { have_read.map((book) => (
                                    <BookCard key={ 'b_hr_' + book.book_id } { ...book } immutable /> ))}
                                { have_read.length === 0 && <Typography variant='subheading' color='default'>No books here yet</Typography> }
                            </div>
                        </div>
                        <div className='bookshelf-profile-books-container-shelf col'>
                            <Typography variant='title' color='default'>Books I{ '\'' }ll read ({ will_read.length })</Typography>
                            <div className='row wrap'>
                                { will_read.map((book) => (
                                    <BookCard key={ 'b_wr_' + book.book_id } { ...book } immutable/> ))}
                                { will_read.length === 0 && <Typography variant='subheading' color='default'>No books here yet</Typography> }
                            </div>
                        </div>
                    </div> )}
            </>
        );
    }
});