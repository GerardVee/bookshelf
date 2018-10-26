import { connect } from 'react-redux';
import { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

import { login } from '../../ducks/actions';
import { Typography } from '@material-ui/core';

const mapStateToProps = state => (
{
    user: state.user,
});

const mapDispatchToProps = dispatch => (
{
    login: (user) => dispatch(login(user)),
});

const trunc = (string) => string.length > 22 ? string.substring(0, 22) + '...' : string;

export default connect(mapStateToProps, mapDispatchToProps)(class extends Component
{
    state =
    {
        post: '',
        anchorEl: null,
        about: '',
    };

    post()
    {
        // post, if success, clear state and close
        this.setState({ post: '', about: '', anchorEl: null });
        this.props.close();
    }

    selectItem(name)
    {
        this.setState({ about: name, anchorEl: null });
    }

    render()
    {
        const { open, close, user } = this.props;
        const { post, anchorEl, about } = this.state;
        const { books } = user;
        const isOpen = open;
        const menuIsOpen = Boolean(anchorEl);
        const aboutEmpty = about === '';
        return (
            <Dialog
                open={ isOpen }
                onClose={ () => close() }
                aria-labelledby='post-dialog-title' fullWidth>
                <DialogTitle id='post-dialog-title'>Post</DialogTitle>
                <DialogContent>
                    <DialogContentText>Write about your books or nothing in particular!</DialogContentText>
                    <TextField className='width-100' variant='outlined' margin='dense' id='post' label='Post' type='text'
                        onChange={ (e) => this.setState({ post: e.target.value }) } value={ post } required autoFocus
                        multiline rows={ 5 } />
                    <div className='row justify-space-between'>
                        <Button onClick={ (e) => this.setState({ anchorEl: e.currentTarget }) } variant='text' color={ aboutEmpty ? 'primary' : 'default' }
                            aria-label='About...' aria-owns={ menuIsOpen ? 'long-menu' : null } aria-haspopup='true'>
                            { aboutEmpty ? 'About...' : 'About' }
                        </Button>
                        { !aboutEmpty && <Typography variant='subheading' color='default'>{ about }</Typography>}
                    </div>
                    <Menu id='long-menu' anchorEl={ anchorEl } open={ menuIsOpen } onClose={ () => this.setState({ anchorEl: null }) }
                        PaperProps={{ style:{ maxHeight: 250 } }}>
                        <MenuItem onClick={ () => this.selectItem('No Book') }>No Book</MenuItem>
                        { books.reading && books.reading.title && <MenuItem onClick={ () => this.selectItem(books.reading.title) }>{ trunc(books.reading.title) }</MenuItem> }
                        { books.have_read.map(book => <MenuItem onClick={ () => this.selectItem(book.title) }>{ trunc(book.title) }</MenuItem>) }
                        { books.will_read.map(book => <MenuItem onClick={ () => this.selectItem(book.title) }>{ trunc(book.title) }</MenuItem>) }
                    </Menu>
                </DialogContent>
                <DialogActions>
                    <Button onClick={ () => close() } variant='text' color='default'>Cancel</Button>
                    <Button onClick={ () => this.post() } variant='contained' color='primary'>Post</Button>
                </DialogActions>
            </Dialog>
        );
    }
});