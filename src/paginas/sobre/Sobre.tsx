import React from 'react';
import { Grid, Typography, TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import './Sobre.css';

function Sobre() {

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
        <Grid alignItems='center' xs={6}>
            <Box paddingX={20}>
               <h1> 
                Sobre nós
               </h1>
             <p>
             Nossa missão:

             Conectar  você a produtos orgânicos de qualidade, diretamente dos produtores familiares parceiros.

             </p>
              </Box>  
        </Grid>
        <Grid xs={6} className='imagem'>

        </Grid>
    </Grid>
);
}

export default Sobre;