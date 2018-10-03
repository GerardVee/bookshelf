// make sign up action
// find way to filter name, username and password to match out expectations
import { connect } from 'react-redux';
import { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Theme from '../theme';
import Header from '../components/Header';
import LoginDialog from '../components/login/LoginDialog';
import SignupDialog from '../components/login/SignupDialog';
import { logout } from '../ducks/actions';

import '../styles/index.scss';

const mapStateToProps = (state) =>
({
    user: state,
});

const mapDispatchToProps = (dispatch) =>
({
    logout: (user) => dispatch(logout(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(class extends Component
{
    state =
    {
        loginOpen: false,
        signupOpen: false,
    };

    render()
    {
        const { user, logout } = this.props;
        const { loginOpen, signupOpen } = this.state;
        const loggedIn = user.utoken ? (user.utoken === '' ? false : true) : false;
        return (
            <div className='bookshelf-page'>
                <Theme>
                    <Header />
                    <Paper className='col bookshelf-login-main'>
                        <Typography variant='title' color='default' align='center' className='bookshelf-login-main-title'>bookshelf</Typography>
                        <div className='row align-center justify-center'>
                            <Button variant='contained' color='primary' size='large'
                                onClick={ () => this.setState({ loginOpen: true }) } disabled={ loggedIn }>Log In</Button>
                        </div>
                        <LoginDialog open={ loginOpen } close={ () => this.setState({ loginOpen: false }) } />
                        <div className='row align-center justify-center'>
                            <Button variant='text' color='primary' size='large'
                                onClick={ () => this.setState({ signupOpen: true }) } disabled={ loggedIn }>Sign Up</Button>
                        </div>
                        <SignupDialog open={ signupOpen } close={ () => this.setState({ signupOpen: false }) } />
                    </Paper>
                    <div className='row align-center justify-center'>
                        <Button variant='contained' color='secondary' size='large' onClick={ () => logout({ user_id: user.user_id || '', utoken: user.utoken || '' }) }>Logout</Button>
                    </div>
                    { JSON.stringify(user) }
                </Theme>
            </div>
        );
    }
});