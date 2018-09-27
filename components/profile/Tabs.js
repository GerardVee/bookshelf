import 'isomorphic-fetch';
import { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

export default class extends Component
{
    state =
    {
        value: 'posts',
    };

    handleChange = (event, value) => this.setState({ value });

    render()
    {
        const { value } = this.state;
        return (
            <>
                <Paper square className='bookshelf-profile-tabs-container'>
                    <Tabs value={ value } indicatorColor='primary' textColor='primary' onChange={ this.handleChange }>
                        <Tab value='posts' label='Posts' />
                        <Tab value='books' label='Books' />
                    </Tabs>
                </Paper>
                { value === 'books' && <div className='bookshelf-profile-books-container'>
                    <Typography variant='title' color='default'>Book I'm reading</Typography>
                </div> }
            </>
        );
    }
}