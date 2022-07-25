import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import * as d3 from 'd3';
import React from 'react';
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
    if (totalPomo[totalPomo.length - 1]?.TotalPomo) {
      const chart = d3
        .select('#chart')
        .append('svg')
        .attr('width', 400)
        .attr('height', 400);

      const x = d3
        .scaleBand()
        .domain(totalPomo.map(obj => obj.Date))
        .range([40, 400]);

      const y = d3
        .scaleLinear()
        .domain([0, d3.max(totalPomo, d => d.TotalPomo)])
        .range([360, 40]);

      const xAxis = g => {
        return g
          .attr('transform', `translate(0,${360})`)
          .call(d3.axisBottom(x).tickSizeOuter(0));
      };
      const yAxis = g =>
        g
          .attr('transform', `translate(${40}, 0)`) // 동일하게 원하는 만큼 여백을 이동
          // axisLeft를 통해 좌측에 y축 생성, tickValues 함수를 통해 원하는 높이에 틱 생성가능, tickSize를 width만큼 그려 그리드 생성.
          .call(
            d3
              .axisLeft(y)
              .tickValues([
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                18, 19, 20, 21, 22, 23, 24, 25,
              ]),
            // .tickSize(-400),
          )
          .call(g => g.select('.domain').remove()) // 축을 깔끔하게 지울수도 있다.
          .attr('class', 'grid'); // 이런식으로 직접 class를 부여해서 css로도 속성 부여 가능(색깔, 길이 등)

      chart.append('g').call(xAxis);
      chart.append('g').call(yAxis);
      chart
        .selectAll('rect') // 막대그래프
        .data(totalPomo) // 막대그래프로 표현할 데이터
        .enter() // 데이터를 순회
        .append('rect')
        // x좌표의 위치를 척도에 따라 계산, 도형의 width/2 값을 빼줌으로써 도형이 가운데에 위치
        .attr('x', data => x(data.Date) + x.bandwidth() / 2 - 20) // 40의 반절 20을 뺌으로서 x축의 달이 막대의 중앙에 위치한다.
        .attr('y', data => y(data.TotalPomo)) // y좌표 척도 계산
        .attr('width', 40) // bar 도형 width 설정
        .attr('height', data => y(0) - y(data.TotalPomo))
        .attr('class', 'bar-chart'); // 클래스를 부여하여 css, scss등으로 넓이나 색깔 등을 직접 부여 가능
      // .attr("fill", (data) => data.color); // input data에 미리 color를 넣어 둔다면 이렇게도 색깔 지정 가능.
    }
  }, [dayPomo]);
  return <div id="chart"></div>;
};

export default Chart;
