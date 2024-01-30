// actions
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const SET_NUMBER = "SET_NUMBER";

// action 생성기
export const increment = () => {
  return {
    type: INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: DECREMENT,
  };
};

export const setNum = (num) => {
  return {
    type: SET_NUMBER,
    payload: num,
  };
};

// 초기값 설정
const initialState = {
  number: 0,
};

// counterReducer
export default function counter(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        number: state.number + 1,
      };
    case DECREMENT:
      return {
        number: state.number - 1,
      };
    case SET_NUMBER:
      return {
        number: Number(action.payload),
      };
    default:
      return state;
  }
}
