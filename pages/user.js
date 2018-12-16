import 'isomorphic-fetch';
import { connect } from 'react-redux';
import { Component } from 'react';
import Router from 'next/router';

import Header from '../components/Header';
import UserCard from '../components/user/UserCard';
import Tabs from '../components/user/Tabs';
import { receiveError } from '../ducks/actions';
import { get, post } from '../utils/methods';

import '../styles/index.scss';

const base = '/';

const mapStateToProps = (state) =>(
{
    user: state.user,
});

const mapDispatchToProps = (dispatch) => (
{
    error: (msg) => dispatch(receiveError(msg)),
});

export default connect(mapStateToProps, mapDispatchToProps)(class extends Component
{
    state =
    {
        posts: [],
    };

    static async getInitialProps({ query })
    {
        const { name } = query;
        const req = await fetch('https://78g40e4ff5.execute-api.us-east-1.amazonaws.com/prod/bookshelf/user/' + name, get());
        const json = await req.json();
        return { uuser: json };
    }

    async componentDidMount()
    {
        const { user, uuser } = this.props;
        if (user.username === uuser.username)
        {
            Router.push(base + 'profile');
        }
        if (user.username !== '' && uuser.username !== '' && this.state.posts.length === 0)
        {
            const postsReq = await fetch('https://78g40e4ff5.execute-api.us-east-1.amazonaws.com/prod/bookshelf/posts/user', post({ user: uuser.username, username: user.username, utoken: user.utoken }));
            const posts = await postsReq.json();
            if (typeof(posts) === typeof(String))
            {
                this.props.error(posts);
                return;
            }
            else if (posts.errorMsg)
            {
                this.props.error('Failed to fetch posts');
                return;
            }
            this.setState({ posts });
        }
    }

    render()
    {
        const { uuser } = this.props;
        const { posts } = this.state;
        return (
            <div className='bookshelf-page'>
                <Header />
                <UserCard user={ uuser } posts_length={ posts.length } />
                <Tabs user={ uuser } posts={ posts }
                    setLikeOnPost={ (post_id, liked) => liked ? this.setState({ posts: posts.map(p => p.post_id === post_id ? { ...p, liked: true, likes_count: p.likes_count + 1 } : p) }) : this.setState({ posts: posts.map(p => p.post_id === post_id ? { ...p, liked: false, likes_count: p.likes_count - 1 } : p) }) }  />
            </div>
        );
    }
});