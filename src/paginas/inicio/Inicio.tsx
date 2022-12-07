import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { Box } from "@mui/material";
import TabProduto from "../../components/produtos/tabProduto/TabProduto";
import ModalProduto from "../../components/produtos/modalProduto/ModalProduto";
import "./Inicio.css";


function Inicio() {

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
                
              </Box>
            </Box>
          </div>
        </Grid>
        <Grid xs={12} className="produto">
        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">Sobre a Colheita Fresca</Typography>
        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">Sobre a Colheita Fresca</Typography>
          <Typography variant="body1" gutterBottom color="textPrimary" align="justify" className='fonteqs'>Nós do Colheita Fresca, acreditamos em dar 110%. Onde ajudamos as comunidades agrícolas a crescerem e a promover uma mentalidade voltada para prover o bem ao próximo. Sendo a conexão entre produtores familiares e clientes, além de colaborar com ONGS que atuam pelo combate à fome no Brasil. Acreditamos que a mudança começa com pequenos passos antes de se tornar uma grande conquista.
          <p>Vamos juntos nesse passo?</p>
          <p><b>Nossa missão:</b></p>
          <p>Conectar  você a produtos orgânicos de qualidade, incentivando a conexão humana e conscientizando sobre a urgência de ações para garantir que todos tenham acesso a alimentação.</p>
          <p><b>Nossos Valores:</b></p>
          <p>Diminuir o desperdício de alimentos, estimular o consumo de produtos orgânicos com qualidade e encorajar através das lentes da humanidade impactos positivos na vida do próximo. Uma comunidade, um estado e um país por vez.</p>
          <p><b>Como Trabalhamos:</b></p>
          <p><b>1.</b> Colaboração com produtores familiares que compartilham também de nossa missão e valores.</p>
          <p><b>2.</b> Gerando momentos de conexão entre clientes com seus bairros.</p>
          <p><b>3.</b> Conectamos ONG’S que auxiliam famílias em condições de vulnerabilidade.</p>
          <p><b>4.</b> Plantamos esperança de uma vida melhor para todos.</p>

</Typography>

        </Grid>
      </Grid>
    </>
  );
}

export default Inicio;
