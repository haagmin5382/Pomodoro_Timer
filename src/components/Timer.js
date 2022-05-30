import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPomo } from '../redux/pomo';
import styled from 'styled-components';

const TimerContainer = styled.div`
  text-align: center;
  font-size: 5vw;
`;

const Timer = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [start, setStart] = useState(false); // 시작버튼을 눌렀는지 관리하는 state
  const [rest, setRest] = useState(false); // 공부하는 타임인지 휴식하는 타임인지 관리하는 state
  //   const secondsRef = useRef(0);
  // const data = useSelector(state => state.pomo.value);
  const pomo = useSelector(state => state.pomo.value.pomoNum);
  const dayPomo = useSelector(state => state.pomo.value.dayPomo);

  const dispatch = useDispatch();

  const startTimer = () => {
    setStart(true);
  };
  const stopTimer = () => {
    setStart(false);
  };
  const increasePomo = () => {
    dispatch(setPomo({ pomoNum: [...pomo, 1], dayPomo: dayPomo }));
  };
  const increaseDayPomo = () => {
    dispatch(
      setPomo({
        pomoNum: [],
        dayPomo: [...dayPomo, pomo.length],
      }),
    );

    // console.log(data);
  };
  useEffect(() => {
    const countdown = setInterval(() => {
      if (start) {
        if (rest) {
          if (parseInt(seconds) === 0) {
            if (parseInt(minutes) > 0) {
              setSeconds(59);
              setMinutes(parseInt(minutes) - 1);
            } else {
              console.log('휴식 끝');
              setRest(false);
              setMinutes(25);
              increasePomo();
              clearInterval(countdown);
            }
          }
          if (parseInt(seconds) > 0) {
            setSeconds(parseInt(seconds) - 1);
          }
        } else {
          if (parseInt(seconds) === 0) {
            if (parseInt(minutes) > 0) {
              setSeconds(59);
              setMinutes(parseInt(minutes) - 1);
            } else {
              console.log('휴식 시작');
              setRest(true);
              if (pomo.length !== 0 && pomo.length % 4 === 0) {
                setMinutes(30); // 4세트마다 (포모 갯수가 4개가 되면 30분씩 휴식시간 부여)
              } else {
                setMinutes(5);
              }
              clearInterval(countdown);
            }
          }
          if (parseInt(seconds) > 0) {
            setSeconds(parseInt(seconds) - 1);
          }
        }
      }
    }, 1000);
    return () => {
      clearInterval(countdown);
    };
  }, [start, minutes, seconds, rest]);
  return (
    <TimerContainer>
      <div>
        {rest ? '휴식 시간' : '공부 시간'}
        {minutes}:{seconds}
      </div>
      <div> 뽀모개수 :{pomo.length} </div>
      <button onClick={startTimer}>시작</button>
      <button onClick={stopTimer}>멈춰</button>
      <button onClick={increasePomo}>증가</button>
      <button onClick={increaseDayPomo}>하루 끝</button>
    </TimerContainer>
  );
};

export default Timer;
