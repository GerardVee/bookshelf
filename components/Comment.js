import Router from 'next/router';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Like from '@material-ui/icons/FavoriteBorder';
import Liked from '@material-ui/icons/Favorite';

const base = '/';

export default ({ comment, likeComment, unlikeComment }) => (
    <div className='row' style={{ alignItems: 'center' }}>
        <Typography className='hover slightly-bold' variant='body1' style={{ marginLeft: '1em' }} onClick={ () => Router.push(`${ base }user?name=${ comment.user }`) }>{ comment.user }</Typography>
        <Typography variant='body1' style={{ marginLeft: '0.5em' }}>{ comment.comment }</Typography>
        <IconButton disabled={ !comment.interactable } onClick={ () => comment.liked ? unlikeComment(comment.comment_id) : likeComment(comment.comment_id) }
            style={{ marginLeft: 'auto', marginRight: '0.5em' }} >
            { comment.liked ? <Liked color='secondary' /> : <Like /> }
        </IconButton>
    </div>
);