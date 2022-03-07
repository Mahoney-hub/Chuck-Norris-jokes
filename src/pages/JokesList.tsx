import React from 'react';
import {Button, ButtonGroup, List, Paper, Typography} from '@mui/material';

export const JokesList = () => {
    return (
        <>
            <Paper variant={'outlined'} className={'w800'}>
                <List className={'content-center'}>
                    <Typography variant={'h1'}>
                        Шуток пока нет!!!
                    </Typography>
                </List>
            </Paper>
        </>
    );
};

