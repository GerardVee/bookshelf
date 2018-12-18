import React, { Component } from 'react';
import { getSignedUrl, receiveError, updateProfilePicture } from '../../ducks/actions';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({ user: state.user });

const mapDispatchToProps = (dispatch) => ({
    getSignedUrl: ({ username, utoken }, filename, filetype, callback) => dispatch(getSignedUrl({ username, utoken, filename, filetype }, callback)),
    updateProfilePicture: ({ username, utoken, profile_picture }, url) => dispatch(updateProfilePicture({ username, utoken, profile_picture, url })),
    error: (msg) => dispatch(receiveError(msg)),
});

const extensionCapture = (file) => /(?:\.([^.]+))?$/.exec(file)[1];

export default connect(mapStateToProps, mapDispatchToProps)(class extends Component
{
    async handleUpload(e)
    {
        e.preventDefault();
        const { user } = this.props;
        const { username } = user;
        const file = this.uploadInput.files[0];
        const filetype = file.type;
        const extensionCollect = extensionCapture(file.name);
        const ext = extensionCollect ? extensionCollect : 'jpg';
        const filename = 'avatars/' + username + '.' + ext;
        if (!(filetype.includes('image')))
        {
            this.props.error('File is not an image');
            return;
        }
        if (file.size > 5242880)
        {
            this.props.error('Photo bigger than 5MB');
            return;
        }
        this.props.getSignedUrl(user, filename, filetype, async ({ signedRequest, url }) =>
        {
            const req = await axios.put(signedRequest, file, { headers: { 'content-type': file.type, 'x-amz-acl': 'public-read' } });
            if (req.status === 200)
            {
                this.props.updateProfilePicture(user, url);
            }
            else
            {
                this.error('Photo failed to upload');
            }
        });
    }

    render()
    {
        return (
            <Button variant='flat' color='primary' size='small' component={ (props) => <label { ...props } /> }>
                <input className='none' ref={ (ref) => { this.uploadInput = ref; } } type='file' onChange={ (e) => this.handleUpload(e) } />
                Change Profile Photo
            </Button>
        );
    }
});