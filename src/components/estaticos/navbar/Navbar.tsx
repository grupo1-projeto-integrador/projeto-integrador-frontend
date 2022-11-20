import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/TokensReducers';
import { addToken } from '../../../store/tokens/Actions';
import { toast } from 'react-toastify';
import Usuario from '../../../models/Usuario';
import { buscaId } from '../../../services/Service';

function Navbar() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    
    const userId = useSelector<TokenState, TokenState['id']>(
        (state) => state.id
    )

    const tipo = useSelector<TokenState, TokenState["tipo"]>(
        (state) => state.tipo
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


    let novaCategoria;

    if(usuario.tipo ==="vendedor"){
    novaCategoria =                <> <Link to="/formularioCategoria" className="text-decorator-none">
        <Box mx={1} className='cursor'>
            <Typography variant="h6" color="inherit">
                Cadastrar Categoria
            </Typography>
        </Box>
        </Link>
        </>
    }else{
        novaCategoria = ''
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