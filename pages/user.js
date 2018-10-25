import 'isomorphic-fetch';
import { connect } from 'react-redux';
import { Component } from 'react';
import Router from 'next/router';

import { get } from '../utils/methods';
import Theme from '../theme';
import Header from '../components/Header';
import UserCard from '../components/user/UserCard';
import Tabs from '../components/user/Tabs';

import '../styles/index.scss';

const base = '/';

const mapStateToProps = (state) =>
({
    user: state.user,
});

export default connect(mapStateToProps)(class extends Component
{
    static async getInitialProps({ query })
    {
        const { name } = query;
        const req = await fetch('https://78g40e4ff5.execute-api.us-east-1.amazonaws.com/prod/bookshelf/user/' + name, get());
        const json = await req.json();
        return { uuser: json };
    }

    componentDidMount()
    {
        const { user, uuser } = this.props;
        if (user.username === uuser.username)
        {
            Router.push(base + 'profile');
        }
    }

    render()
    {
        const { uuser } = this.props;
        return (
            <div className='bookshelf-page'>
                <Theme>
                    <Header />
                    <UserCard user={ uuser } />
                    <Tabs user={ uuser } />
                </Theme>
            </div>
        );
    }
});