import { Box } from "@mui/material";
import React, { useState, useEffect, ChangeEvent } from "react";
import { useNavigate, Link } from "react-router-dom";
import Usuario from "../../models/Usuario";
import { cadastroUsuario } from "../../services/Service";
import {
  Grid,
  Typography,
  Button,
  TextField,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import "./CadastroUsuario.css";
import { toast } from "react-toastify";

function CadastroUsuario() {
  let navigate = useNavigate();
  const [confirmarSenha, setConfirmarSenha] = useState<String>("");
  const [user, setUser] = useState<Usuario>({
    id: 0,
    nome: "",
    email: "",
    senha: "",
    cpf: null,
    cnpj: null,
    endereco: "",
    tipo: "",
  });

  const [userResult, setUserResult] = useState<Usuario>({
    id: 0,
    nome: "",
    email: "",
    senha: "",
    cpf: null,
    cnpj: null,
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

  async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    if (confirmarSenha === user.senha) {
      try {
        await cadastroUsuario("/usuarios/cadastrar", user, setUserResult);
        toast.success("Usuário cadastrado com sucesso", {
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
        toast.error("Falha interna ao cadastrar", {
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
    } else {
      toast.error("As senhas não conferem, tente novamente", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });

      setUser({ ...user, senha: "" });
      setConfirmarSenha("");
    }
  }

  var dadoComponent;
  if (user.tipo == "vendedor") {
    dadoComponent = (
      <TextField
        value={user.cnpj}
        onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
        id="cnpj"
        label="Cnpj"
        variant="outlined"
        name="cnpj"
        margin="normal"
        fullWidth
      />
    );
  } else {
    dadoComponent = (
      <TextField
        value={user.cpf}
        onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
        id="cpf"
        label="Cpf"
        variant="outlined"
        name="cpf"
        margin="normal"
        fullWidth
      />
    );
  }

  const [formCadastro, setFormCadastro] = useState(true);

  const padraoEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  useEffect(() => {
    if (
      user.nome.length >= 2 &&
      user.email.match(padraoEmail) &&
      user.senha.length > 3 &&
      user.senha === confirmarSenha
    ) {
      setFormCadastro(false);
    }
  }, [user]);

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      className="box"
    >
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
              className="textos2, fonte2"
            >
              Cadastro
            </Typography>
            <FormControl className="form">
              <FormLabel className="fonte1" id="tipoUsuario">
                Você é um...
              </FormLabel>
              <RadioGroup
                className="fonte1"
                row
                aria-labelledby="tipoDeUsuario"
                value={user.tipo}
                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                id="tipo"
                name="tipo"
              >
                <FormControlLabel
                  value="consumidor"
                  control={<Radio />}
                  label="Consumidor"
                />
                <FormControlLabel
                  value="vendedor"
                  control={<Radio />}
                  label="Fornecedor"
                />
              </RadioGroup>
            </FormControl>
            <TextField
              className="fonte1"
              value={user.nome}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              id="nome"
              label="Nome"
              variant="outlined"
              name="nome"
              margin="normal"
              fullWidth
            />
            <TextField
              value={user.email}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              id="email"
              label="Email"
              variant="outlined"
              name="email"
              margin="normal"
              fullWidth
            />
            <TextField
              value={user.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              id="senha"
              label="Senha"
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
              label="Confirme a senha"
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
              label="Endereço"
              variant="outlined"
              name="endereco"
              margin="normal"
              fullWidth
            />
            {dadoComponent}
            <Box marginTop={2} textAlign="center">
              <Link to="/login" className="text-decorator-none">
                <Button
                  variant="contained"
                  color="secondary"
                  className="btnCancelar"
                  style={{ marginRight: 6 }}
                >
                  Cancelar
                </Button>
              </Link>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={formCadastro}
              >
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
