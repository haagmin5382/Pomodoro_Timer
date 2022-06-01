import React from 'react';
import { GiTomato } from 'react-icons/gi';
import { useSelector } from 'react-redux';

import styled from 'styled-components';

const TomatoContainer = styled.span`
  > div {
    font-size: 3vw;
    color: rgb(16, 134, 70);
    margin-left: 3vw;
  }

  > span {
    font-size: 5vw;
    color: tomato;
    margin-left: 3vw;
  }
`;

const Tomato = () => {
  const pomo = useSelector(state => state.pomo.value.pomoNum);

  return (
    <div>
      <TomatoContainer>
        <div>오늘의 뽀모</div>
        {pomo.map((tomato, index) => {
          return (
            <span key={index}>
              <GiTomato />
            </span>
          );
        })}
      </TomatoContainer>
    </div>
  );
};

export default Tomato;
