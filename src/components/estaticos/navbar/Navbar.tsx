import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/TokensReducers';
import { addToken } from '../../../store/tokens/Actions';
import { toast } from 'react-toastify';

function Navbar() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    let history = useNavigate();
    const dispatch = useDispatch();

    function goLogout(){
        dispatch(addToken(''));
        toast.info('Usuário deslogado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
        history('/login')
    }

    var navbarComponent;
    
    if(token !== ""){
        navbarComponent = <AppBar className="color" position="static">
        <Toolbar variant="dense">
            <Box className='cursor, menu'>
                <Box display="flex" justifyContent="space-between">
                            <Toolbar>
                                <Link to='/home' className='texto-decorator-none'><img src="https://i.imgur.com/vyjIuOv.png" alt="Logotipo" height={60} width={190} /></Link>
                            </Toolbar>
                        </Box>
            </Box>

            <Box display="flex" flex-direction="row" justifyContent="start">
                <Link to="/home" className="text-decorator-none">
                <Box mx={1.5} className='cursor'>
                    <Typography variant="h6" color="inherit" className='fonte'>
                        Home
                    </Typography>
                </Box>
                </Link>
                <Link to="/produtos" className="text-decorator-none">
                <Box mx={1.5} className='cursor'>
                    <Typography variant="h6" color="inherit" className='fonte'>
                        Produtos
                    </Typography>
                </Box>
                </Link>
                <Link to="/categoria" className="text-decorator-none">
                <Box mx={1.5} className='cursor'>
                    <Typography variant="h6" color="inherit" className='fonte'>
                        Categorias
                    </Typography>
                </Box>
                </Link>
                <Link to="/formularioCategoria" className="text-decorator-none">
                <Box mx={1.5} className='cursor'>
                    <Typography variant="h6" color="inherit" className='fonte'>
                        Cadastrar Categoria
                    </Typography>
                </Box>
                </Link>
                    <Box mx={1.5} className='cursor' onClick={goLogout}>
                        <Typography variant="h6" color="inherit" className='fonte'>
                            Logout
                        </Typography>
                    </Box>
            </Box>
        </Toolbar>
    </AppBar>

    }

    return (
        <>
            {navbarComponent}   
        </>
    )
}

export default Navbar;