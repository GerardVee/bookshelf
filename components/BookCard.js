import Router from 'next/router';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const base = '/';

export default ({ image_link, title, book_link, authors, immutable, deleteBook }) => (
    <Card style={{ maxWidth: 200, marginRight: '2em', marginTop: '1em' }}>
        <CardActionArea onClick={ () => Router.push(base + book_link) }>
            <CardMedia title={ title } image={ image_link } style={{ height: 160, width: 200 }} />
            <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                { title }
                </Typography>
                <Typography component='p'>
                { authors ? authors.join(', ') : 'Anon' }
                { authors && authors.length === 0 && 'Anon'}
                </Typography>
            </CardContent>
        </CardActionArea>
        { !immutable && <CardActions>
            <Button size='small' color='secondary' onClick={ () => deleteBook() }>Delete</Button>
        </CardActions> }
    </Card>
);