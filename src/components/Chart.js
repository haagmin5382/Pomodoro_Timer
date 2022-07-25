import React, { useEffect } from 'react';
import c3 from 'c3';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { today } from './Timer';
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
  console.log(totalPomo);
  useEffect(() => {
    c3.generate({
      bindto: '#chart',
      data: {
        x: 'x',
        columns: [
          [
            'x',
            ...totalPomo.map(obj => (obj.Date === null ? today : obj.Date)),
          ],
          [
            '뽀모',
            ...totalPomo.map(obj =>
              obj.TotalPomo === null ? 0 : obj.TotalPomo,
            ),
          ],
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
        y: {
          max: 10,
          min: 1,
          tick: {
            format: y => {
              return y + ' 세트';
            },
          },
        },
      },
    });
  }, [dayPomo]);
  return <ChartContainer id="chart"></ChartContainer>;
};

export default Chart;
