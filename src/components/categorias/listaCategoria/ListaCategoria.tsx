import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import Categoria from '../../../models/Categoria';
import { Box } from "@mui/material";
import './ListaCategoria.css';
import { busca } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/TokensReducers';
import { toast } from 'react-toastify';

function ListaCategoria() {
    const [categoria, setCategoria] = useState<Categoria[]>([])
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

    async function getCategoria(){
        await busca("/categoria", setCategoria, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(()=>{
        getCategoria()
    }, [categoria.length])

    return (
        <>
        {
            categoria.map(categoria => (
            <Box m={2} >
                <Card variant="outlined">
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Categoria
                        </Typography>
                        <Typography variant="h5" component="h2">
                            {categoria.titulo}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Box display="flex" justifyContent="center" mb={1.5} >

                            <Link to={`/formularioCategoria/${categoria.id}`} className="text-decorator-none">
                                <Box mx={1}>
                                    <Button variant="contained" className="marginLeft, btnAtualizar" size='small' color="primary" >
                                        atualizar
                                    </Button>
                                </Box>
                            </Link>
                            <Link to={`/deletarCategoria/${categoria.id}`} className="text-decorator-none">
                                <Box mx={1}>
                                    <Button variant="contained" className="btnCancelar" size='small' color="secondary">
                                        deletar
                                    </Button>
                                </Box>
                            </Link>
                        </Box>
                    </CardActions>
                </Card>
            </Box>
            ))
            }
        </>
    );
}


export default ListaCategoria;