import { connect } from 'react-redux';
import { Component } from 'react';
import Router from 'next/router';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Theme from '../theme';
import Header from '../components/Header';
import LoginDialog from '../components/login/LoginDialog';
import SignupDialog from '../components/login/SignupDialog';

import '../styles/index.scss';

const mapStateToProps = (state) =>
({
    user: state.user,
});

export default connect(mapStateToProps)(class extends Component
{
    state =
    {
        loginOpen: false,
        signupOpen: false,
    };

    render()
    {
        const { user } = this.props;
        const { loginOpen, signupOpen } = this.state;
        const loggedIn = user.utoken !== '';
        return (
            <div className='bookshelf-page'>
                <Header />
                <Paper className='col bookshelf-login-main'>
                    { loggedIn && <Button action={ () => Router.push('/') } /> }
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
            </div>
        );
    }
});