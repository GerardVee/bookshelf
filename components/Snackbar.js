import { connect } from 'react-redux';
import { Component } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import ErrorIcon from '@material-ui/icons/Error';
import WarningIcon from '@material-ui/icons/Warning';
import SuccessIcon from '@material-ui/icons/CheckCircle';
import CloseIcon from '@material-ui/icons/Close';

import { clearStatus } from '../ducks/actions';

const mapStateToProps = (state) => (
{
    status: state.status,
});

const mapDispatchToProps = dispatch => (
{
    clearStatus: () => dispatch(clearStatus()),
});

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
                autoHideDuration={ 5000 } onClose={ () => this.handleClose() }>
                    <SnackbarContent className={ type === 'ERR' ? 'bookshelf-error-snackbar' : type === 'SUC' ? 'bookshelf-success-snackbar' : type === 'WAR' ? 'bookshelf-warning-snackbar' : '' } aria-describedby='client-snackbar'
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
                        {[
                            <IconButton
                                key='close'
                                aria-label='Close'
                                color='inherit'
                                onClick={ (e, r) => this.handleClose() }
                                >
                                    <CloseIcon />
                            </IconButton>,
                        ]}
                        />
            </Snackbar>
        );
    }
});