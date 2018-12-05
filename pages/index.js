import { connect } from 'react-redux';
import { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

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
    receiveFeed: (user) => dispatch(fetchFeed({ username: user.username, utoken: user.utoken }, user.profile_picture)),
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
            <Header />
            { (this.props.user.feed ? this.props.user.feed.length === 0 : true) && <>
                <Typography className='center' variant='display3' color='default' style={{ marginTop: '2em' }}>Empty Feed</Typography>
                <Typography className='center' variant='subheading' color='default'>Look for users to follow using the search bar</Typography>
            </> }
            { this.props.user.feed && this.props.user.feed.length > 0 && <GridList style={{ width: '27%', height: '100%', display: 'flex', flexDirection: 'column', alignSelf: 'center' , marginTop: '1em', paddingBottom: '1em' }} cols={ 1 }>
                { this.props.user.feed.map(post => (
                <GridListTile key={ post.post_id } cols={ 1 } style={{ height: '100%' }}>
                    <FeedCard { ...post } />
                </GridListTile>
                )) }
            </GridList> }
        </div>
    );
});