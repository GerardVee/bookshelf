import Header from '../components/Header';
import ProfileCard from '../components/profile/ProfileCard';
import Tabs from '../components/profile/Tabs';

import '../styles/index.scss';

export default () => (
    <div className='bookshelf-page'>
        <Header />
        <ProfileCard />
        <Tabs />
    </div>
);