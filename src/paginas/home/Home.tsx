import React, { useEffect } from 'react';
import {Typography, Grid, Button} from '@material-ui/core';
import { Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import TabProduto from '../../components/produtos/tabProduto/TabProduto';
import ModalProduto from '../../components/produtos/modalProduto/ModalProduto';
import './Home.css';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/TokensReducers';
import { toast } from 'react-toastify';

function Home() {
    let history = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(()=>{
        if(token == ''){
            toast.error('Você deve estar logado', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
            history("/login")
        }
    }, [token])

    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Seja bem vindo(a) à Colheita Fresca!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                            <ModalProduto />
                        </Box>
                        <Link to="/produtos" className="text-decorator-none">
                        <Button variant="outlined" className='botao'>Ver Produtos</Button>
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://i.imgur.com/H88yIo2.png" alt="" width="500px" height="500px" />
                </Grid>
                <Grid xs={12} className='produto'>
                    <TabProduto />
                </Grid>
            </Grid>
        </>
    );
}

export default Home;