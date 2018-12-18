import React, { Component } from 'react';
import { commentOnPost, likeFeedPost, likePost, unlikePost } from '../ducks/actions';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Comment from './Comment';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import Launch from '@material-ui/icons/Launch';
import Like from '@material-ui/icons/FavoriteBorder';
import Liked from '@material-ui/icons/Favorite';
import Paper from '@material-ui/core/Paper';
import Router from 'next/router';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';


const base = '/';

const mapStateToProps = (state) => ({ meUser: state.user });

const mapDispatchToProps = dispatch => ({
    unlikePost: (user, post_id) => dispatch(unlikePost({ username: user.username, utoken: user.utoken, post_id })),
    likePost: (user, post_id) => dispatch(likePost({ username: user.username, utoken: user.utoken, post_id })),
    likeFeedPost: (post_id, liked) => dispatch(likeFeedPost({ post_id, liked })),
    commentOnPost: (user, post_id, comment, callback) => dispatch(commentOnPost({ username: user.username, utoken: user.utoken, post_id, comment }, callback)),
});

const styles = () => ({
    paper: { paddingBottom: '0.5em' },
    row: { alignItems: 'center' },
    avatar: { margin: 10 },
    user: { marginLeft: '1em' },
    launch:
    {
        marginLeft: 'auto',
        marginRight: '0.5em'
    },
    text: { marginLeft: '1em' },
    spaceBetween: { justifyContent: 'space-between' }
});

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(class extends Component
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
        const {
            about, about_type, book_id, post_id, text, user, profile_picture,
            likes_count, liked, interactable, meUser, unlikePost, likePost, likeFeedPost, commentOnPost, classes
        } = this.props;
        const { comment, comments } = this.state;
        return (
            <Paper className={ classes.paper }>
                <div className={ 'row ' + classes.row }>
                    { profile_picture && (
                        <Avatar className={ 'hover ' + classes.avatar }
                            src={ profile_picture } onClick={ () => Router.push(`${ base }user?name=${ user }`) }
                        /> )}
                    <Typography className={ 'hover slightly-bold ' + classes.user }
                        variant='body1' onClick={ () => Router.push(`${ base }user?name=${ user }`) }
                    >
                        { user }
                    </Typography>
                    <Launch className={ 'hover ' + classes.launch }
                        onClick={ () => Router.push(`${ base }post?id=${ post_id }`) }
                    />
                </div>
                <Typography variant='body1' className={ classes.text }>{ text }</Typography>
                <div className={ 'row ' + classes.spaceBetween }>
                    <div className='row align-center'>
                        <IconButton disabled={ !interactable } onClick={ () =>
                        {
                            liked ? unlikePost(meUser, post_id) : likePost(meUser, post_id);
                            likeFeedPost(post_id, !liked);
                        } }
                        >
                            { liked ? <Liked color='secondary' /> : <Like /> }
                        </IconButton>
                        <Typography variant='body1'>{ likes_count }</Typography>
                    </div>
                    { about_type !== 'NONE' && (
                        <Button size='small' variant='text' color='default'
                            onClick={ () => Router.push(`${ base }book?id=${ book_id }`) } className='center'
                        >
                            📖 { about }
                        </Button> )}
                </div>
                { /* Logically, we can't like a feed comment since it's our own. No reason to implement. */ }
                { comments.length > 0 && comments.map((comment) => (
                    <Comment key={ comment.comment_id } comment={ comment }
                        likeComment={ () => null } unlikeComment={ () => null }
                    />
                ))}
                <Input placeholder='Add a comment...'
                    disableUnderline classes={{ root: 'bookshelf-post-comment-root', input: 'bookshelf-post-comment-input', }}
                    onChange={ (e) => this.setState({ comment: e.target.value }) }
                    onKeyUp={ (e) => e.keyCode === 13 ? commentOnPost(meUser, post_id, comment, (comment) => this.addComment(comment)) : null }
                />
            </Paper>
        );
    }
}));