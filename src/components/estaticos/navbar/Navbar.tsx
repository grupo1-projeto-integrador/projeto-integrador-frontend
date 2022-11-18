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
            <Box className='cursor'>
                <Typography variant="h5" color="inherit">
                    Colheita Fresca
                </Typography>
            </Box>

            <Box display="flex" justifyContent="start">
                <Link to="/home" className="text-decorator-none">
                <Box mx={2} className='cursor'>
                    <Typography variant="h6" color="inherit">
                        Home
                    </Typography>
                </Box>
                </Link>
                <Link to="/produtos" className="text-decorator-none">
                <Box mx={2} className='cursor'>
                    <Typography variant="h6" color="inherit">
                        Produtos
                    </Typography>
                </Box>
                </Link>
                <Link to="/categoria" className="text-decorator-none">
                <Box mx={2} className='cursor'>
                    <Typography variant="h6" color="inherit">
                        Categorias
                    </Typography>
                </Box>
                </Link>
                <Link to="/formularioCategoria" className="text-decorator-none">
                <Box mx={2} className='cursor'>
                    <Typography variant="h6" color="inherit">
                        Cadastrar Categoria
                    </Typography>
                </Box>
                </Link>
                    <Box mx={2} className='cursor' onClick={goLogout}>
                        <Typography variant="h6" color="inherit">
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