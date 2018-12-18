import { deleteNotification, markNotificationAsRead } from '../ducks/actions';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import React from 'react';
import Read from '@material-ui/icons/DoneOutline';
import Remove from '@material-ui/icons/DeleteOutline';
import Router from 'next/router';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

const base = '/';

const mapStateToProps = (state) => ({ user: state.user });

const mapDispatchToProps = (dispatch) => ({
    markNotificationAsRead: (user, notification) => dispatch(markNotificationAsRead({ username: user.username, utoken: user.utoken, notification })),
    deleteNotification: (user, notification) => dispatch(deleteNotification({ username: user.username, utoken: user.utoken, notification })),
});

const styles = () => ({
    grow: { transformOrigin: 'left bottom' },
    menuList:
    {
        height: '450px',
        overflow: 'auto'
    },
    notificationRead: { backgroundColor: '#DCDCDC' },
    removeMenu: { marginLeft: '0.4em' }
});

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(({ user, anchorEl, close, classes }) => (
    <Popper open={ Boolean(anchorEl) } anchorEl={ anchorEl } transition disablePortal>
        {({ TransitionProps }) => (
            <Grow className={ classes.grow } { ...TransitionProps } id='menu-grow'>
                <Paper>
                    <ClickAwayListener onClickAway={ () => close() }>
                        <MenuList className={ classes.menuList }>
                            { user.notifications.map((notification, index) => (
                                <MenuItem key={ index.toString() + notification.link }
                                    className={ 'row justify-space-between' + (notification.read ? ' ' + classes.notificationRead : '' ) }
                                    onClick={ () => { this.props.markNotificationAsRead(user, notification); Router.push(base + notification.link ); } }
                                >
                                    <Typography className='black' variant='caption' color='default'>
                                        <span className='bold' onClick={ () => Router.push(`${ base }user?name=${ notification.from }`) }>
                                            { notification.message.substr(0, notification.message.indexOf(' ')) }
                                        </span>
                                        <span>{ notification.message.substr(notification.message.indexOf(' ')) }</span>
                                    </Typography>
                                    <div className={ classes.removeMenu }>
                                        <Remove fontSize='inherit' onClick={ () => this.props.deleteNotification(user, notification) } />
                                        { !(notification.read) && (
                                            <Read fontSize='inherit' onClick={ () => this.props.markNotificationAsRead(user, notification) } />
                                        )}
                                    </div>
                                </MenuItem>)) }
                        </MenuList>
                    </ClickAwayListener>
                </Paper>
            </Grow>
        )}
    </Popper>)
));