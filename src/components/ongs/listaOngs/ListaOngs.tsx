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
    nome: "Alcóolicos anônimos",
    image: "https://i.imgur.com/nlzsr6P.png",
    link: "https://google.com",
  },
  {
    nome: "MST",
    image: "https://i.imgur.com/nlzsr6P.png",
    link: "https://yahoo.com",
  },
  {
    nome: "Góticos livres",
    image: "https://i.imgur.com/nlzsr6P.png",
    link: "https://mercadolivre.com",
  },
];

const ListaOngs = () => {
  return (
    <div className="card1">
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
