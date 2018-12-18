import '../styles/index.scss';
import React, { Component } from 'react';
import FeedCard from '../components/FeedCard';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Header from '../components/Header';
import Title from '../components/Title';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { fetchFeed } from '../ducks/actions';
import { withStyles } from '@material-ui/core/styles';

const mapStateToProps = (state) => ({ user: state.user });

const mapDisaptchToProps = (dispatch) => ({ receiveFeed: (user) => dispatch(fetchFeed({ username: user.username, utoken: user.utoken }, user.profile_picture)) });

const styles = () => ({
    empty: { marginTop: '2em' },
    gridList:
    {
        width: '27%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'center',
        marginTop: '1em',
        paddingBottom: '1em'
    },
    gridTile: { height: '100%' }
});

export default withStyles(styles)(connect(mapStateToProps, mapDisaptchToProps)(class extends Component
{
    async componentDidMount()
    {
        const { user } = this.props;
        this.props.receiveFeed(user);
    }

    render = () => (
        <div className='bookshelf-page'>
            <Title>Bookshelf</Title>
            <Header />
            { (this.props.user.feed ? this.props.user.feed.length === 0 : true) && (
                <>
                    <Typography className={ this.props.classes.empty + ' center' } variant='display3' color='default'>Empty Feed</Typography>
                    <Typography className='center' variant='subheading' color='default'>Look for users to follow using the search bar</Typography>
                </> )}
            { this.props.user.feed && this.props.user.feed.length > 0 && (
                <GridList className={ this.props.classes.gridList } cols={ 1 }>
                    { this.props.user.feed.map(post => (
                        <GridListTile key={ post.post_id } className={ this.props.classes.gridTile } cols={ 1 }>
                            <FeedCard { ...post } />
                        </GridListTile>
                    )) }
                </GridList> )}
        </div>
    );
}));