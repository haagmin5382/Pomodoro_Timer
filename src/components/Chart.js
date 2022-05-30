import React, { useEffect } from 'react';
import c3 from 'c3';
import { useSelector } from 'react-redux';
const Chart = () => {
  const dayPomo = useSelector(state => state.pomo.value.dayPomo);
  useEffect(() => {
    c3.generate({
      bindto: '#chart',
      data: {
        x: 'x',
        columns: [
          ['x', '4일전', '3일전', '2일전', '어제', '오늘'],
          ['뽀모', ...dayPomo],
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
    console.log(dayPomo);
  }, [dayPomo]);
  return <div id="chart"></div>;
};

export default Chart;
