// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { increment, decrement, reset, incrementByAmount } from "./counterSlice";
// import "../style/counter.css";
// const Counter = () => {
//   const count = useSelector((state) => state.counter.count);
//   const dispatch = useDispatch();

//   const [incrementByAmount, setIncrementByAmount] = useState(0);

//   const addValue = Number(incrementByAmount) || 0;

//   const resetAll = () => {
//     setIncrementByAmount(0);
//     dispatch(reset());
//   };
//   return (
//     <div className="counter">
//       <p>{count}</p>
//       <div>
//         <button onClick={() => dispatch(increment())}>increment +</button>
//         <button onClick={() => dispatch(decrement())}>decrement -</button>
//       </div>
//       <input
//         type="text"
//         value={incrementByAmount}
//         onChange={(e) => setIncrementByAmount(e.target.value)}
//       />
//       <div>
//         <button onClick={() => dispatch(incrementByAmount(addValue))}>
//           add amount
//         </button>
//         <button onClick={resetAll}>Reset</button>
//       </div>
//     </div>
//   );
// };

// export default Counter;

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";
import "../style/counter.css";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const [amountToAdd, setAmountToAdd] = useState(0);

  const resetAll = () => {
    setAmountToAdd(0);
    dispatch(reset());
  };

  const handleAddAmount = () => {
    dispatch(incrementByAmount(Number(amountToAdd) || 0)); // Dispatching the action creator with the payload
  };

  return (
    <div className="counter">
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>increment +</button>
        <button onClick={() => dispatch(decrement())}>decrement -</button>
      </div>
      <input
        type="text"
        value={amountToAdd}
        onChange={(e) => setAmountToAdd(e.target.value)}
      />
      <div>
        <button onClick={handleAddAmount}>add amount</button>
        <button onClick={resetAll}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
