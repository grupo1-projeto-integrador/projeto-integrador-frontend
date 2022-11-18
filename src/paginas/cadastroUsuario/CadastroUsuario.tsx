import { Box } from "@mui/material";
import React, { useState, useEffect, ChangeEvent } from "react";
import { useNavigate, Link } from "react-router-dom";
import Usuario from "../../models/Usuario";
import { cadastroUsuario } from "../../services/Service";
import { Grid, Typography, Button, TextField } from "@material-ui/core";
import "./CadastroUsuario.css";

function CadastroUsuario() {
  let navigate = useNavigate();
  const [confirmarSenha, setConfirmarSenha] = useState<String>("");
  const [user, setUser] = useState<Usuario>({
    id: 0,
    nome: "",
    email: "",
    senha: "",
    cpf: "",
    cnpj: "",
    endereco: "",
    tipo: "",
    
  });

  const [userResult, setUserResult] = useState<Usuario>({
    id: 0,
    nome: "",
    email: "",
    senha: "",
    cpf: "",
    cnpj: "",
    endereco: "",
    tipo: "",
  });

  useEffect(() => {
    if (userResult.id != 0) {
      navigate("/login");
    }
  }, [userResult]);

  function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
    setConfirmarSenha(e.target.value);
  }

  function updatedModel(e: ChangeEvent<HTMLInputElement>) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }
  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    if (confirmarSenha == user.senha) {
        console.log(user)
      cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult); 
      alert("Usuario cadastrado com sucesso");
    } else {
      alert( "Dados inconsistentes. Favor verificar as informações de cadastro.");
    }
  }
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid item xs={6} className="imagem2"></Grid>
      <Grid item xs={6} alignItems="center">
        <Box paddingX={10}>
          <form onSubmit={onSubmit}>
            <Typography
              variant="h3"
              gutterBottom
              color="textPrimary"
              component="h3"
              align="center"
              className="textos2"
            >
              Cadastrar
            </Typography>
            <TextField
              value={user.nome}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              id="nome"
              label="nome"
              variant="outlined"
              name="nome"
              margin="normal"
              fullWidth
            />
            <TextField
              value={user.email}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              id="email"
              label="email"
              variant="outlined"
              name="email"
              margin="normal"
              fullWidth
            />
            <TextField
              value={user.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              id="senha"
              label="senha"
              variant="outlined"
              name="senha"
              margin="normal"
              type="password"
              fullWidth
            />
            <TextField
              value={confirmarSenha}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                confirmarSenhaHandle(e)
              }
              id="confirmarSenha"
              label="confirmarSenha"
              variant="outlined"
              name="confirmarSenha"
              margin="normal"
              type="password"
              fullWidth
            />
            <TextField
              value={user.endereco}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              id="endereco"
              label="endereço"
              variant="outlined"
              name="endereco"
              margin="normal"
              fullWidth
            />
            <TextField
              value={user.tipo}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              id="tipo"
              label="tipo"
              variant="outlined"
              name="tipo"
              margin="normal"
              fullWidth

            />
            <TextField
              value={user.cpf}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              id="cpf"
              label="cpf"
              variant="outlined"
              name="cpf"
              margin="normal"
              fullWidth
            />
            <TextField
              value={user.cnpj}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              id="cnpj"
              label="cnpj"
              variant="outlined"
              name="cnpj"
              margin="normal"
              fullWidth
            />
            <Box marginTop={2} textAlign="center">
              <Link to="/login" className="text-decorator-none">
                <Button
                  variant="contained"
                  color="secondary"
                  className="btnCancelar"
                >
                  Cancelar
                </Button>
              </Link>
              <Button type="submit" variant="contained" color="primary">
                Cadastrar
              </Button>
            </Box>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
}

export default CadastroUsuario;
