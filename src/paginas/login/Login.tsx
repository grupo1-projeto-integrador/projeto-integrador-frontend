import React, { ChangeEvent, useState, useEffect } from "react";
import { Grid, Typography, TextField, Button } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import "./Login.css";
import UserLogin from "../../models/UserLogin";
import { login } from "../../services/Service";
import { useDispatch } from 'react-redux';
import { addToken, addId, addTipo } from '../../store/tokens/Actions';
import { toast } from 'react-toastify';

function Login() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [token, setToken] = useState('');
  const [userLogin, setUserLogin] = useState<UserLogin>({
    id: 0,
    nome: "",
    usuario: "",
    tipo:"",
    foto: "",
    senha: "",
    token: "",
  });

  const [respUserLogin, setRespUserLogin] = useState <UserLogin>({
    id: 0,
    nome: '',
    usuario: "",
    tipo:"",
    foto: "",
    senha: "",
    token: "",
  })

  function updateModel(event: ChangeEvent<HTMLInputElement>) {
    setUserLogin({
      ...userLogin,
      [event.target.name]: event.target.value,
    });
  }

  useEffect(() => {
    if (token !== '') {
      dispatch(addToken(token))
      navigate("/home");
    }
  }, [token]);

  useEffect(() => {
    if (respUserLogin.token !== '') {
      dispatch(addToken(respUserLogin.token))
      dispatch(addTipo(respUserLogin.tipo));
      dispatch(addId(respUserLogin.id.toString()));
      navigate('/home')
      console.log(token)
    }
  },[respUserLogin.token]);

  async function logar(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
            await login(`/usuarios/logar`, userLogin, setRespUserLogin);
            toast.success('Usuário logado com sucesso', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        } catch (error) {
            toast.error('Dados do usuário incorretos', {
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

   }

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center" className="box">
      <Grid alignItems="center" xs={6}>
        <Box paddingX={20}>
          <form onSubmit={logar}>
            <Typography
              variant="h3"
              gutterBottom
              color="textPrimary"
              component="h3"
              align="center"
              className="textos1"
            >
              Seja bem-vindo!
            </Typography>
            <TextField
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                updateModel(event)
              }
              value={userLogin.usuario}
              id="email"
              label="Email"
              variant="outlined"
              name="usuario"
              margin="normal"
              fullWidth
            />
            <TextField
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                updateModel(event)
              }
              value={userLogin.senha}
              id="senha"
              label="Senha"
              variant="outlined"
              name="senha"
              margin="normal"
              type="password"
              fullWidth
            />
            <Box marginTop={2} textAlign="center">
              <Button type="submit" variant="contained" color="primary" disabled={!userLogin.usuario || ! userLogin.senha} className='botao'>
                Logar
              </Button>
            </Box>
          </form>
          <Box display="flex" justifyContent="center" marginTop={2}>
            <Box marginRight={1}>
              <Typography variant="subtitle1" gutterBottom align="center">
                Ainda não tem uma conta?
              </Typography>
            </Box>
            <Link to="/cadastrousuario">
              <Typography
                variant="subtitle1"
                gutterBottom
                align="center"
                className="textos1"
              >
                Cadastre-se
              </Typography>
            </Link>
          </Box>
        </Box>
      </Grid>
      <Grid xs={6} className="imagem"></Grid>
    </Grid>
  );
}

export default Login;
