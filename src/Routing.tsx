import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import {MainPage} from './pages/MainPage';
import {JokesList} from './pages/JokesList';
import {themeOptions} from './styles/themeOptions';
import {Box, Container, ThemeProvider} from '@mui/material';
import {HeaderMenu} from './components/HeaderMenu';
import ButtonActions from './components/ButtonActions';

export const PATH = {
    MAIN_PAGE: '/main',
    JOKES_LIST: '/jokes',
}

export const Routing = () => {
    return (
        <ThemeProvider theme={themeOptions}>
            <div className={'full-screen content-between flex-column'}>
                <HeaderMenu/>
                <Routes>
                    <Route path={'/'} element={<Navigate to={PATH.MAIN_PAGE}/>}/>
                    <Route path={PATH.MAIN_PAGE} element={<MainPage/>}/>
                    <Route path={PATH.JOKES_LIST} element={<JokesList/>}/>
                </Routes>
                <ButtonActions/>
            </div>
        </ThemeProvider>
    );
};

