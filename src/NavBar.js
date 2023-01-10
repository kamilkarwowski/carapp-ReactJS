import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export function NavBar() {
  return(
    <AppBar position="static">
      <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 2 }}>
           Giełda samochodowa
          </Typography>
        <Button className="icon" color="inherit"  href='/dodaj'>Dodaj ogłoszenie</Button>
        <Button className="icon" color="inherit" href='/cars'>Wyświetl ogłoszenia</Button>
        <Button className="icon" color="inherit" href='/contact'>Kontakt</Button>
      </Toolbar>
      
    </AppBar>);
}

export default NavBar;