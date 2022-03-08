import React, {MouseEvent} from 'react';
import {Button, IconButton, Paper} from '@mui/material';
import {useAppDispatch, useAppSelector} from '../hooks/redux';
import DeleteIcon from '@mui/icons-material/Delete';
import {NavLink} from 'react-router-dom';
import {userSlice} from '../redux/reducers/UserSlice';

export const JokesList = () => {
    const {favoriteJokes} = useAppSelector(state => state.userReducer)
    const dispatch = useAppDispatch()
    const {deleteJokesID} = userSlice.actions
    // Functions
    const clickHandler = (id:string) => {
        dispatch(deleteJokesID(id))
    }
    return (
        <>
            <NavLink to={'/main'} className={'p10'}>
                <Button variant={'outlined'} size={'large'}>main</Button>
            </NavLink>
            <Paper variant={'outlined'} style={{width: '100%', minHeight: '350px'}}>
                <div className={'content-start flex-column'}>
                    {favoriteJokes.map((item,index) => <Paper key={item.id} className={'between-center pl10 m5'}>
                        <h3 style={{marginRight: '10px'}}>{index + 1}.</h3>
                        {item.title}
                        <IconButton size={'large'} onClick={()=>clickHandler(item.id)}>
                            <DeleteIcon/>
                        </IconButton>
                    </Paper>)}
                </div>
            </Paper>
        </>
    );
};

