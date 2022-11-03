import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <>
        <AppBar position="static">
            <Toolbar variant="dense">
                <Box className='cursor'>
                    <Typography variant="h5" color="inherit">
                        Colheita fresca
                    </Typography>
                </Box>

                <Box display="flex" justifyContent="start">
                    <Box mx={1} className='cursor'>
                        <Typography variant="h6" color="inherit">
                            home
                        </Typography>
                    </Box>
                    <Box mx={1} className='cursor'>
                        <Typography variant="h6" color="inherit">
                            Sobre
                        </Typography>
                    </Box>
                    <Box mx={1} className='cursor'>
                        <Typography variant="h6" color="inherit">
                            Categoria
                        </Typography>
                    </Box>
                    <Box mx={1} className='cursor'>
                        <Typography variant="h6" color="inherit">
                            Produto
                        </Typography>
                    </Box>
                    <Link to='/login' className='text-decorator-none'>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                login
                            </Typography>
                        </Box>
                    </Link>
                    
                </Box>

            </Toolbar>
        </AppBar>
    </>
)
}

export default Navbar;