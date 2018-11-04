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
import NewPost from '@material-ui/icons/Book';
import Notifications from '@material-ui/icons/Notifications';
import Profile from '@material-ui/icons/Person';

import PostModal from './PostModal';

const base = '/';

const mapStateToProps = (state) =>
({
    user: state.user,
});

export default connect(mapStateToProps)(class extends Component
{
    state =
    {
        input: '',
        posting: false,
    };
    
    render()
    {
        const { user } = this.props;
        const { input, posting } = this.state;
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
                        <IconButton onClick={ () => this.setState({ posting: true }) }>
                            <NewPost />
                        </IconButton>
                        <PostModal close={ () => this.setState({ posting: false }) } open={ posting }/>
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