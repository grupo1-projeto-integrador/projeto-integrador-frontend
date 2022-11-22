import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import Categoria from '../../../models/Categoria';
import { Box } from "@mui/material";
import './ListaCategoria.css';
import { busca, buscaId } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/TokensReducers';
import { toast } from 'react-toastify';
import Usuario from '../../../models/Usuario';

function ListaCategoria() {
    const [categoria, setCategoria] = useState<Categoria[]>([])
    let history = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    const userId = useSelector<TokenState, TokenState['id']>(
        (state) => state.id
    )

    const tipo = useSelector<TokenState, TokenState["tipo"]>(
        (state) => state.tipo
      );

      async function getUserById(id: number) {
        await buscaId(`usuarios/${id}`, setUsuario, {
          headers: {
            Authorization: token,
          },
        });
      }
    
    
      useEffect(() => {
        getUserById(+userId);
      });

    const [usuario, setUsuario] = useState<Usuario>({
        id: +userId,
        nome: "",
        email: "",
        senha: "",
        cpf: "",
        cnpj: "",
        endereco:"",
        tipo: tipo
      });


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
        <div className='card1' > 
        {
            categoria.map(categoria => (
            <Box m={2} >
                <Card variant="outlined" className= "card">
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Categoria
                        </Typography>
                        <Typography variant="h5" component="h2">
                            {categoria.titulo}
                        </Typography>
                    </CardContent>
                    {usuario.tipo ==='vendedor'? 
                    (<> <CardActions>
                        <Box display="flex" justifyContent="center" mb={1.5} >

                            <Link to={`/formularioCategoria/${categoria.id}`} className="text-decorator-none">
                                <Box mx={1}>
                                    <Button variant="contained" className="btnAtualizar" size='small' color="primary" >
                                        atualizar
                                    </Button>
                                </Box>
                            </Link>
                            <Link to={`/deletarCategoria/${categoria.id}`} className="text-decorator-none">
                                <Box mx={1}>
                                    <Button variant="contained" className="btnDeletar" size='small' color="secondary">
                                        deletar
                                    </Button>
                                </Box>
                            </Link>
                        </Box>
                    </CardActions>
                        </>
                        ):
                    (<>
                    </>)}
                </Card>
            </Box>
            ))
            }
        </div>
    );
}


export default ListaCategoria;