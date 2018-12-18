import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import React from 'react';
import Router from 'next/router';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';

const base = '/';

const styles = () => ({
    cardAll:
    {
        maxWidth: 200,
        marginRight: '2em',
        marginTop: '1em'
    },
    cardMedia:
    {
        height: 160,
        width: 200
    }
});

export default withStyles(styles)(({ image_link, title, book_link, authors, immutable, deleteBook, classes }) => (
    <Card className={ classes.cardAll }>
        <CardActionArea onClick={ () => Router.push(base + book_link) }>
            <CardMedia className={ classes.cardMedia } title={ title } image={ image_link } />
            <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>{ title }</Typography>
                <Typography component='p'>{ authors ? authors.join(', ') : 'Anon' }{ authors && authors.length === 0 && 'Anon' }</Typography>
            </CardContent>
        </CardActionArea>
        { !immutable && (
            <CardActions>
                <Button size='small' color='secondary' onClick={ () => deleteBook() }>Delete</Button>
            </CardActions> )}
    </Card>
));