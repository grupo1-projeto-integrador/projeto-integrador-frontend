import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";
import Produto from "../../../models/Produto";
import { Box } from "@mui/material";
import "./ListaProduto.css";
import { busca, buscaId } from "../../../services/Service";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/TokensReducers";
import { toast } from "react-toastify";
import Usuario from "../../../models/Usuario";

function ListaProduto() {
  const [produto, setProduto] = useState<Produto[]>([]);
  let history = useNavigate();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  const userId = useSelector<TokenState, TokenState["id"]>((state) => state.id);

  const tipo = useSelector<TokenState, TokenState["tipo"]>(
    (state) => state.tipo
  );

  async function getUserById(id: number) {
    await buscaId(`usuarios/${id}`, setUsuario, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    getUserById(+userId);
  });

  const [usuario, setUsuario] = useState<Usuario>({
    id: +userId,
    nome: "",
    email: "",
    senha: "",
    cpf: "",
    cnpj: "",
    endereco: "",
    tipo: tipo,
  });

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

  async function getProduto() {
    await busca("/produtos", setProduto, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    getProduto();
  }, [produto.length]);

  return (
    <div className="card1">
      {produto.map((produto) => {
        const definirImagens = () => {
          switch (produto.nome) {
            case "Beringela":
              return "https://levebemdelivery.com.br/wp-content/uploads/2014/02/BERINJELA-ORG%C3%82NICA.jpg";
            case "Amora":
              return "http://matonoprato.com.br/wp-content/uploads/2019/07/amora-1.png";
            case "Feijão":
              return "https://cdn.awsli.com.br/757/757669/produto/179771051/fb0b9e4c18.jpg";
            case "Maçã":
              return "https://ibassets.com.br/ib.item.image.big/b-7f796a9ef182423f9b8da1b7672d652e.jpeg";
            case "Pera":
              return "https://www.emporiodasfrutasam.com.br/data/produto/l/47-113.jpg";
            case "Uva":
              return "https://www.proativaalimentos.com.br/image/cache/catalog/img_prod/uva[1]-1000x1000.jpg";
            case "Batata":
              return "https://static1.conquistesuavida.com.br/ingredients/5/54/52/05/@/24682--ingredient_detail_ingredient-2.png";
            case "Arroz":
              return "https://www.san-lorenzo.com/assets/uploads/riso-carnaroli_1625481745.png";
            case "Banana":
              return "https://ceagesp.gov.br/wp-content/uploads/2019/12/Banana_pratapng-328x328.png";
          }
        };
        return (
          <Box m={2}>
            <Card variant="outlined" className="card">
              <CardContent className="cardInside">
                <Typography variant="h5" component="h2">
                  {produto.nome}
                </Typography>
                <img
                  src={definirImagens()}
                  height={125}
                  width={100}
                  alt=""
                  style={{
                    paddingTop: 8,
                    paddingBottom: 8,
                  }}
                />
                <Typography variant="body2" component="p">
                  Valor: {produto.valor}
                </Typography>
                <Typography variant="body2" component="p">
                  Quantidade:{produto.kg}kg
                </Typography>
                <Typography variant="body2" component="p">
                  Estoque:{produto.estoque}
                </Typography>
                <Typography variant="body2" component="p">
                 Categoria: {produto.categoria?.titulo}
                </Typography>
              </CardContent>
              {usuario.tipo === "vendedor" && (
                <CardActions className="cardbotao">
                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                  >
                    <Link
                      to={`/formularioProduto/${produto.id}`}
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
                          atualizar
                        </Button>
                      </Box>
                    </Link>
                    <Link
                      to={`/deletarProduto/${produto.id}`}
                      className="text-decorator-none"
                    >
                      <Box mx={1}>
                        <Button
                          variant="contained"
                          className="btnCancelar"
                          size="small"
                          color="secondary"
                        >
                          deletar
                        </Button>
                      </Box>
                    </Link>
                  </Box>
                </CardActions>
              )}
            </Card>
          </Box>
        );
      })}
    </div>
  );
}

export default ListaProduto;
