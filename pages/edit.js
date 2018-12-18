import '../styles/index.scss';
import EditModal from '../components/edit/EditModal';
import Header from '../components/Header';
import React from 'react';
import Title from '../components/Title';

export default () => (
    <div className='bookshelf-page'>
        <Title>Edit Profile</Title>
        <Header />
        <EditModal />
    </div>
);