import React, {useState} from 'react';
import {Button, ButtonGroup} from '@mui/material';
import {useAppDispatch, useAppSelector} from '../hooks/redux';
import {fetchUsers} from '../redux/reducers/ActionCreators';

export const ButtonActions = () => {
    const [show, setShow] = useState<boolean>(true)
    const [timerId, setTimerId] = useState<number>(0)
    const dispatch = useAppDispatch()

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

    return (
        <ButtonGroup fullWidth variant={'contained'} size={'large'}>
            <Button onClick={() => dispatch(fetchUsers())}>1 joke</Button>
            <Button onClick={showJokes}>async joke</Button>
            <Button>stop</Button>
            <Button>showJokes</Button>
        </ButtonGroup>
    );
};

export default ButtonActions;