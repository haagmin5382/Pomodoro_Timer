import React, { useEffect } from 'react';
import c3 from 'c3';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const ChartContainer = styled.div`
  margin-top: 10vh;
`;

const Chart = () => {
  const dayPomo = useSelector(state => state.pomo.value.dayPomo);
  const totalPomo = dayPomo.slice(
    dayPomo.length >= 5 ? dayPomo.length - 5 : 0,
    dayPomo.length,
  );
  //   window.localStorage.setItem('totalPomo',dayPomo);
  //   const totalPomo = window.localStorage.getItem('totalPomo');
  useEffect(() => {
    c3.generate({
      bindto: '#chart',
      data: {
        x: 'x',
        columns: [
          ['x', '5일전', '4일전', '3일전', '2일전', '어제'],
          ['뽀모', ...totalPomo],
        ],
        type: 'bar',
        colors: {
          뽀모: 'tomato',
        },
      },
      axis: {
        x: {
          type: 'category',
        },
      },
    });
  }, [dayPomo]);
  return <ChartContainer id="chart"></ChartContainer>;
};

export default Chart;
