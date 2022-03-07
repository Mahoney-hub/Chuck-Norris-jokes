import React, {useEffect} from 'react';
import {Button, IconButton, Paper} from '@mui/material';
import {useAppDispatch, useAppSelector} from '../hooks/redux';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {userSlice} from '../redux/reducers/UserSlice';
import {fetchUsers} from '../redux/reducers/ActionCreators';
import {NavLink} from 'react-router-dom';

export const MainPage = () => {
    const {value, error} = useAppSelector(state => state.userReducer)
    const dispatch = useAppDispatch()
    const {addToFavorites} = userSlice.actions

    useEffect(() => {
        // dispatch(fetchUsers())
    }, [dispatch])

    // Functions
    const clickHandler = () => {
        dispatch(addToFavorites(value))
    }

    return (
        <>
            <NavLink to={'/jokes'} className={'p10'}>
                <Button variant={'outlined'} size={'large'}>favorite jokes</Button>
            </NavLink>
            <Paper elevation={24}
                   className={'content-center p20 relative'}
                   style={{width: '100%', minHeight: '350px'}}
            >
                {error && <h1>{error}</h1>}
                <h1>{value}</h1>
                <IconButton size={'large'}
                            color={'error'}
                            onClick={clickHandler}
                            style={{position:'absolute', top: 0, right: 0, padding: '20px'}}
                >
                    <FavoriteIcon/>
                </IconButton>
            </Paper>
        </>
    );
};

