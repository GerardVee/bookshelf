import { connect } from 'react-redux';
import { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

import { login } from '../../ducks/actions';

const mapDispatchToProps = dispatch => (
{
    // login: (user) => dispatch(login(user)),
});

export default connect(() => ({}), mapDispatchToProps)(class extends Component
{
    state =
    {
        username: '',
        password: '',
        name: '',
    };

    render()
    {
        const { open, close } = this.props;
        const { username, password, name } = this.state;
        return (
            <Dialog
                open={ open }
                onClose={ () => close() }
                aria-labelledby='form-dialog-title'>
                <DialogTitle id='form-dialog-title'>Signup</DialogTitle>
                <DialogContent>
                    <DialogContentText>Signing Up allows you to create your own Bookshelf account!</DialogContentText>
                    <TextField variant='outlined' margin='dense' id='name' label='Name' type='text'
                        onChange={ (e) => this.setState({ name: e.target.value }) } value={ name } required autoFocus fullWidth />
                    <TextField variant='outlined' margin='dense' id='username' label='Username' type='text'
                        onChange={ (e) => this.setState({ username: e.target.value }) } value={ username } required fullWidth />
                    <TextField variant='outlined' margin='dense' id='password' label='Password' type='password'
                         onChange={ (e) => this.setState({ password: e.target.value }) } value={ password } required fullWidth />
                </DialogContent>
                <DialogActions>
                    <Button onClick={ () => close() } variant='text' color='default'>Cancel</Button>
                    <Button variant='contained' color='primary'>Signup</Button>
                </DialogActions>
            </Dialog>
        );
    }
});