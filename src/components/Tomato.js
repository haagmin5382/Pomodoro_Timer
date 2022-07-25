import React from 'react';
import { GiTomato } from 'react-icons/gi';
import { useSelector } from 'react-redux';
// import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
// import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Tomato = () => {
  const pomo = useSelector(state => state.pomo.value.pomoNum);

  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 2, md: 3 }}>
      {/* <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={1}
        // sx={{ gridAutoRows:  }}
      > */}
      {pomo.map((tomato, index) => {
        return (
          <Grid item xs={2} sm={4} md={1} key={index}>
            {/* 한 행에 12/md */}
            <Item>
              <GiTomato color="tomato" size="2vw" />
            </Item>
          </Grid>
        );
      })}
      {/* </Stack> */}
    </Grid>
  );
};

export default Tomato;
