import React, {useState} from 'react';
import {Button, ButtonGroup} from '@mui/material';
import {useAppDispatch, useAppSelector} from '../hooks/redux';
import {fetchUsers} from '../redux/reducers/ActionCreators';
import {userSlice} from '../redux/reducers/UserSlice';

export const ButtonActions = () => {
    const [show, setShow] = useState<boolean>(true)
    const [timerId, setTimerId] = useState<number>(0)
    const dispatch = useAppDispatch()
    const {deleteAllJokes} = userSlice.actions

    // Functions
    const stop = () => {
        clearInterval(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            dispatch(fetchUsers())
        }, 3000)
        setTimerId(id)
    }

    const showJokes = () => {
        show ? start() : stop()
        setShow(!show)
    }
    const reset = () => {
        dispatch(deleteAllJokes())
    }

    return (
        <ButtonGroup fullWidth variant={'contained'} size={'large'}>
            <Button onClick={() => dispatch(fetchUsers())}>1 joke</Button>
            <Button onClick={showJokes}>async joke</Button>
            <Button onClick={reset}>reset</Button>
        </ButtonGroup>
    );
};

export default ButtonActions;