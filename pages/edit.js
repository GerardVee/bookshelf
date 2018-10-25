import Theme from '../theme';
import Header from '../components/Header';
import EditModal from '../components/edit/EditModal';

import '../styles/index.scss';

export default () => (
    <div className='bookshelf-page'>
        <Theme>
            <Header />
            <EditModal />
        </Theme>
    </div>
);