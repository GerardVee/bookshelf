import IconButton from '@material-ui/core/IconButton';
import Like from '@material-ui/icons/FavoriteBorder';
import Liked from '@material-ui/icons/Favorite';
import React from 'react';
import Router from 'next/router';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const base = '/';

const styles = () => ({
    row: { alignItems: 'center' },
    userName: { marginLeft: '1em' },
    comment: { marginLeft: '0.5em' },
    commentHeart:
    {
        marginLeft: 'auto',
        marginRight: '0.5em'
    }
});

export default withStyles(styles)(({ comment, likeComment, unlikeComment, classes }) => (
    <div className={ 'row ' + classes.row }>
        <Typography className={ 'hover slightly-bold ' + classes.userName } variant='body1' onClick={ () => Router.push(`${ base }user?name=${ comment.user }`) }>{ comment.user }</Typography>
        <Typography className={ classes.comment } variant='body1'>{ comment.comment }</Typography>
        <IconButton className={ classes.commentHeart } disabled={ !comment.interactable } onClick={ () => comment.liked ? unlikeComment(comment.comment_id) : likeComment(comment.comment_id) }>
            { comment.liked ? <Liked color='secondary' /> : <Like /> }
        </IconButton>
    </div>
));