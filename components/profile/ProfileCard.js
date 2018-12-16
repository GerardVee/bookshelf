import { connect } from 'react-redux';
import Router from 'next/router';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import NoSsr from '@material-ui/core/NoSsr';

const base = '/';

const mapStateToProps = (state) => (
{
    user: state.user,
});

export default connect(mapStateToProps)(({ user }) => (
    <div className='col bookshelf-profile-main'>
        <div className='row justify-center align-center'>
            { user.profile_picture && <img className='bookshelf-profile-main-picture' src={ user.profile_picture } /> }
            <div className='col bookshelf-profile-main-stats'>
                <div className='row align-center'>
                    <Typography variant='title' color='default' className='bookshelf-profile-main-username'>{ user.username }</Typography>
                    <NoSsr>
                        <Button variant='outlined' color='default' size='small' onClick={ () => Router.push(base + 'edit') }>Edit Profile</Button>
                    </NoSsr>
                </div>
                <div className='row'>
                    <Typography variant='body1' color='default'><span className='slightly-bold'>{ user.posts.length }</span> posts</Typography>
                    <Typography variant='body1' color='default'><span className='slightly-bold'>{ user.followers.length }</span> followers</Typography>
                    <Typography variant='body1' color='default'><span className='slightly-bold'>{ user.following.length }</span> following</Typography>
                </div>
                <div className='col'>
                    <Typography variant='title' color='default' className='center'>{ user.name }</Typography>
                    <NoSsr>
                        { user.books.reading.book_id !== '' && <Button variant='text' color='default' onClick={ () => Router.push(`${ base }book?id=${ user.books.reading.book_id }`) } className='center'>📖 { user.books.reading.title }</Button> }
                    </NoSsr>
                    <Typography variant='subheading' color='default' className='center'>{ user.about }</Typography>
                </div>
            </div>
        </div>
    </div>
));