import React, { useState } from 'react'
import { AppBar, Tab, Tabs, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagem from '../listapostagem/ListaPostagem';
import './TabPostagem.css';


function TabPostagem() {
  const [value, setValue] = useState('1')
  function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
    setValue(newValue);
  }
  return (
    <>
      <TabContext value={value}>
        <AppBar  className="tab"  position="static">
          <Tabs centered indicatorColor="secondary" onChange={handleChange}>
            <Tab label="Todas as postagens" value="1" />
            <Tab label="Sobre mim" value="2" />
          </Tabs>
        </AppBar>
        <TabPanel value="1" >
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <ListaPostagem />
          </Box>
        </TabPanel>
        <TabPanel value="2">
          <Typography variant="h4" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">Sobre mim</Typography>
          <Typography variant="body1" gutterBottom color="textPrimary" align="justify" className='sobreNos'>
            Olá, meu nome é Nicolle Sanches, tenho 21 anos, e sempre fui apaixonada por tecnologia. 
            <br />
            Realizei a transição de carreira para a área tech e estudei programação por conta própria por um tempo,
            <br />
            e em 2023 Passei no processo seletivo da Generation, onde desenvolvi habilidades técnicas e 
            <br />
            habilidades comportamentais, sendo minhas principais habilidades a resiliência, proatividade e trabalho em grupo. 
            <br />
            Hoje, com toda certeza me denomino uma desenvolvedora fullstack, 
            com objetivo de mudar a vida das pessoas através da tecnologia, e sempre determinada a aprender mais.
          
          </Typography>
        </TabPanel>
      </TabContext>
    </>
  );
}
export default TabPostagem;