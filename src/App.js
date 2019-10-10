import React from 'react';
import './App.css';
import { AppBar, Toolbar, Typography } from '@material-ui/core'

function App() {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography variant="h6">
            Appointment App
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default App;
