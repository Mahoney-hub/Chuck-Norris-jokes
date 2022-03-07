import React from 'react';
import {Button, ButtonGroup} from '@mui/material';

export const ButtonActions = () => {
    return (
        <ButtonGroup fullWidth variant={'contained'} size={'large'}>
            <Button>add</Button>
            <Button>add</Button>
            <Button>add</Button>
            <Button>add</Button>
        </ButtonGroup>
    );
};

export default ButtonActions;