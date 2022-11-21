import React, { ChangeEvent, useEffect, useState } from 'react'
import { Container, Typography, TextField, Button, Select, InputLabel, MenuItem, FormControl, FormHelperText } from "@material-ui/core"
import './CadastroProduto.css';
import { useNavigate, useParams } from 'react-router-dom';
import Categoria from '../../../models/Categoria';
import Produto from '../../../models/Produto';
import { busca, buscaId, post, put } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/TokensReducers';
import { toast } from 'react-toastify';

function CadastroProduto() {
    let history = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [categorias, setCategorias] = useState<Categoria[]>([])
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token == "") {
            toast.error('Você deve estar logado', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
            history("/login")
        }
    }, [token])

    const [categoria, setCategoria] = useState<Categoria>({
            id: 0,
            titulo: ''
        })

    const [produto, setProduto] = useState<Produto>({
        id: 0,
        nome: '',
        valor: 0,
        kg: '',
        estoque: '',
        imagem: '',
        categoria: null,
        usuario: null
    })

    useEffect(() => {
        getCategoria()
        if (id !== undefined) {
            findByIdProduto(id)
        }
    }, [id])

    async function getCategoria() {
        await busca("/categoria", setCategorias, {
            headers: {
                'Authorization': token
            }
        })
    }
    async function findByIdProduto(id: string) {
        await buscaId(`produtos/${id}`, setProduto, {
            headers: {
                'Authorization': token
            }
        })
    }
    function updatedProduto(e: ChangeEvent<HTMLInputElement>) {
        setProduto({
            ...produto,
            [e.target.name]: e.target.value,
            categoria: categoria
        })

    }
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if (id !== undefined) {
            put(`/produtos`, produto, setProduto, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Produto atualizado com sucesso', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });

        } else {
            post(`/produtos`, produto, setProduto, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Produto cadastrado com sucesso', {
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
        back()

    }

    function back() {
        history('/produtos')
    }
    return (
        <Container maxWidth="sm" className="topo, fonte1">
            <form onSubmit={onSubmit} >
                <Typography variant="h4" color="textSecondary" component="h1" align="center" className='fonte2'>Cadastro de Produto</Typography>
                <TextField value={produto.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="nome" label="Nome" variant="outlined" name="nome" margin="normal" fullWidth />
                <TextField value={produto.valor} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="valor" label="Valor" name="valor" variant="outlined" margin="normal" fullWidth />
                <TextField value={produto.kg} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="kg" label="Kg" name="kg" variant="outlined" margin="normal" fullWidth />
                <TextField value={produto.estoque} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="estoque" label="Estoque" name="estoque" variant="outlined" margin="normal" fullWidth />
                <TextField value={produto.imagem} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="imagem" label="Imagem" name="imagem" variant="outlined" margin="normal" fullWidth />

                <FormControl >
                    <InputLabel id="demo-simple-select-helper-label" className='fonte1'>Categoria </InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        onChange={(e) => buscaId(`/categoria/${e.target.value}`, setCategoria, {
                            headers: {
                                'Authorization': token
                            }
                        })}>
                        {
                            categorias.map(categoria => (
                                <MenuItem className='fonte1' value={categoria.id}>{categoria.titulo}</MenuItem>
                            ))
                        }
                    
                    </Select>
                    <FormHelperText className='fonte1'>Escolha uma categoria para o produto</FormHelperText>
                    <Button type="submit" variant="contained" disabled={categoria.id === 0} className='fonte3, botao'>
                        Finalizar
                    </Button>
                </FormControl>
            </form>
        </Container>
    )
}
export default CadastroProduto;
