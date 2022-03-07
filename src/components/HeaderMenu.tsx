import React from 'react';
import {Button, ButtonGroup} from '@mui/material';
import {NavLink} from 'react-router-dom';

export const HeaderMenu = () => {
    return (
        <nav className={'w100 content-between p10'}>
            <NavLink to={'/main'}>
                <Button variant={'outlined'} size={'large'}>main</Button>
            </NavLink>
            <NavLink to={'/jokes'}>
                <Button variant={'outlined'} size={'large'}>favorite jokes</Button>
            </NavLink>
        </nav>
    );
};

