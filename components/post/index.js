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

import Comment from '../Comment';
import { receiveError, unlikePost, likePost, commentOnPost } from '../../ducks/actions';
import { post, deleteR } from '../../utils/methods';

const base = '/';

const mapStateToProps = (state) => (
{
    meUser: state.user,
});

const mapDispatchToProps = dispatch => (
{
    error: (error) => dispatch(receiveError(error)),
    unlikePost: (user, post_id) => dispatch(unlikePost({ username: user.username, utoken: user.utoken, post_id })),
    likePost: (user, post_id) => dispatch(likePost({ username: user.username, utoken: user.utoken, post_id })),
    commentOnPost: (user, post_id, comment, callback) => dispatch(commentOnPost({ username: user.username, utoken: user.utoken, post_id, comment }, callback)),
});

export default connect(mapStateToProps, mapDispatchToProps)(class extends Component
{
    constructor(props)
    {
        super(props);
        this.state =
        {
            comment: '',
            comments: this.props.comments.sort((a, b) => a.time - b.time),
            viewAll: false,
        };
    }

    addComment(comment)
    {
        this.setState({ comments: [ ...this.state.comments, { ...comment, interactable: false, liked: false } ] });
    }

    async likeComment({ username, utoken }, comment_id)
    {
        const { comments } = this.state;
        this.setState({ comments: comments.map(c => c.comment_id === comment_id ? { ...c,  liked: true, likes_count: c.likes_count + 1 } : c) });
        const likeTheComment = await fetch('https://78g40e4ff5.execute-api.us-east-1.amazonaws.com/prod/bookshelf/comment/like', post({ username, utoken, comment_id }));
        const comment = await likeTheComment.json();
        if (typeof(comment) === typeof(String))
        {
            this.props.error('Comment like failed.');
            this.setState({ comments: comments.map(c => c.comment_id === comment_id ? { ...c,  liked: false, likes_count: c.likes_count - 1 } : c) });
        }
        else if (comment.error)
        {
            this.props.error('Comment like failed.');
            this.setState({ comments: comments.map(c => c.comment_id === comment_id ? { ...c,  liked: false, likes_count: c.likes_count - 1 } : c) });
        }
    }

    async unlikeComment({ username, utoken }, comment_id)
    {
        const { comments } = this.state;
        this.setState({ comments: comments.map(c => c.comment_id === comment_id ? { ...c,  liked: false, likes_count: c.likes_count - 1 } : c) });
        const unlikeTheComment = await fetch('https://78g40e4ff5.execute-api.us-east-1.amazonaws.com/prod/bookshelf/comment/like', deleteR({ username, utoken, comment_id }));
        const comment = await unlikeTheComment.json();
        if (typeof(comment) === typeof(String))
        {
            this.props.error('Comment unlike failed.');
            this.setState({ comments: comments.map(c => c.comment_id === comment_id ? { ...c,  liked: true, likes_count: c.likes_count + 1 } : c) });
        }
        else if (comment.error)
        {
            this.props.error('Comment unlike failed.');
            this.setState({ comments: comments.map(c => c.comment_id === comment_id ? { ...c,  liked: true, likes_count: c.likes_count + 1 } : c) });
        }
    }

    render()
    {
        const { meUser, post, unlikePost, likePost, commentOnPost } = this.props;
        const { time, about, about_type, book_id, post_id, text, user, profile_picture, likes_count, liked, interactable } = post;
        const { comment, comments, viewAll } = this.state;
        return (
            <Paper style={{ marginTop: '2em', paddingBottom: '0.5em', width: '36%', alignSelf: 'center' }}>
                <div className='row' style={{ alignItems: 'center' }}>
                    { profile_picture && <Avatar className='hover' src={ profile_picture } style={{ margin: 10 }} onClick={ () => Router.push(`${ base }user?name=${ user }`) } /> }
                    <Typography className='hover slightly-bold' variant='body1' style={{ marginLeft: '1em' }} onClick={ () => Router.push(`${ base }user?name=${ user }`) }>{ user }</Typography>
                    <Launch className='hover' style={{ marginLeft: 'auto', marginRight: '0.5em' }} onClick={ () => Router.push(`${ base }post?id=${ post_id }`) } />        
                </div>
                <Typography variant='body1' style={{ marginLeft: '1em' }}>{ text }</Typography>
                <div className='row' style={{ justifyContent: 'space-between' }}>
                    <div className='row align-center'>
                        <IconButton disabled={ !interactable } onClick={ () => liked ? unlikePost(meUser, post_id) : likePost(meUser, post_id) }>
                            { liked ? <Liked color='secondary' /> : <Like /> }
                        </IconButton>
                        <Typography variant='body1'>{ likes_count }</Typography>
                    </div>
                    { about_type !== 'NONE' && <Button size='small' variant='text' color='default' onClick={ () => Router.push(`${ base }book?id=${ book_id }`) } className='center'>
                    📖 { about }
                    </Button> }
                </div>
                { !viewAll && comments.length > 0 && <>
                    { comments.length > 5 && <Typography className='hover' variant='caption' color='primary' onClick={ () => this.setState({ viewAll: true }) } style={{ marginLeft: '1em' }}>View all { comments.length } comments...</Typography> }
                    { comments.slice(-5).map((comment) => <Comment comment={ comment } likeComment={ (comment_id) => this.likeComment(meUser, comment_id) }
                    unlikeComment={ (comment_id) => this.unlikeComment(meUser, comment_id) } />) }
                </> }
                { viewAll && comments.length > 0 && comments.map((comment) => <Comment comment={ comment } likeComment={ (comment_id) => this.likeComment(meUser, comment_id) }
                    unlikeComment={ (comment_id) => this.unlikeComment(meUser, comment_id) } />) }
                <Input placeholder='Add a comment' disableUnderline classes={{ root: 'bookshelf-post-comment-root', input: 'bookshelf-post-comment-input', }}
                    onChange={ (e) => this.setState({ comment: e.target.value }) }
                    onKeyUp={ (e) => e.keyCode === 13 ? commentOnPost(meUser, post_id, comment, (comment) => this.addComment(comment)) : null } />
            </Paper>
        );
    }
});