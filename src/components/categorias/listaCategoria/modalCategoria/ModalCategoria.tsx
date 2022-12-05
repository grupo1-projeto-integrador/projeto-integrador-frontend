import React, { useEffect, useState } from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Button, Typography } from "@material-ui/core"
import { Box, Modal } from "@mui/material";
import CloseIcon from '@material-ui/icons/Close';
import './ModalCategoria.css';
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../../store/tokens/TokensReducers';
import { buscaId } from '../../../../services/Service';
import Usuario from '../../../../models/Usuario';
import CadastroCategoria from '../../cadastroCategoria/CadastroCategoria';


function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            position: 'absolute',
            width: 400,
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
    }),
);

function ModalCategoria() {

    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );


    const dispatch = useDispatch();

    const userId = useSelector<TokenState, TokenState['id']>(
        (state) => state.id
    )

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
        tipo: tipo
    });


    const body = (
        <div style={modalStyle} className={classes.paper}>
            <Box display="flex" justifyContent="flex-end" className="cursor">
                <CloseIcon onClick={handleClose} />

            </Box>

            <CadastroCategoria />

        </div>
    );

    let modalComp;

    if (usuario.tipo === "vendedor") {
        modalComp = <div>
            <Button
                variant="outlined"
                className="btnModal"
                onClick={handleOpen}>Nova Categoria</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    } else {
        modalComp = ''

    }

    return (
        <>
            {modalComp}
        </>
    );
}
export default ModalCategoria;