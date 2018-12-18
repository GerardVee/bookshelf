import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({ bigHeading: { marginTop: '2em' } });

export default withStyles(styles)(({ classes }) => (
    <>
        <Typography className={ 'center ' + classes.bigHeading } variant='display3' color='default'>Post Gone</Typography>
        <Typography className='center' variant='subheading' color='default'>Sorry :(</Typography>
    </>
));