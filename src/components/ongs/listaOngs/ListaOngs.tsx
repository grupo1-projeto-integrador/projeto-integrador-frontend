import { Box } from "@mui/material";
import {
  Grid,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";
import "./ListaOngs.css";


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
  {
    nome: "Instituto Stop Hunger",
    image: "https://i.imgur.com/V3jAIVH.png",    
    link: "http://br.stop-hunger.org/home.html",
  },
  {
    nome: "Tem Gente com Fome",
    image: "https://i.imgur.com/8XiWRxi.jpg",    
    link: "https://www.instagram.com/temgentecomfomeoficial/",
  },
  {
    nome: "Gerando Falcões",
    image: "https://i.imgur.com/s6KjZqq.png",    
    link: "https://gerandofalcoes.com/coronanoparedao",
  }

];


const ListaOngs = () => {
  return (


    <div className="card1">

      <Grid container direction='row' justifyContent='center' alignItems='center'>
        <Grid alignItems='center' xs={6}>
          <Box paddingX={20}>
            <h1>
              Ong's parceiras
            </h1>
            <p>
              Acreditamos que a mudança começa com pequenos passos antes de se tornar uma grande conquista.

              Por este motivo promovemos algumas Ong's que atuam em todo o território nacional no combate á fome.

              Você consegue acessar o site de cada um delas apenas clicando em visitar, assim terá a oportunidade de saber um pouco mais sobre elas e contribuir da forma que puder com a mais próxima de você.
            </p>
          </Box>
        </Grid>
      </Grid>


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
