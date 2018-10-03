import { connect } from 'react-redux';
import { Component } from 'react';
import Router from 'next/router';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import Input from '@material-ui/core/Input';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Mail from '@material-ui/icons/Mail';
import Notifications from '@material-ui/icons/Notifications';
import Profile from '@material-ui/icons/Person';

import { loadFromLocalStorage } from '../ducks/actions';

const base = '/';

const mapStateToProps = (state) =>
({
    user: state,
});

const mapDispatchToProps = (dispatch) =>
({
    loadFromLocalStorage: () => dispatch(loadFromLocalStorage())
});

export default connect(mapStateToProps, mapDispatchToProps)(class extends Component
{
    state =
    {
        input: '',
    };

    componentDidMount()
    {
        this.props.loadFromLocalStorage();        
    }

    render()
    {
        const { user } = this.props;
        const { input } = this.state;
        const loggedIn = user.utoken ? (user.utoken === '' ? false : true) : false;
        return (
            <AppBar position='sticky'>
                <Toolbar className='bookshelf-toolbar' variant='dense'>
                    <Typography variant='headline' color='default' className='bookshelf-toolbar-title' onClick={ () => Router.push(base) }>bookshelf</Typography>
                    { loggedIn && <div className='bookshelf-toolbar-search'>
                        <div className='bookshelf-toolbar-search-icon'>
                            <SearchIcon />
                        </div>
                        <Input placeholder='Search..' disableUnderline classes={{ root: 'bookshelf-toolbar-search-root', input: 'bookshelf-toolbar-search-input', }}
                            onChange={ (e) => this.setState({ input: e.target.value }) }
                            onKeyUp={ (e) => e.keyCode === 13 ? Router.push(base + 'search?name=' + encodeURI(input) ) : null } />
                    </div> }
                    { loggedIn && <div className='row'>
                        <IconButton>
                            { (user.messages.length > 0) && <Badge badgeContent={ user.messages.length } color='secondary'>
                                <Mail />
                            </Badge>
                            }
                            <Mail />
                        </IconButton>
                        <IconButton>
                            { (user.notifications.length > 0) && <Badge badgeContent={ user.notifications.length } color='secondary'>
                                <Notifications />
                            </Badge>
                            }
                            <Notifications />
                        </IconButton>
                        <IconButton onClick={ () => Router.push(base + 'profile') }>
                            <Profile />
                        </IconButton>
                    </div> }    
                </Toolbar>
            </AppBar>
        );
    }
});