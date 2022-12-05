import React, { useEffect } from "react";
import { Typography, Grid, Button, Toolbar } from "@material-ui/core";
import { Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import TabProduto from "../../components/produtos/tabProduto/TabProduto";
import ModalProduto from "../../components/produtos/modalProduto/ModalProduto";
import "./Home.css";
import { useSelector } from "react-redux";
import { TokenState } from "../../store/tokens/TokensReducers";
import { toast } from "react-toastify";
import ModalCategoria from "../../components/categorias/listaCategoria/modalCategoria/ModalCategoria";

function Home() {
  let history = useNavigate();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  useEffect(() => {
    if (token == "") {
      toast.error("Você deve estar logado", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });
      history("/login");
    }
  }, [token]);

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className="caixa"
      >
        <Grid alignItems="center" item xs={12}>
          <div className="logoWrapper">
            <Box className="logoBox" paddingX={20}>
              <Box display="flex" justifyContent="center">
                <Box>
                  <img
                    src="https://i.imgur.com/nlzsr6P.png"
                    alt="Logotipo"
                    height={150}
                    width={125}
                  />
                </Box>
              </Box>
              <Typography
                variant="h3"
                gutterBottom
                color="textPrimary"
                component="h3"
                align="center"
                className="titulo, fonte2"
              >
                Seja bem vinde à Colheita Fresca!
              </Typography>
            </Box>
            <Box display="flex" justifyContent="center">
              <Box marginRight={1}>
                <ModalProduto />
                <ModalCategoria />
              </Box>
            </Box>
          </div>
        </Grid>
        <Grid xs={12} className="produto">
          <TabProduto />
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
