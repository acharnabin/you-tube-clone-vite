import React, { memo, useMemo, useState } from "react";

// REACT.MEMO
// const ShowValue = memo(({ count }: { count: number }) => {
//   return count * 2;
// });

const ShowCount = memo(({ count }: { count: number }) => {
  console.log("Count", count);

  return <h2>{count * 1000}</h2>;
});

// memo(Component)

// USEMEMO Example
const Test = () => {
  const [state1, setState1] = useState(0);
  const [state2, setState2] = useState(0);

  const _stateMultipyBytwo = useMemo(() => {
    let a = state1;
    setTimeout(() => {
      for (let index = 0; index < 1000; index++) {
        a = a + index;
      }

      console.log(a, "state 1 run");

      return a;
    }, 1200);

    return 0;
  }, [state1]);

  const _state2MultipyBytwo = useMemo(() => {
    console.log("state 2");
    return state2 * 2;
  }, [state2]);

  return (
    <div>
      <h1 className="text-2xl text-amber-600">STATE 1 - {state1} </h1>
      <h1 className="text-2xl text-blue-600">STATE 2 - {state2} </h1>

      <h3 className="text-2xl text-red-600">
        state 1 * 2 --- {_stateMultipyBytwo}
      </h3>
      <h3 className="text-2xl text-red-600">
        state 2 * 2 --- {_state2MultipyBytwo}
      </h3>

      <h3 className="text-2xl text-green-600">
        <ShowCount count={state1} />
      </h3>
      <h3 className="text-2xl text-green-600">
        <ShowCount count={state2} />
      </h3>

      <button
        className="bg-amber-700 p-2"
        onClick={() => setState1(state1 + 1)}
      >
        STATE 1
      </button>
      <button
        className="bg-blue-700 p-2 mx-2"
        onClick={() => setState2(state2 + 1)}
      >
        STATE 2
      </button>
    </div>
  );
};

export default Test;
