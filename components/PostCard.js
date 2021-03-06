import { deletePost, likePost, unlikePost } from '../ducks/actions';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Launch from '@material-ui/icons/Launch';
import Like from '@material-ui/icons/FavoriteBorder';
import Liked from '@material-ui/icons/Favorite';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import Router from 'next/router';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

const base = '/';

const mapStateToProps = (state) => ({ userstats: state.user });

const mapDispatchToProps = dispatch => ({
    unlikePost: (user, post_id) => dispatch(unlikePost({ username: user.username, utoken: user.utoken, post_id })),
    likePost: (user, post_id) => dispatch(likePost({ username: user.username, utoken: user.utoken, post_id })),
    deletePost: (user, post_id) => dispatch(deletePost({ username: user.username, utoken: user.utoken, post_id })),
});

const styles = () => ({
    paper:
    {
        paddingBottom: '0.2em',
        paddingTop: '0.3em'
    },
    alignCenter: { alignItems: 'center' },
    launch:
    {
        marginLeft: 'auto',
        marginRight: '0.5em'
    },
    marginLeft: { marginLeft: '1em' },
    flexEnd: { justifyContent: 'flex-end' }
});

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(({ about, about_type, book_id, post_id, text, user, likes_count, liked, interactable, userstats, deletePost, unlikePost, likePost, setLikeOnPost, classes }) => (
    <Paper className={ classes.paper }>
        <div className={ 'row ' + classes.alignCenter }>
            <Launch className={ 'hover ' + classes.launch } onClick={ () => Router.push(`${ base }post?id=${ post_id }`) } />
        </div>
        <Typography className={ classes.marginLeft } variant='body1'>{ text }</Typography>
        <div className='row justify-space-between'>
            <div className='row align-center'>
                <IconButton disabled={ !interactable } onClick={ () =>
                {
                    liked ? unlikePost(userstats, post_id) : likePost(userstats, post_id);
                    setLikeOnPost(!liked);
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
        { userstats.username === user && (
            <div className={ 'row ' + classes.flexEnd }>
                <Button size='small' color='secondary' onClick={ () => deletePost(userstats, post_id) }>Delete</Button>
            </div> )}
    </Paper>
)));