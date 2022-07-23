import React from 'react';
import { GiTomato } from 'react-icons/gi';
import { useSelector } from 'react-redux';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

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
    <div>
      <span>
        <div>오늘의 뽀모</div>
      </span>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
      >
        {pomo.map((tomato, index) => {
          return (
            <span key={index}>
              <Item>
                <GiTomato color="tomato" size="2vw" />
              </Item>
            </span>
          );
        })}
      </Stack>
    </div>
  );
};

export default Tomato;
