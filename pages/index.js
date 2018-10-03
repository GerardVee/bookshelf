import { connect } from 'react-redux';

import Theme from '../theme';
import Header from '../components/Header';
import { login, logout } from '../ducks/actions';

import '../styles/index.scss';

const mapStateToProps = (state) =>
({
    user: state,
});

export default connect(mapStateToProps)(({ user }) => (
    <div className='bookshelf-page'>
        <Theme>
            <Header />
            { JSON.stringify(user) }
        </Theme>
    </div>
));