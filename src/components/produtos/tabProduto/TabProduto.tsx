import React, { useState } from 'react'
import { AppBar, Tab, Tabs, Typography, Toolbar } from '@material-ui/core';
import { TabContext, TabPanel } from '@material-ui/lab';
import { Link } from 'react-router-dom';
import ListaProduto from '../listaProduto/ListaProduto';
import { Box } from "@mui/material";
import './TabProduto.css';


function TabProduto() {
  const [value, setValue] = useState('1')
  function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
    setValue(newValue);
  }
  return (
    <>
      <TabContext value={value}>
        <AppBar position="static">
          <Tabs className="cor" centered indicatorColor="secondary" onChange={handleChange}>
            <Tab label="Todos os produtos" value="1" className='titulo' />
            <Tab label="Sobre a Colheita Fresca" value="2" className='titulo' />
            <Tab label="Quem somos" value="3" className='titulo' />
          </Tabs>
        </AppBar>
        <TabPanel value="1">
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <ListaProduto />
          </Box>
        </TabPanel>
        <TabPanel value="2">
          <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">Sobre a Colheita Fresca</Typography>
          <Typography variant="body1" gutterBottom color="textPrimary" align="justify" className='fonte1'>Nossa missão é facilitar a conexão de pessoas com produtos orgânicos, diretamente com produtores familiares. Temos como objetivos diminuir o desperdício de alimentos, estimular o consumo de alimentos orgânicos com qualidade e preço justo, incentivar o convívio social e assistir famílias que se encontram em condições de vulnerabilidade.</Typography>
        </TabPanel>
        <TabPanel value="3">
          <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">Sobre a Colheita Fresca</Typography>
          <Typography variant="body1" gutterBottom color="textPrimary" align="justify" className='fonte1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Venenatis a condimentum vitae sapien pellentesque habitant morbi.</Typography>
          <Box display="flex" justifyContent="center" className="wrap">
            <Box justifyContent="center" className='p-30'>
              <Link to='/home' className='texto-decorator-none'>
                <img className='br-50' src="https://i.imgur.com/DYIs2rv.jpg" alt="Logotipo" height={150} width={150} /></Link>
              <Typography variant="h6" gutterBottom color="textPrimary" component="h3" align="center" className='titulo, fonte2'>Alexandra Reis</Typography>
              <Typography variant="h6" gutterBottom color="textPrimary" component="h3" align="center"><span ><a href="https://github.com/AlexandraReis" className="legenda">GitHub | </a><a href="https://www.linkedin.com/in/alexandra-reis-dev/" className="legenda">LinkedIn</a></span>
              </Typography>
            </Box>
            <Box justifyContent="center" className='p-30'>
              <img className='br-50' src="https://i.imgur.com/w511C5I.jpg" alt="Logotipo" height={150} width={150} />
              <Typography variant="h6" gutterBottom color="textPrimary" component="h3" align="center" className='titulo, fonte2'>Aline Sassaki</Typography>
              <Typography variant="h6" gutterBottom color="textPrimary" component="h3" align="center"><span ><a href="https://github.com/asassaki" className="legenda">GitHub | </a><a href="https://www.linkedin.com/in/alinesassaki/" className="legenda">LinkedIn</a></span>
              </Typography>
            </Box>
            <Box justifyContent="center" className='p-30'>
              <img className='br-50' src="https://i.imgur.com/4Nz4tWa.jpg" alt="Logotipo" height={150} width={150} />
              <Typography variant="h6" gutterBottom color="textPrimary" component="h3" align="center" className='titulo, fonte2'>Camilla Villares</Typography>
              <Typography variant="h6" gutterBottom color="textPrimary" component="h3" align="center"><span ><a href="https://github.com/Cammy-Villares" className="legenda">GitHub | </a><a href="https://www.linkedin.com/in/camilla-villares-8282b0187/" className="legenda">LinkedIn</a></span>
              </Typography>
            </Box>
            <Box justifyContent="center" className='p-30'>
              <img className='br-50' src="https://i.imgur.com/GlRRWvn.jpg" alt="Logotipo" height={150} width={150} />
              <Typography variant="h6" gutterBottom color="textPrimary" component="h3" align="center" className='titulo, fonte2'>Isabel Brolhato</Typography>
              <Typography variant="h6" gutterBottom color="textPrimary" component="h3" align="center"><span ><a href="https://github.com/isabel-brolhato" className="legenda">GitHub | </a><a href="https://www.linkedin.com/in/isabel-brolhato/" className="legenda">LinkedIn</a></span>
              </Typography>
            </Box>
            <Box justifyContent="center" className='p-30'>
              <img className='br-50' src="https://i.imgur.com/xE46LXF.jpg" alt="Logotipo" height={150} width={150} />
              <Typography variant="h6" gutterBottom color="textPrimary" component="h3" align="center" className='titulo, fonte2'>Leticia Zanotti</Typography>
              <Typography variant="h6" gutterBottom color="textPrimary" component="h3" align="center"><span ><a href="https://github.com/Leticiazanotti" className="legenda">GitHub | </a><a href="https://www.linkedin.com/in/let%C3%ADcia-zanotti-517a92218/" className="legenda">LinkedIn</a></span>
              </Typography>
            </Box>
            <Box justifyContent="center" className='p-30'>
              <img className='br-50' src="https://i.imgur.com/LX042So.jpg" alt="Logotipo" height={150} width={150} />
              <Typography variant="h6" gutterBottom color="textPrimary" component="h3" align="center" className='titulo, fonte2'>Silvia Santana</Typography>
              <Typography variant="h6" gutterBottom color="textPrimary" component="h3" align="center"><span ><a href="https://github.com/oliversms" className="legenda">GitHub | </a><a href="https://www.linkedin.com/in/silvia-oliveira-6b02abb7/" className="legenda">LinkedIn</a></span>
              </Typography>
            </Box>
            <Box justifyContent="center" className='p-30'>
              <img className='br-50' src="https://i.imgur.com/iUVDOW0.jpg" alt="Logotipo" height={150} width={150} />
              <Typography variant="h6" gutterBottom color="textPrimary" component="h3" align="center" className='titulo, fonte2'>Stephany Souza</Typography>
              <Typography variant="h6" gutterBottom color="textPrimary" component="h3" align="center"><span ><a href="https://github.com/11Stephany" className="legenda">GitHub | </a><a href="https://www.linkedin.com/in/stephany-souza-ribeiro/" className="legenda">LinkedIn</a></span>
              </Typography>
            </Box>
          </Box>
        </TabPanel>
      </TabContext>
    </>
  );
}
export default TabProduto;