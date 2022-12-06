import { Box } from "@mui/material";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const ongs = [
  {
    nome: "Ação da Cidadania",
    image: "https://i.imgur.com/3CIN4t0.png",
    link: "https://www.acaodacidadania.org.br/",
  },
  {
    nome: "Amigos do Bem",
    image: "https://i.imgur.com/ZixYJZf.png",
    link: "https://www.instagram.com/amigosdobem/",
  },
  {
    nome: "Banco de Alimentos",
    image: "https://i.imgur.com/qu967bw.png",
    link: "https://www.instagram.com/ongbancodealimentos/",
  },
];

const ListaOngs = () => {
  return (

    
    <div className="card1">
      <h1></h1>
      {ongs.map((ong) => (
        <Box m={2}>          
          <Card variant="outlined" className="card">
            <CardContent className="cardInside">
              <Typography variant="h5" component="h2">
                {ong.nome}
              </Typography>
              <img
                src={ong.image}
                height={125}
                width={100}
                alt=""
                style={{
                  paddingTop: 8,
                  paddingBottom: 8,
                }}
              />

              <CardActions className="cardbotao">
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                >
                  <a
                    href={ong.link}
                    target="_blank"
                    className="text-decorator-none"
                  >
                    <Box mx={1}>
                      <Button
                        variant="contained"
                        className="btnAtualizar"
                        size="small"
                        color="primary"
                        style={{ marginBottom: 6 }}
                      >
                        visitar
                      </Button>
                    </Box>
                  </a>
                </Box>
              </CardActions>
            </CardContent>
          </Card>
        </Box>
      ))}
    </div>
  );
};

export default ListaOngs;
