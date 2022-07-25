import React from 'react';
import Header from '../components/Header';
import Timer from '../components/Timer';
import Tomato from '../components/Tomato';
// import Chart from '../components/Chart';
import CssBaseline from '@mui/material/CssBaseline';
// import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
const Main = () => {
  return (
    <>
      <Header />
      <CssBaseline />
      <Container fixed>
        <Timer />
        <Tomato />
        {/* <Chart /> */}
      </Container>
    </>
  );
};

export default Main;
