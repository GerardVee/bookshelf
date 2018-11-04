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

import { createPost, receiveError } from '../ducks/actions';
import { Typography } from '@material-ui/core';

const mapStateToProps = state => (
{
    user: state.user,
});

const mapDispatchToProps = dispatch => (
{
    createPost: (user, status, about, aboutType, book_id, callback) => dispatch(createPost({ user_id: user.user_id, utoken: user.utoken, status, about, aboutType, book_id }, callback)),
    error: (msg) => dispatch(receiveError(msg)),
});

const trunc = (string) => string.length > 22 ? string.substring(0, 22) + '...' : string;
const clean = (string) => string.replace(/\s+/g, ' ');

const validStatus = (status) => status.replace(/\s/g, '').length > 8 && status.replace(/\s/g, '').length < 480;
const invalidStatus = (status) => !(validStatus(status));

const statusLengthError = 'Status must be longer than 8 characters but no longer than 480';

export default connect(mapStateToProps, mapDispatchToProps)(class extends Component
{
    state =
    {
        status: '',
        anchorEl: null,
        about: '',
        aboutType: '',
        book_id: ''
    };

    post()
    {
        const { user } = this.props;
        const { status: uncleanStatus, about, aboutType, book_id } = this.state;
        if (invalidStatus(uncleanStatus))
        {
            return;
        }
        if (about === '')
        {
            this.props.error('You must select an about topic');
            return;
        }
        if (aboutType === '')
        {
            this.props.error('You must select an about topic');
            return;
        }
        if (book_id === '')
        {
            this.props.error('You must select an about topic');
            return;
        }
        const status = clean(uncleanStatus);
        this.props.createPost(user, status, about, aboutType, book_id, () => this.close());
    }

    close()
    {
        this.setState({ status: '', anchorEl: null, about: '', aboutType: '', book_id: '' });
        this.props.close();
    }

    selectItem(name, aboutType, book_id)
    {
        this.setState({ about: name, anchorEl: null, aboutType, book_id });
    }

    render()
    {
        const { open, close, user } = this.props;
        const { status, anchorEl, about } = this.state;
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
                        onChange={ (e) => this.setState({ status: e.target.value }) } value={ status } required autoFocus
                        multiline rows={ 5 } error={ invalidStatus(status) } helperText={ invalidStatus(status) ? statusLengthError : '' } />
                    <div className='row justify-space-between align-center'>
                        <Button onClick={ (e) => this.setState({ anchorEl: e.currentTarget }) } variant='text' color={ aboutEmpty ? 'primary' : 'default' }
                            aria-label='About...' aria-owns={ menuIsOpen ? 'long-menu' : null } aria-haspopup='true'>
                            { aboutEmpty ? 'About...' : 'About' }
                        </Button>
                        { !aboutEmpty && <Typography variant='subheading' color='default'>{ about }</Typography>}
                    </div>
                    <Menu id='long-menu' anchorEl={ anchorEl } open={ menuIsOpen } onClose={ () => this.setState({ anchorEl: null }) }
                        PaperProps={{ style:{ maxHeight: 250 } }}>
                        <MenuItem onClick={ () => this.selectItem('No Book', 'NONE', 'NONE') }>No Book</MenuItem>
                        { books.reading && books.reading.title && <MenuItem onClick={ () => this.selectItem(books.reading.title, 'READING', books.reading.book_id) }>{ trunc(books.reading.title) }</MenuItem> }
                        { books.have_read.map(book => <MenuItem onClick={ () => this.selectItem(book.title, 'READ', book.book_id) }>{ trunc(book.title) }</MenuItem>) }
                        { books.will_read.map(book => <MenuItem onClick={ () => this.selectItem(book.title, 'WILL_READ', book.book_id) }>{ trunc(book.title) }</MenuItem>) }
                    </Menu>
                </DialogContent>
                <DialogActions>
                    <Button onClick={ () => this.close() } variant='text' color='default'>Cancel</Button>
                    <Button onClick={ () => this.post() } variant='contained' color='primary'>Post</Button>
                </DialogActions>
            </Dialog>
        );
    }
});