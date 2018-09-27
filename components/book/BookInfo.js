
import Router from 'next/router';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const base = '/';

export default ({ id, title, authors, publishedDate, description, averageRating, imageLinks, industryIdentifiers }) => (
    <div className='col bookshelf-book-main'>
        <div className='row align-center'>
            <img src={ imageLinks ? imageLinks.small : 'https://books.google.com/googlebooks/images/no_cover_thumb.gif' } className='bookshelf-book-main-image' />
            <div className='col bookshelf-book-main-stats'>
                <Typography variant='display3' color='default' onClick={ () => Router.push(`${ base }book?id=${ id }`) }
                    className='black center bookshelf-book-main-stats-title'>{ title }</Typography>
                <Typography variant='display1' color='default' className='black center'>by { authors.join(', ') }</Typography>
                <Typography variant='display1' color='default' className='black center'>{ publishedDate }</Typography>
                <Typography variant='headline' color='default' className='black center'>{ averageRating } ⭐</Typography>
                <div className='row'>
                    <Button variant='contained' color='primary'>Reading</Button>
                    <Button variant='contained' color='default'>Read</Button>
                    <Button variant='contained' color='default'>Will Read</Button>
                </div>
            </div>
        </div>
        <Typography variant='body2' color='default' className='center bookshelf-book-main-stats-isbn'>ISBN10 { industryIdentifiers.find(({ type }) => type === 'ISBN_10').identifier || 'N/A' }</Typography>
        <Typography variant='body2' color='default' className='center'>ISBN13 { industryIdentifiers.find(({ type }) => type === 'ISBN_13').identifier || 'N/A' }</Typography>
        <Typography variant='subheading' color='default' className='bookshelf-book-main-description'>{ description ? description.replace(/<(?:.|\n)*?>/gm, '') : '' }</Typography>
    </div>
);