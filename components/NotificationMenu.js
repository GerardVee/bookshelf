import { connect } from 'react-redux';
import { Component } from 'react';
import Router from 'next/router';
import Popper from '@material-ui/core/Popper';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import Read from '@material-ui/icons/DoneOutline';
import Remove from '@material-ui/icons/DeleteOutline';

import { markNotificationAsRead, deleteNotification } from '../ducks/actions';

const base = '/';

const mapStateToProps = (state) => (
{
    user: state.user,
});

const mapDispatchToProps = (dispatch) => (
{
    markNotificationAsRead: (user, notification) => dispatch(markNotificationAsRead({ username: user.username, utoken: user.utoken, notification })),
    deleteNotification: (user, notification) => dispatch(deleteNotification({ username: user.username, utoken: user.utoken, notification })),
});
    
export default connect(mapStateToProps, mapDispatchToProps)(class extends Component
{
    render()
    {
        const { user, anchorEl, close } = this.props;
        return (
            <Popper open={ Boolean(anchorEl) } anchorEl={ anchorEl } transition disablePortal>
            {({ TransitionProps, placement }) => (
                <Grow { ...TransitionProps } id='menu-grow' style={{ transformOrigin: 'left bottom' }}>
                    <Paper>
                        <ClickAwayListener onClickAway={ () => close() }>
                            <MenuList style={{ height: '450px', overflow: 'auto' }}>
                            { user.notifications.map(notification => (
                            <MenuItem className='row justify-space-between' style={ (!notification.read) ? { backgroundColor: '#DCDCDC' } : {} }
                                onClick={ () => { this.props.markNotificationAsRead(user, notification); Router.push(base + notification.link ) } }>
                                <Typography className='black' variant='caption' color='default'>
                                    <span className='bold' onClick={ () => Router.push(`${ base }user?name=${ notification.from }`) }>{ notification.message.substr(0, notification.message.indexOf(' ')) }</span>
                                    <span>{ notification.message.substr(notification.message.indexOf(' ')) }</span>
                                </Typography>
                                <div style={{ marginLeft: '0.4em' }}>
                                    <Remove fontSize='inherit' onClick={ () => this.props.deleteNotification(user, notification) } />
                                    { !(notification.read) && <Read fontSize='inherit' onClick={ () => this.props.markNotificationAsRead(user, notification) } /> }
                                </div>
                            </MenuItem>)) }
                            </MenuList>
                        </ClickAwayListener>
                    </Paper>
                </Grow>
            )}
            </Popper>
        );
    }
});