import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import Produto from '../../../models/Produto'
import { Box } from "@mui/material";
import './ListaProduto.css';
import { busca } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/TokensReducers';
import { toast } from 'react-toastify';

function ListaProduto() {
    const [produto, setProduto] = useState<Produto[]>([])
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

    async function getProduto(){
        await busca("/produtos", setProduto, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(()=>{
        getProduto()
    }, [produto.length])

    return (
        <div className='card1' >
        {
            produto.map(produto =>(
            <Box m={2} >
                <Card variant="outlined" className= "card">
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Produtos
                        </Typography>
                        <Typography variant="h5" component="h2">
                            {produto.nome}
                        </Typography>
                        <Typography variant="body2" component="p">
                            {produto.valor}
                        </Typography>
                        <Typography variant="body2" component="p">
                            {produto.kg}
                        </Typography>
                        <Typography variant="body2" component="p">
                            {produto.estoque}
                        </Typography><Typography variant="body2" component="p">
                            {produto.imagem}
                        </Typography>
                        <Typography variant="body2" component="p">
                            {produto.categoria?.titulo}
                        </Typography>
                    </CardContent>
                    <CardActions className='cardbotao'>
                        <Box display="flex" justifyContent="center" mb={1.5}>
                            <Link to={`/formularioProduto/${produto.id}`} className="text-decorator-none" >
                                <Box mx={1}>
                                    <Button variant="contained" className="marginLeft, btnAtualizar" size='small' color="primary" >
                                        atualizar
                                    </Button>
                                </Box>
                            </Link>
                            <Link to={`/deletarProduto/${produto.id}`}  className="text-decorator-none">
                                <Box mx={1}>
                                    <Button variant="contained" className="btnCancelar  " size='small' color="secondary">
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
        </div>
        );
}

export default ListaProduto;