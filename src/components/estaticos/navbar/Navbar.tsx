import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/TokensReducers';
import { addToken } from '../../../store/tokens/Actions';
import { toast } from 'react-toastify';
import Usuario from '../../../models/Usuario';
import { buscaId } from '../../../services/Service';

function Navbar() {
  const token = useSelector<TokenState, TokenState['tokens']>(
    (state) => state.tokens
  );

  const userId = useSelector<TokenState, TokenState['id']>((state) => state.id);
  const tipo = useSelector<TokenState, TokenState['tipo']>(
    (state) => state.tipo
  );

  let history = useNavigate();
  const dispatch = useDispatch();

  function goLogout() {

    dispatch(addToken(''));
    toast.info('Usuário deslogado', {
      position: 'top-right',

      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      theme: 'colored',
      progress: undefined,
    });
    history('/login');

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
    nome: '',
    email: '',
    senha: '',
    cpf: '',
    cnpj: '',
    endereco: '',
    tipo: tipo,
  });


  return (
    <>
      {window.location.pathname === '/login' ||
        window.location.pathname === '/cadastrousuario' ? (
        <></>
      ) : (
        <AppBar className="color" position="static">
          <Toolbar variant="dense">
            <Box className="cursor, menu">
              <Box display="flex" justifyContent="space-between">
                <Toolbar>
                  <Link to="/home" className="texto-decorator-none">
                    <img
                      src="https://i.imgur.com/vyjIuOv.png"
                      alt="Logotipo"
                      height={60}
                      width={190}
                    />
                  </Link>
                </Toolbar>
              </Box>
            </Box>

            <Box display="flex" flex-direction="row" justifyContent="start">
              <Link to="/home" className="text-decorator-none">
                <Box mx={1.5} className="cursor">
                  <Typography variant="h6" color="inherit" className="fonte">
                    Home
                  </Typography>
                </Box>
              </Link>
              <Link to="/produtos" className="text-decorator-none">
                <Box mx={1.5} className="cursor">
                  <Typography variant="h6" color="inherit" className="fonte">
                    Produtos
                  </Typography>
                </Box>
              </Link>
              <Link to="/categoria" className="text-decorator-none">
                <Box mx={1.5} className="cursor">
                  <Typography variant="h6" color="inherit" className="fonte">
                    Categorias
                  </Typography>
                </Box>
              </Link>
              <Link to="/ongs" className="text-decorator-none">
                <Box mx={1.5} className="cursor">
                  <Typography variant="h6" color="inherit" className="fonte">
                    Ong's
                  </Typography>
                </Box>
              </Link>
              </Box>
              {token === '' ? (
                <Link to="/login" className="text-decorator-none">
                <Box mx={1.5} className="cursor">
                  <Typography variant="h6" color="inherit" className="fonte">
                    Login
                  </Typography>
                </Box>
                </Link>
              ) : (
                <Box mx={1.5} className="cursor" onClick={goLogout}>
                  <Typography variant="h6" color="inherit" className="fonte">
                    Sair
                  </Typography>
                </Box>
              )}
            <Box mx={1.5} className="cursor">
              <Toolbar >
                <img
                  src="https://i.imgur.com/2TUDqTB.png"
                  alt="Carrinho"
                  height={40}
                  width={40}
                />
              </Toolbar>
            </Box>
          </Toolbar>
        </AppBar>
      )}
    </>
  );

}

export default Navbar;