import React, {useState} from 'react'
import { AppBar, Tab, Tabs, Typography, } from '@material-ui/core';
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
            <Tab label="Todos os produtos" value="1"/>
            <Tab label="Sobre a Colheita Fresca" value="2" />
          </Tabs>
        </AppBar>
        <TabPanel value="1" >
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <ListaProduto />
          </Box>
        </TabPanel>
        <TabPanel value="2">
          <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">Sobre a Colheita Fresca</Typography>
          <Typography variant="body1" gutterBottom color="textPrimary" align="justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Venenatis a condimentum vitae sapien pellentesque habitant morbi. Mauris ultrices eros in cursus turpis. Volutpat maecenas volutpat blandit aliquam etiam. Dictumst quisque sagittis purus sit amet volutpat consequat mauris nunc. Quam quisque id diam vel quam. Dapibus ultrices in iaculis nunc sed augue. Sed nisi lacus sed viverra tellus in. Amet facilisis magna etiam tempor orci eu lobortis elementum nibh. Sit amet nisl suscipit adipiscing bibendum est. Varius vel pharetra vel turpis nunc eget lorem dolor sed. Enim sed faucibus turpis in eu mi bibendum neque egestas.</Typography>
        </TabPanel>
      </TabContext>
    </>
  );
}
export default TabProduto;