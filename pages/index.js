import { connect } from 'react-redux';
import { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import Theme from '../theme';
import Header from '../components/Header';
import FeedCard from '../components/FeedCard';
import { fetchFeed } from '../ducks/actions';

import '../styles/index.scss';

const mapStateToProps = (state) => (
{
    user: state.user,
});

const mapDisaptchToProps = (dispatch) => (
{
    receiveFeed: (user) => dispatch(fetchFeed({ username: user.username, user_id: user.user_id, utoken: user.utoken }, user.posts, user.profile_picture)),
});

export default connect(mapStateToProps, mapDisaptchToProps)(class extends Component
{
    async componentDidMount()
    {
        const { user } = this.props;
        this.props.receiveFeed(user);
    }

    render = () => (
        <div className='bookshelf-page'>
            <Theme>
                <Header />
                { (this.props.user.feed ? this.props.user.feed.length === 0 : true) && <Typography variant='title' color='default'>Empty Feed</Typography> }
                { this.props.user.feed && this.props.user.feed.length > 0 && <GridList style={{ width: '27%', height: '100%', display: 'flex', flexDirection: 'column', alignSelf: 'center' , marginTop: '1em', paddingBottom: '1em' }} cols={ 1 }>
                    { this.props.user.feed.map(post => (
                    <GridListTile key={ post.post_id } cols={ 1 } style={{ height: '100%' }}>
                        <FeedCard { ...post } />
                    </GridListTile>
                    )) }
                </GridList> }
            </Theme>
        </div>
    );
});