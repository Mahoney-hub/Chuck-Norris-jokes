import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {MainPage} from './pages/MainPage';
import {JokesList} from './pages/JokesList';
import {themeOptions} from './styles/themeOptions';
import {ThemeProvider} from '@mui/material';
import ButtonActions from './components/ButtonActions';

export const PATH = {
    MAIN_PAGE: '/main',
    JOKES_LIST: '/jokes',
}

export const Routing = () => {
    return (
        <ThemeProvider theme={themeOptions}>
            <div className={'full-screen content-between flex-column'}>
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

