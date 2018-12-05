import { connect } from 'react-redux';
import { Component } from 'react';
import AWS from 'aws-sdk';
import * as awsIot from 'aws-iot-device-sdk';
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
import NotificationsMenu from './NotificationMenu';
import { receiveNotification, getAllNotifications } from '../ducks/actions';

const base = '/';

const mapStateToProps = (state) => (
{
    user: state.user,
});

const mapDispatchToProps = (dispatch) => (
{
    sendNotification: (notification) => dispatch(receiveNotification(notification)),
    getAllNotifications: (user) => dispatch(getAllNotifications({ username: user.username, utoken: user.utoken })),
});

export default connect(mapStateToProps, mapDispatchToProps)(class extends Component
{
    state =
    {
        input: '',
        posting: false,
        anchorEl: null
    };

    componentDidMount()
    {
        const { username } = this.props.user;
        if (username !== '')
        {
            const topic = `/bookshelf/user/${ username }`;
            this.configureIot();
            this.configureCredentials();
            this.bootIot(topic);
            this.props.getAllNotifications(this.props.user);
        }
    }

    bootIot(topic)
    {
        this.iotDevice.on('connect', () =>
        {
            this.iotDevice.subscribe(topic);
        });
        this.iotDevice.on('error', () => {});
        this.iotDevice.on('message', (rTopic, payload) =>
        {
            if (rTopic === topic)
            {
                const notification = JSON.parse(payload.toString());
                this.props.sendNotification(notification);
            }
        });
    }

    configureCredentials()
    {
        AWS.config.region = 'us-east-1';
        AWS.config.credentials = new AWS.CognitoIdentityCredentials(
        {
            IdentityPoolId: process.env.IDENTITY_POOL_ID
        });
        const cognitoIdentity = new AWS.CognitoIdentity();
        AWS.config.credentials.get((err, data) =>
        {
            if (!err)
            {
                const params =
                {
                    IdentityId: AWS.config.credentials.identityId
                };
                cognitoIdentity.getCredentialsForIdentity(params, (err, data) =>
                {
                    this.iotDevice.updateWebSocketCredentials(data.Credentials.AccessKeyId, data.Credentials.SecretKey, data.Credentials.SessionToken);
                });
            }
        })
    }

    configureIot()
    {
        this.iotDevice = awsIot.device(
        {
            region: 'us-east-1',
            host: process.env.IOT_HOST,
            clientId: process.env.IOT_CLIENT,
            protocol: 'wss',
            accessKeyId: '',
            secretKey: '',
            sessionToken: '',
            keepalive: 0
        });
    }

    openNotificationMenu(e)
    {
        this.setState({ anchorEl: e.currentTarget });
    }
    
    render()
    {
        const { user } = this.props;
        const { input, posting, anchorEl } = this.state;
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
                        <IconButton onClick={ (e) => this.openNotificationMenu(e) }
                            aria-owns={ anchorEl ? 'menu-grow' : undefined } aria-haspopup='true'>
                        { (user.notifications.length > 0 && (user.notifications.filter(n => !n.read).length > 0)) && <Badge badgeContent={ user.notifications.filter(n => !n.read).length } color='secondary'>
                            <Notifications />
                        </Badge>
                        }
                        { (user.notifications.length === 0 || (user.notifications.filter(n => !n.read).length === 0)) && <Notifications /> }
                        </IconButton>
                        <NotificationsMenu anchorEl={ anchorEl } close={ () => this.setState({ anchorEl: null }) } />
                        <IconButton onClick={ () => Router.push(base + 'profile') }>
                            <Profile />
                        </IconButton>
                    </div> } 
                </Toolbar>
            </AppBar>
        );
    }
});