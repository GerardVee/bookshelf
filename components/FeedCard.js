import { connect } from 'react-redux';
import { Component } from 'react';
import Router from 'next/router';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Launch from '@material-ui/icons/Launch';
import Like from '@material-ui/icons/FavoriteBorder';
import Liked from '@material-ui/icons/Favorite';

import Comment from './Comment';
import { unlikePost, likePost, likeFeedPost, commentOnPost } from '../ducks/actions';

const base = '/';

const mapStateToProps = (state) => (
{
    meUser: state.user,
});

const mapDispatchToProps = dispatch => (
{
    unlikePost: (user, post_id) => dispatch(unlikePost({ username: user.username, utoken: user.utoken, post_id })),
    likePost: (user, post_id) => dispatch(likePost({ username: user.username, utoken: user.utoken, post_id })),
    likeFeedPost: (post_id, liked) => dispatch(likeFeedPost({ post_id, liked })),
    commentOnPost: (user, post_id, comment, callback) => dispatch(commentOnPost({ username: user.username, utoken: user.utoken, post_id, comment }, callback)),
});

export default connect(mapStateToProps, mapDispatchToProps)(class extends Component
{
    state =
    {
        comment: '',
        comments: []
    };

    addComment(comment)
    {
        const newComment = { ...comment, interactable: false, liked: false };
        this.setState({ comments: [ ...this.state.comments, newComment ], comment: '' });
    }

    render()
    {
        const { date, about, about_type, book_id, post_id, text, user, profile_picture, likes_count, liked, interactable, meUser, unlikePost, likePost, likeFeedPost, commentOnPost } = this.props;
        const { comment, comments } = this.state;
        return (
            <Paper style={{ paddingBottom: '0.5em' }}>
                <div className='row' style={{ alignItems: 'center' }}>
                    { profile_picture && <Avatar className='hover' src={ profile_picture } style={{ margin: 10 }} onClick={ () => Router.push(`${ base }user?name=${ user }`) } /> }
                    <Typography className='hover slightly-bold' variant='body1' style={{ marginLeft: '1em' }} onClick={ () => Router.push(`${ base }user?name=${ user }`) }>{ user }</Typography>
                    <Launch className='hover' style={{ marginLeft: 'auto', marginRight: '0.5em' }} onClick={ () => Router.push(`${ base }post?id=${ post_id }`) } />        
                </div>
                <Typography variant='body1' style={{ marginLeft: '1em' }}>{ text }</Typography>
                <div className='row' style={{ justifyContent: 'space-between' }}>
                    <div className='row align-center'>
                        <IconButton disabled={ !interactable } onClick={ () =>
                            {
                                liked ? unlikePost(meUser, post_id) : likePost(meUser, post_id);
                                likeFeedPost(post_id, !liked);
                            } }>{ liked ? <Liked color='secondary' /> : <Like /> }</IconButton>
                        <Typography variant='body1'>{ likes_count }</Typography>
                    </div>
                    { about_type !== 'NONE' && <Button size='small' variant='text' color='default' onClick={ () => Router.push(`${ base }book?id=${ book_id }`) } className='center'>
                    📖 { about }
                    </Button> }
                </div>
                { comments.length > 0 && comments.map((comment) => <Comment comment={ comment } likeComment={ (comment_id) => null } unlikeComment={ (comment_id) => null } />) }
                <Input placeholder='Add a comment...' disableUnderline classes={{ root: 'bookshelf-post-comment-root', input: 'bookshelf-post-comment-input', }}
                    onChange={ (e) => this.setState({ comment: e.target.value }) }
                    onKeyUp={ (e) => e.keyCode === 13 ? commentOnPost(meUser, post_id, comment, (comment) => this.addComment(comment)) : null } />
            </Paper>
        );
    }
});