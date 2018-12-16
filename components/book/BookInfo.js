import { Component } from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import NoSsr from '@material-ui/core/NoSsr';

import { selectReadingBook, selectReadBook, removeReadBook, selectWillReadBook, removeWillReadBook } from '../../ducks/actions';

const base = '/';

const mapStateToProps = (state) =>
({
    myUser: state.user,
});

const mapDispatchToProps = (dispatch) =>
({
    selectReadingBook: (user, book) => dispatch(selectReadingBook({ username: user.username, utoken: user.utoken, book })),
    selectReadBook: (user, book) => dispatch(selectReadBook({ username: user.username, utoken: user.utoken, book })),
    removeReadBook: (user, index) => dispatch(removeReadBook({ username: user.username, utoken: user.utoken, index })),
    selectWillReadBook: (user, book) => dispatch(selectWillReadBook({ username: user.username, utoken: user.utoken, book })),
    removeWillReadBook: (user, index) => dispatch(removeWillReadBook({ username: user.username, utoken: user.utoken, index })),
});

export default connect(mapStateToProps, mapDispatchToProps)(class extends Component
{
    render()
    {
        const { myUser, id, title, authors, publishedDate,
            description, averageRating, imageLinks, industryIdentifiers,
            selectReadingBook, selectReadBook, removeReadBook, selectWillReadBook, removeWillReadBook } = this.props;
        const currentlyReading = myUser.books.reading.book_id === id;
        const currentlyReadingNone = myUser.books.reading.book_id === '';
        const hasRead = myUser.books.have_read ? myUser.books.have_read.find((bk) => bk.book_id === id) : false;
        const willHaveRead = myUser.books.will_read ? myUser.books.will_read.find((bk) => bk.book_id === id) : false;
        const thisBook = { book_id: id, title, authors, book_link: 'book?id=' + id, image_link: imageLinks ? imageLinks.small : 'https://books.google.com/googlebooks/images/no_cover_thumb.gif' };
        return (
            <div className='col bookshelf-book-main'>
                <div className='row align-center'>
                    <img src={ imageLinks ? imageLinks.small : 'https://books.google.com/googlebooks/images/no_cover_thumb.gif' } className='bookshelf-book-main-image' />
                    <div className='col bookshelf-book-main-stats'>
                        <Typography variant='display3' color='default' onClick={ () => Router.push(`${ base }book?id=${ id }`) }
                            className='black center bookshelf-book-main-stats-title'>{ title }</Typography>
                        <Typography variant='display1' color='default' className='black center'>{ authors ? 'by ' + authors.join(', ') : '' }</Typography>
                        <Typography variant='display1' color='default' className='black center'>{ publishedDate }</Typography>
                        <Typography variant='headline' color='default' className='black center'>{ averageRating ? averageRating + '⭐' : '' }</Typography>
                        { currentlyReading && <Typography variant='headline' color='primary' className='center'>Current Book</Typography> }
                        <div className='row'>
                            <NoSsr>
                                { currentlyReading && <Button variant='contained' color='primary' disabled>Reading</Button> }
                                { !(currentlyReading) && !(currentlyReadingNone) && <Tooltip title='This will replace your current book'>
                                    <Button variant='contained' color='primary' onClick={ () =>{ selectReadBook(myUser, myUser.books.reading); selectReadingBook(myUser, thisBook); } }>Reading</Button>
                                </Tooltip> }
                                { currentlyReadingNone && <Button variant='contained' color='primary' onClick={ () => selectReadingBook(myUser, thisBook) }>Reading</Button> }
                                { currentlyReading && <Button variant='contained' color='default' disabled>Read</Button> }
                                { hasRead && <Button variant='contained' color='secondary' onClick={ () => removeReadBook(myUser, myUser.books.have_read.findIndex(bk => bk.book_id === id)) }>Remove Read</Button> }
                                { !(currentlyReading) && !(hasRead) && <Button variant='contained' color='default' onClick={ () => selectReadBook(myUser, thisBook) }>Read</Button> }
                                { currentlyReading && <Button variant='contained' color='default' disabled>Will Read</Button> }
                                { willHaveRead && <Button variant='contained' color='secondary' onClick={ () => removeWillReadBook(myUser, myUser.books.will_read.findIndex(bk => bk.book_id === id)) }>Remove Will Read</Button> }
                                { !(currentlyReading) && !(willHaveRead) && <Button variant='contained' color='default' onClick={ () => selectWillReadBook(myUser, thisBook) }>Will Read</Button> }
                            </NoSsr>
                        </div>
                    </div>
                </div>
                { industryIdentifiers && <Typography variant='body2' color='default' className='center bookshelf-book-main-stats-isbn'>ISBN10 { industryIdentifiers.find(({ type }) => type === 'ISBN_10').identifier || 'N/A' }</Typography> }
                { industryIdentifiers && <Typography variant='body2' color='default' className='center'>ISBN13 { industryIdentifiers.find(({ type }) => type === 'ISBN_13').identifier || 'N/A' }</Typography> }
                <Typography variant='subheading' color='default' className='bookshelf-book-main-description'>{ description ? description.replace(/<(?:.|\n)*?>/gm, '') : '' }</Typography>
            </div>
        );
    }
});