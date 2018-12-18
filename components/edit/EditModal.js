import React, { Component } from 'react';
import { logout, receiveError, updateProfile } from '../../ducks/actions';
import Button from '@material-ui/core/Button';
import ChangeProfilePhoto from './ChangeProfilePhoto';
import NoSsr from '@material-ui/core/NoSsr';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

const mapStateToProps = (state) => ({ user: state.user });

const mapDispatchToProps = (dispatch) => ({
    logout: (user) => dispatch(logout(user)),
    edit: ({ username, utoken }, name, about) => dispatch(updateProfile({ username, utoken, name, about })),
    error: (msg) => dispatch(receiveError(msg)),
});

const validName = (name) => (/^[a-z0-9\s]+$/i.test(name)) && (name.replace(/[^\s]/g, '').length <= 2) && (name.replace(/[\s]/g, '').length >= 3);
const validNameLength = ({ length }) => length >= 3 && length <= 25;
const invalidName = (name) => (!(validName(name))) || !(validNameLength(name));

const nameLengthError = 'Name must be between 3 and 25 characters long';
const nameValidityError = 'Name must only use a-z (at least 3), and have 2 spaces max';

const styles = () => ({ width: { width: '40%' } });

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(class extends Component
{
    constructor(props)
    {
        super(props);
        this.state =
        {
            name: props.user.name,
            about: props.user.about,
        };
    }

    edit()
    {
        const { name, about } = this.state;
        const { user } = this.props;
        const trueName = name === user.name ? '' : name;
        const trueAbout = about === user.about ? '' : about;
        if (!(validNameLength(name)))
        {
            this.props.error(nameLengthError);
            return;
        }
        if (!(validName(name)))
        {
            this.props.error(nameValidityError);
            return;
        }
        this.props.edit(user, trueName, trueAbout);
    }

    render()
    {
        const { logout, user, classes } = this.props;
        const { name, about } = this.state;
        return (
            <NoSsr>
                <Paper className='col bookshelf-edit-main'>
                    <div className='row justify-space-between'>
                        <Typography variant='display2' color='default' align='center' className='black'>Edit Profile</Typography>
                        <div className='row'>
                            <ChangeProfilePhoto />
                            <Button variant='text' color='secondary' size='small'
                                onClick={ () => logout({ username: user.username || '', utoken: user.utoken || '' }) }
                            >
                            Logout
                            </Button>
                        </div>
                    </div>
                    <div className='row justify-center'>
                        <TextField className={ classes.width } variant='standard' margin='dense' id='name' label='Name' type='text' value={ name }
                            onChange={ (e) => this.setState({ name: e.target.value }) } required
                            error={ invalidName(name) } helperText={ !(validNameLength(name)) ? nameLengthError : (!(validName(name)) ? nameValidityError : '') }
                        />
                    </div>
                    <div className='row justify-center'>
                        <TextField className={ classes.width } variant='standard' margin='dense' id='about' label='About' type='text' value={ about }
                            onChange={ (e) => this.setState({ about: e.target.value }) } required
                        />
                    </div>
                    <div className='row align-center justify-center'>
                        <Button variant='contained' color='primary' size='large' onClick={ () => this.edit() }>Save Changes</Button>
                    </div>
                </Paper>
            </NoSsr>
        );
    }
}));