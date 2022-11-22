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
        </TabPanel>
        <TabPanel value="3">
          <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">Sobre a Colheita Fresca</Typography>
          <Typography variant="body1" gutterBottom color="textPrimary" align="justify" className='fonte1'>O projeto Colheita Fresca foi idealizado pela equipe de desenvolvedoras formadas pela Generation Brasil no curso de Desenvolvimento Java Full Stack.</Typography>
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