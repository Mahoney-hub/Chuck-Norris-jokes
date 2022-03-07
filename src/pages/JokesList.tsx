import React from 'react';
import {Button, IconButton, Paper} from '@mui/material';
import {useAppSelector} from '../hooks/redux';
import DeleteIcon from '@mui/icons-material/Delete';
import {NavLink} from 'react-router-dom';

export const JokesList = () => {
    const {favoriteJokes} = useAppSelector(state => state.userReducer)

    return (
        <>
            <NavLink to={'/main'} className={'p10'}>
                <Button variant={'outlined'} size={'large'}>main</Button>
            </NavLink>
            <Paper variant={'outlined'} style={{width: '100%', minHeight: '350px'}}>
                <div className={'content-start flex-column'}>
                    {favoriteJokes.map((item, index) => <Paper key={index} className={'between-center p10 m10'}>
                        <h3 style={{marginRight: '10px'}}>{index + 1}.</h3>
                        {item.title}
                        <IconButton size={'large'}>
                            <DeleteIcon/>
                        </IconButton>
                    </Paper>)}
                </div>
            </Paper>
        </>
    );
};

