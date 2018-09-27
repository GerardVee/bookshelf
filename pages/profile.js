import Theme from '../theme';
import Header from '../components/Header';
import ProfileCard from '../components/profile/ProfileCard';
import Tabs from '../components/profile/Tabs';

import '../styles/index.scss';

const exampleProfile =
{
    username: 'gerardvee',
    profilePicture: 'https://scontent-lax3-2.cdninstagram.com/vp/cf4bae50ee96d47808bb928f6349dd6a/5C3EC058/t51.2885-19/s320x320/13743355_542908222562405_306704673_a.jpg',
    posts: 6,
    followers: 50,
    following: 66,
    name: 'Gee Vee',
    book: 'Rich Dad, Poor Dad',
    bookId: 'hXAiDAAAQBAJ',
    about: '👻geevee198'
};

export default () => (
    <div className='bookshelf-page'>
        <Theme>
            <Header messages={ 0 } notifications={ 0 } />
            <ProfileCard { ...exampleProfile } />
            <Tabs />
        </Theme>
    </div>
);