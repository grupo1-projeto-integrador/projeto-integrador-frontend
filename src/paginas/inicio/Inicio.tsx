import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { Box } from "@mui/material";
import TabProduto from "../../components/produtos/tabProduto/TabProduto";
import ModalProduto from "../../components/produtos/modalProduto/ModalProduto";
import "./Inicio.css";


function Home() {

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
