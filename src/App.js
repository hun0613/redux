import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrement, increment, setNum } from "./modules/counter";

function App() {
  // const [value, setValue] = useState(0);
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);

  const count = useSelector((state) => state.counter.number);

  const handleClickPlus = () => {
    // setValue(value + 1);
    dispatch(increment());
  };

  const handleClickMinus = () => {
    // setValue(value - 1);
    dispatch(decrement());
  };

  const handleChangeInput = (e) => {
    setValue(e.target.value);
  };

  const handleClickInput = () => {
    dispatch(setNum(value));
  };
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-slate-200">
      <div className="h-fit w-32 rounded-lg border border-slate-700/60 bg-white p-2 text-center text-sm text-gray-700 drop-shadow-lg">
        {count}
      </div>
      <div className="mt-3 flex h-fit w-full flex-row items-center justify-center">
        <button
          onClick={handleClickMinus}
          type="button"
          className="mr-2 h-fit w-fit rounded-md border border-slate-300 bg-white p-2 text-center hover:bg-white/60"
        >
          -1
        </button>
        <button
          type="button"
          onClick={handleClickPlus}
          className="h-fit w-fit rounded-md border border-slate-300 bg-white p-2 text-center hover:bg-white/60"
        >
          +1
        </button>
      </div>
      <input
        type="text"
        placeholder="값을 입력하세요"
        value={value}
        onChange={handleChangeInput}
        className="mt-3 w-32 rounded-lg border border-stone-500 bg-white p-3 text-center text-sm"
      />
      <button
        type="button"
        onClick={handleClickInput}
        className="mt-2 h-fit w-fit rounded-md border border-slate-300 bg-white p-2 text-center hover:bg-white/60"
      >
        입력
      </button>
    </div>
  );
}

export default App;
