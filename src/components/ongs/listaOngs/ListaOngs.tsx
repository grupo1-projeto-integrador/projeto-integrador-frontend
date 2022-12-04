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
    image: "",
    link: '',
  },
  {
    nome: "MST",
    image: "",
    link: '',
  },
  {
    nome: "Góticos livres",
    image: "",
    link: '',
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
                  <Link
                    to={ong.link}
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
                  </Link>
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
