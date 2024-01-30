import { combineReducers } from "redux";
import counter from "./counter";

// import한 리듀서 이름을 그래로 사용하는 경우
const rootReducer = combineReducers({
  counter,
});

// 리듀서의 이름을 지정하는 경우
// export default combineReducers({
//     // 리듀서 이름 : import한 리듀서
//     counterData : counter,
// })

export default rootReducer;
