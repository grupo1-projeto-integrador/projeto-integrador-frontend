import React, {useState} from 'react'
import { AppBar, Tab, Tabs, Typography, Toolbar } from '@material-ui/core';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaProduto from '../listaProduto/ListaProduto';
import { Box } from "@mui/material";
import './TabProduto.css';


function TabProduto() {
    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string){
        setValue(newValue);
    }
  return (
    <>
      <TabContext value={value}>
        <AppBar position="static">
          <Tabs className="cor" centered indicatorColor="secondary" onChange={handleChange}>
            <Tab label="Todos os produtos" value="1" className='titulo'/>
            <Tab label="Sobre a Colheita Fresca" value="2" className='titulo'/>
          </Tabs>
        </AppBar>
        <TabPanel value="1" >
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <ListaProduto />
          </Box>
        </TabPanel>
        <TabPanel value="2">
          <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">Sobre a Colheita Fresca</Typography>
          <Typography variant="body1" gutterBottom color="textPrimary" align="justify" className='fonte1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Venenatis a condimentum vitae sapien pellentesque habitant morbi. Mauris ultrices eros in cursus turpis. Volutpat maecenas volutpat blandit aliquam etiam. Dictumst quisque sagittis purus sit amet volutpat consequat mauris nunc. Quam quisque id diam vel quam. Dapibus ultrices in iaculis nunc sed augue. Sed nisi lacus sed viverra tellus in. Amet facilisis magna etiam tempor orci eu lobortis elementum nibh. Sit amet nisl suscipit adipiscing bibendum est. Varius vel pharetra vel turpis nunc eget lorem dolor sed. Enim sed faucibus turpis in eu mi bibendum neque egestas.</Typography>
          <Box display="flex" justifyContent="center">
                        <Box justifyContent="center" className='p-30'>
                                <img className='br-50' src="https://i.imgur.com/DYIs2rv.jpg" alt="Logotipo" height={150} width={150}/>
                                <Typography variant="h6" gutterBottom color="textPrimary" component="h3" align="center" className='titulo, fonte2'>Alexandra Reis</Typography>
                                </Box>
                                <Box justifyContent="center" className='p-30'>
                                <img className='br-50' src="https://i.imgur.com/w511C5I.jpg" alt="Logotipo" height={150} width={150}/>
                                <Typography variant="h6" gutterBottom color="textPrimary" component="h3" align="center" className='titulo, fonte2'>Aline Sassaki</Typography>
                                </Box>
                                <Box justifyContent="center" className='p-30'>
                                <img className='br-50' src="https://i.imgur.com/4Nz4tWa.jpg" alt="Logotipo" height={150} width={150}/>
                                <Typography variant="h6" gutterBottom color="textPrimary" component="h3" align="center" className='titulo, fonte2'>Camilla Villares</Typography>
                                </Box>
                                <Box justifyContent="center" className='p-30'>
                                <img className='br-50' src="https://i.imgur.com/GlRRWvn.jpg" alt="Logotipo" height={150} width={150}/>
                                <Typography variant="h6" gutterBottom color="textPrimary" component="h3" align="center" className='titulo, fonte2'>Isabel Brolhato</Typography>
                                </Box>
                                <Box justifyContent="center" className='p-30'>
                                <img className='br-50' src="https://i.imgur.com/xE46LXF.jpg" alt="Logotipo" height={150} width={150}/>
                                <Typography variant="h6" gutterBottom color="textPrimary" component="h3" align="center" className='titulo, fonte2'>Leticia Zanotti</Typography>
                                </Box>
                                <Box justifyContent="center" className='p-30'>
                                <img className='br-50' src="https://i.imgur.com/LX042So.jpg" alt="Logotipo" height={150} width={150}/>
                                <Typography variant="h6" gutterBottom color="textPrimary" component="h3" align="center" className='titulo, fonte2'>Silvia Santana</Typography>
                                </Box>
                                <Box justifyContent="center" className='p-30'>
                                <img className='br-50' src="https://i.imgur.com/iUVDOW0.jpg" alt="Logotipo" height={150} width={150}/>
                                <Typography variant="h6" gutterBottom color="textPrimary" component="h3" align="center" className='titulo, fonte2'>Stephany Souza</Typography>
                                </Box>
                                
                    </Box>

        </TabPanel>
      </TabContext>
    </>
  );
}
export default TabProduto;