import { connect } from 'react-redux';
import { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

import { signup } from '../../ducks/actions';

const mapStateToProps = state => (
{
    status: state.status,
});

const mapDispatchToProps = dispatch => (
{
    signup: (user) => dispatch(signup(user)),
});

const validUsername = (username) => (/^[a-z0-9_]+$/i.test(username)) && (username.replace(/[^_]/g, '').length <= 1)
    && (username.replace(/[a-z_]/gi, '').length <= 3);
const validName = (name) => (/^[a-z0-9\s]+$/i.test(name)) && (name.replace(/[^\s]/g, '').length <= 2) && (name.replace(/[\s]/g, '').length >= 3);
const validUsernameLength = ({ length }) => length >= 5 && length <= 13;
const validNameLength = ({ length }) => length >= 3 && length <= 25;
const validPasswordLength = ({ length }) => length >= 5 && length <= 30;
const invalidUsername = (username) => (!(validUsername(username))) || !(validUsernameLength(username));
const invalidName = (name) => (!(validName(name))) || !(validNameLength(name));
const invalidPassword = (password) => !(validPasswordLength(password));

const nameLengthError = 'Name must be between 3 and 25 characters long';
const nameValidityError = 'Name must only use a-z (at least 3), and have 2 spaces max';
const usernameLengthError = 'Username must be between 5 and 13 characters long';
const usernameValidityError = 'Username must only use a-z, 0-9 (3 characters max), and _ (1 max)';
const passwordLengthError = 'Password must be between 5 and 30 characters long';

export default connect(mapStateToProps, mapDispatchToProps)(class extends Component
{
    state =
    {
        username: '',
        password: '',
        name: '',
    };

    signup(username, password, name)
    {
        if (!(validNameLength(name)))
        {
            return;
        }
        if (!(validName(name)))
        {
            return;
        }
        if (!(validUsernameLength(username)))
        {
            return;
        }
        if (!(validUsername(username)))
        {
            return;
        }
        if (!(validPasswordLength(password)))
        {
            return;
        }
        this.props.signup({ username, password, name });
    }

    render()
    {
        const { open, close, status } = this.props;
        const { username, password, name } = this.state;
        const isOpen = status.type === '' && open;
        return (
            <Dialog
                open={ isOpen }
                onClose={ () => close() }
                aria-labelledby='form-dialog-title'>
                <DialogTitle id='form-dialog-title'>Signup</DialogTitle>
                <DialogContent>
                    <DialogContentText>Signing Up allows you to create your own Bookshelf account!</DialogContentText>
                    <TextField variant='outlined' margin='dense' id='name' label='Name' type='text'
                        onChange={ (e) => this.setState({ name: e.target.value }) } value={ name } required autoFocus fullWidth
                        error={ invalidName(name) } helperText={ !(validNameLength(name)) ? nameLengthError : (!(validName(name)) ? nameValidityError : '') } />
                    <TextField variant='outlined' margin='dense' id='username' label='Username' type='text'
                        onChange={ (e) => this.setState({ username: e.target.value }) } value={ username } required fullWidth
                        error={ invalidUsername(username) } helperText={ !(validUsernameLength(username)) ? usernameLengthError : (!(validUsername(username)) ? usernameValidityError : '') }/>
                    <TextField variant='outlined' margin='dense' id='password' label='Password' type='password'
                        onChange={ (e) => this.setState({ password: e.target.value }) } value={ password } required fullWidth
                        error={ invalidPassword(password) } helperText={ !(validPasswordLength(password)) ? passwordLengthError : '' } />
                </DialogContent>
                <DialogActions>
                    <Button onClick={ () => close() } variant='text' color='default'>Cancel</Button>
                    <Button variant='contained' color='primary' onClick={ () => { this.signup(username, password, name); close(); } }>Signup</Button>
                </DialogActions>
            </Dialog>
        );
    }
});