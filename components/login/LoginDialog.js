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

const mapStateToProps = state => (
{
    status: state.status,
});

const mapDispatchToProps = dispatch => (
{
    login: (user) => dispatch(login(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(class extends Component
{
    state =
    {
        username: '',
        password: '',
    };

    render()
    {
        const { open, login, close, status } = this.props;
        const { username, password } = this.state;
        const isOpen = status.type === '' && open;
        console.log(isOpen);
        return (
            <Dialog
                open={ isOpen }
                onClose={ () => close() }
                aria-labelledby='form-dialog-title'>
                <DialogTitle id='form-dialog-title'>Login</DialogTitle>
                <DialogContent>
                    <DialogContentText>Logging In allows you to interact with others and create your own posts!</DialogContentText>
                    <TextField variant='outlined' margin='dense' id='username' label='Username' type='text'
                        onChange={ (e) => this.setState({ username: e.target.value }) } value={ username } required autoFocus fullWidth />
                    <TextField variant='outlined' margin='dense' id='password' label='Password' type='password'
                         onChange={ (e) => this.setState({ password: e.target.value }) } value={ password } required fullWidth />
                </DialogContent>
                <DialogActions>
                    <Button onClick={ () => close() } variant='text' color='default'>Cancel</Button>
                    <Button onClick={ () => { login(this.state); close(); } } variant='contained' color='primary'>Login</Button>
                </DialogActions>
            </Dialog>
        );
    }
});