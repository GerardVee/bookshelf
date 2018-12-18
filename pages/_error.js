import '../styles/index.scss';
import Header from '../components/Header';
import React from 'react';
import Title from '../components/Title';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({ bigHeading: { marginTop: '2em' } });

export default withStyles(styles)(({ classes }) => (
    <div className='bookshelf-page'>
        <Header />
        <Title>Page Not Found</Title>
        <Typography className={ 'center ' + classes.bigHeading } variant='h2' color='secondary'>Page Not Found</Typography>
        <Typography className={ 'center ' + classes.bigHeading } variant='h4' color='secondary'>Lost? :(</Typography>
    </div>
));