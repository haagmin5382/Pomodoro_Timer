# 뽀모도로 공부법을 위한 타이머

효율적으로 시간을 쓰기 위한 뽀모도로 학습을 위한 타이머입니다.

## 배포 주소
https://spiffy-lily-91aee9.netlify.app/

## 타이머 기능
![pomodoroTimer](https://user-images.githubusercontent.com/81218474/187140726-3270d415-4b64-4315-819b-60467c1eb424.gif)

공부시간 25분 , 휴식시간 5분 한 세트이고 뽀모도로 학습법에 따라 4세트 마다 휴식시간이 5분이 아닌 30분이 주어집니다.
25분이 지나면 휴식시간 5분 4세트 때는 30분으로 타이머가 작동합니다. 각 공부시간과 휴식시간을 놓치기 않기 위해서 시간이 끝나면 소리가 나서 사용자에게 알립니다.

## 차트
![pomodoroGraph](https://user-images.githubusercontent.com/81218474/187140534-359891fb-c72a-4907-9934-059aead11176.gif)

각 하루마다 얼마나 뽀모를 채웠는지 D3.js 라이브러리를 통해 구현했습니다. 공부 마치기를 누르면 오늘 공부한 셋트(뽀모)만큼 기록이 됩니다. 차트에는 5일치 만큼의 기록이 나오게 됩니다.

## 상태관리

redux-toolkit으로 상태를 관리했고 redux-persist를 사용해서 상태를 저장할 수 있게 했습니다.
