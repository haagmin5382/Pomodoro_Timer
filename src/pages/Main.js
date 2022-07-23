import React from 'react';
import Header from '../components/Header';
import Timer from '../components/Timer';
import Tomato from '../components/Tomato';
import Chart from '../components/Chart';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
const Main = () => {
  return (
    <>
      <Header />
      <CssBaseline />
      <Container fixed>
        <Box
          justifyContent="center"
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
              m: 1,
            },
          }}
        >
          <Paper elevation={3}>
            <Timer />
          </Paper>
        </Box>
        <Tomato />
        <Chart />
      </Container>
    </>
  );
};

export default Main;
