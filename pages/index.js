import Theme from '../theme';
import Header from '../components/Header';

import '../styles/index.scss';

export default () => (
    <div className='bookshelf-page'>
        <Theme>
            <Header messages={ 0 } notifications={ 0 } />
        </Theme>
    </div>
);