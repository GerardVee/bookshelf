import { connect } from 'react-redux';
import { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { logout, updateProfile, receiveError } from '../../ducks/actions';
import ChangeProfilePhoto from './ChangeProfilePhoto';

const mapStateToProps = (state) =>
({
    user: state.user,
});

const mapDispatchToProps = (dispatch) =>
({
    logout: (user) => dispatch(logout(user)),
    edit: ({ user_id, utoken }, name, about) => dispatch(updateProfile({ user_id, utoken, name, about })),
    error: (msg) => dispatch(receiveError(msg)),
});

const validName = (name) => (/^[a-z0-9\s]+$/i.test(name)) && (name.replace(/[^\s]/g, '').length <= 2) && (name.replace(/[\s]/g, '').length >= 3);
const validNameLength = ({ length }) => length >= 3 && length <= 25;
const invalidName = (name) => (!(validName(name))) || !(validNameLength(name));

const nameLengthError = 'Name must be between 3 and 25 characters long';
const nameValidityError = 'Name must only use a-z (at least 3), and have 2 spaces max';

export default connect(mapStateToProps, mapDispatchToProps)(class extends Component
{
    constructor(props)
    {
        super(props);
        this.state =
        {
            name: props.user.name,
            about: props.user.about,
        };
    }

    edit()
    {
        const { name, about } = this.state;
        const { user } = this.props;
        const trueName = name === user.name ? '' : name;
        const trueAbout = about === user.about ? '' : about;
        if (!(validNameLength(name)))
        {
            this.props.error(nameLengthError);
            return;
        }
        if (!(validName(name)))
        {
            this.props.error(nameValidityError);
            return;
        }
        this.props.edit(user, trueName, trueAbout);
    }

    render()
    {
        const { logout, user } = this.props;
        const { name, about } = this.state;
        return (
            <Paper className='col bookshelf-edit-main'>
                <div className='row' style={{ justifyContent: 'space-between' }}>
                    <Typography variant='display2' color='default' align='center' className='black'>Edit Profile</Typography>
                    <div className='row'>
                        <ChangeProfilePhoto />
                        <Button variant='text' color='secondary' size='small'
                            onClick={ () => logout({ user_id: user.user_id || '', utoken: user.utoken || '' }) }>Logout</Button>
                    </div>
                </div>
                <div className='row justify-center'>
                    <TextField variant='standard' margin='dense' id='name' label='Name' type='text' value={ name }
                        onChange={ (e) => this.setState({ name: e.target.value }) } required style={{ width: '40%' }}
                        error={ invalidName(name) } helperText={ !(validNameLength(name)) ? nameLengthError : (!(validName(name)) ? nameValidityError : '') } />
                </div>
                <div className='row justify-center'>
                    <TextField variant='standard' margin='dense' id='about' label='About' type='text' value={ about }
                        onChange={ (e) => this.setState({ about: e.target.value }) } required style={{ width: '40%' }} />
                </div>
                <div className='row align-center justify-center'>
                    <Button variant='contained' color='primary' size='large' onClick={ () => this.edit() }>Save Changes</Button>
                </div>
            </Paper>
        );
    }
});