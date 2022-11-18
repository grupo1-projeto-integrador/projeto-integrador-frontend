import React, { useEffect, useState } from 'react'
import { Typography, Button, Card, CardActions, CardContent } from "@material-ui/core"
import './DeletarProduto.css';
import { Box } from "@mui/material";
import Produto from '../../../models/Produto';
import { buscaId, deleteId } from '../../../services/Service';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/TokensReducers';
import { toast } from 'react-toastify';

function DeletarProduto() {
    let history = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [produto, setProduto] = useState<Produto>()
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token == "") {
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

    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/produtos/${id}`, setProduto, {
            headers: {
                'Authorization': token
            }
        })
    }

    function sim() {
        history('/produtos')
        deleteId(`/produtos/${id}`, {
            headers: {
                'Authorization': token
            }
        });
        toast.success('Produto deletado com sucesso', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
    }

    function nao() {
        history('/produtos')
    }

    return (
        <>
            <Box m={2}>
                <Card variant="outlined" >
                    <CardContent>
                        <Box justifyContent="center">
                            <Typography color="textSecondary" gutterBottom>
                                Deseja excluir o Produto:
                            </Typography>
                            <Typography color="textSecondary" >
                                {produto?.nome}
                            </Typography>
                        </Box>
                    </CardContent>
                    <CardActions>
                        <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
                            <Box mx={2}>
                                <Button onClick={sim} className="marginLeft" variant='contained' size='large' color="primary">
                                    Sim
                                </Button>
                            </Box>
                            <Box>
                                <Button onClick={nao} size='large' variant='contained' color="secondary">
                                    Não
                                </Button>
                            </Box>
                        </Box>
                    </CardActions>
                </Card>
            </Box>
        </>
    );
}
export default DeletarProduto;