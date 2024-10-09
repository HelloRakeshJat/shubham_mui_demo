import React from 'react';
import { Button, Typography, Container, AppBar, Toolbar, Switch } from '@mui/material';

function App({ toggleTheme, isDarkMode }) {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Themed App
          </Typography>
          <Switch
            checked={isDarkMode}
            onChange={toggleTheme}
            color="default"
          />
        </Toolbar>
      </AppBar>
      <Container sx={{ marginTop: 4 }}>
        <Typography variant="h4" gutterBottom>
          {isDarkMode ? 'Dark Mode' : 'Light Mode'}
        </Typography>
        <Button variant="contained" color="primary">
          Primary Button
        </Button>
        <Button variant="contained"  sx={{ marginLeft: 2 }}>
          Secondary Button
        </Button>
      </Container>
    </div>
  );
}

export default App;
