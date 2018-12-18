import React, { Component } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import ErrorIcon from '@material-ui/icons/Error';
import Fade from '@material-ui/core/Fade';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import SuccessIcon from '@material-ui/icons/CheckCircle';
import WarningIcon from '@material-ui/icons/Warning';
import { clearStatus } from '../ducks/actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({ status: state.status });

const mapDispatchToProps = dispatch => ({ clearStatus: () => dispatch(clearStatus()) });

export default connect(mapStateToProps, mapDispatchToProps)(class extends Component
{
    handleClose()
    {
        this.props.clearStatus();
    }

    render()
    {
        const { status } = this.props;
        const { type, message } = status;
        const open = type !== '';
        return (
            <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'left', }} open={ open }
                autoHideDuration={ 2500 } onClose={ () => this.handleClose() } disableWindowBlurListener={ true }
            >
                <SnackbarContent
                    className={ type === 'ERR' ? 'bookshelf-error-snackbar' : type === 'SUC' ? 'bookshelf-success-snackbar' : type === 'WAR' ? 'bookshelf-warning-snackbar' : '' }
                    aria-describedby='client-snackbar'
                    message=
                        {
                            <span id='client-snackbar'>
                                { type === 'ERR' && <ErrorIcon className='bookshelf-snackbar-icon' /> }
                                { type === 'SUC' && <SuccessIcon className='bookshelf-snackbar-icon' /> }
                                { type === 'WAR' && <WarningIcon className='bookshelf-snackbar-icon' /> }
                                { message }
                            </span>
                        }
                    action=
                        { [
                            <IconButton
                                key='close'
                                aria-label='Close'
                                color='inherit'
                                onClick={ () => this.handleClose() }
                            >
                                <CloseIcon />
                            </IconButton>,
                        ] }
                    TransitionComponent={ Fade }
                />
            </Snackbar>
        );
    }
});