import { connect } from 'react-redux';
import Router from 'next/router';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { followUser, unfollowUser } from '../../ducks/actions';

const base = '/';

const mapStateToProps = (state) => (
{
    myUser: state.user,
});

const mapDispatchToProps = (dispatch) => ({
    followUser: (myUser, otherUser) => dispatch(followUser({ user_id: myUser.user_id, utoken: myUser.utoken, user: otherUser })),
    unfollowUser: (myUser, otherUser) => dispatch(unfollowUser({ user_id: myUser.user_id, utoken: myUser.utoken, user: otherUser })),
});

export default connect(mapStateToProps, mapDispatchToProps)(({ user, myUser, followUser, unfollowUser }) => (
    <div className='col bookshelf-profile-main'>
        <div className='row justify-center align-center'>
            <img className='bookshelf-profile-main-picture' src={ user.profile_picture } />
            <div className='col bookshelf-profile-main-stats'>
                <div className='row align-center'>
                    <Typography variant='title' color='default' className='bookshelf-profile-main-username'>{ user.username }</Typography>
                    { !(myUser.following.includes(user.username)) && <Button variant='contained' color='primary' size='small' onClick={ () => followUser(myUser, user.username) }>Follow</Button> }
                    { myUser.following.includes(user.username) && <Button variant='outlined' color='default' size='small' onClick={ () => unfollowUser(myUser, user.username) }>Unfollow</Button> }
                    { myUser.followers.includes(user.username) && <Typography variant='body1' color='default'>FOLLOWS YOU</Typography> }
                </div>
                <div className='row'>
                    <Typography variant='body1' color='default'><span className='slightly-bold'>{ user.posts ? user.posts.length : 0 }</span> posts</Typography>
                    <Typography variant='body1' color='default'><span className='slightly-bold'>{ user.followers ? user.followers.length : 0 }</span> followers</Typography>
                    <Typography variant='body1' color='default'><span className='slightly-bold'>{ user.following ? user.following.length : 0 }</span> following</Typography>
                </div>
                <div className='col'>
                    <Typography variant='title' color='default' className='center'>{ user.name }</Typography>
                    { user.books && user.books.reading && <Button variant='text' color='default' onClick={ () => Router.push(`${ base }book?id=${ user.books.reading.book_id }`) } className='center'>📖 { user.books.reading.title }</Button> }
                    <Typography variant='subheading' color='default' className='center'>{ user.about ? user.about : '' }</Typography>
                </div>
            </div>
        </div>
    </div>
));