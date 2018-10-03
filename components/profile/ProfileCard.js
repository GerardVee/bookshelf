import Router from 'next/router';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const base = '/';

export default ({ username, profile_picture, posts, followers, following, name, book, book_id, about }) => (
    <div className='col bookshelf-profile-main'>
        <div className='row justify-center align-center'>
            <img className='bookshelf-profile-main-picture' src={ profile_picture } />
            <div className='col bookshelf-profile-main-stats'>
                <div className='row align-center'>
                    <Typography variant='title' color='default' className='bookshelf-profile-main-username'>{ username }</Typography>
                    <Button variant='outlined' color='default' size='small'>Edit Profile</Button>
                </div>
                <div className='row'>
                    <Typography variant='body1' color='default'><span className='slightly-bold'>{ posts }</span> posts</Typography>
                    <Typography variant='body1' color='default'><span className='slightly-bold'>{ followers }</span> followers</Typography>
                    <Typography variant='body1' color='default'><span className='slightly-bold'>{ following }</span> following</Typography>
                </div>
                <div className='col'>
                    <Typography variant='title' color='default' className='center'>{ name }</Typography>
                    <Button variant='text' color='default' onClick={ () => Router.push(`${ base }book?id=${ book_id }`) } className='center'>📖 { book }</Button>
                    <Typography variant='subheading' color='default' className='center'>{ about }</Typography>
                </div>
            </div>
        </div>
    </div>
);