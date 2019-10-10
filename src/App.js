import React from 'react';
import './App.css';
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import Calendar from '@toast-ui/react-calendar'
import '../node_modules/tui-calendar/dist/tui-calendar.css'
import '../node_modules/tui-date-picker/dist/tui-date-picker.css'
import '../node_modules/tui-time-picker/dist/tui-time-picker.css'

function App() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Appointment App
          </Typography>
        </Toolbar>
      </AppBar>
      <div style={{ padding: 50 }}>
        <Calendar
          taskView={false}
          scheduleView={['time']}
          week={{
            daynames: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'],
            startDayOfWeek: new Date().getDay(),
            hourStart: 7,
            hourEnd: 21
          }}
          theme={{
            'week.currentTimeLinePast.border': 'none',
            'week.currentTimeLineBullet.backgroundColor': 'inherit',
            'week.currentTimeLineToday.border': 'none',
            'week.currentTimeLineFuture.border': 'none',
            'week.currentTime.color': 'transparent',
            'week.currentTime.fontSize': 'none',
            'week.currentTime.fontWeight': 'none',
          }}
          useDetailPopup
          useCreationPopup />
      </div>
    </div>
  );
}

export default App;
