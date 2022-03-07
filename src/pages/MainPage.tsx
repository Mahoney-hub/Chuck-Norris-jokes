import React from 'react';
import {Paper, Typography} from '@mui/material';

export const MainPage = () => {
    return (
        <>
            <Paper elevation={24}
                   className={'content-center p20'}
                   style={{width: '100%', minHeight: '300px'}}
            >
                <Typography variant={'h6'}>
                    Шутки Чака Норриса
                </Typography>
            </Paper>
        </>
    );
};

