import '../styles/index.scss';
import Header from '../components/Header';
import ProfileCard from '../components/profile/ProfileCard';
import React from 'react';
import Tabs from '../components/profile/Tabs';
import Title from '../components/Title';

export default () => (
    <div className='bookshelf-page'>
        <Title>Profile</Title>
        <Header />
        <ProfileCard />
        <Tabs />
    </div>
);