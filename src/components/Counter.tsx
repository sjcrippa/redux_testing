'use client'

import { decrement, increment } from "@/redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

const Counter = () => {
  const count = useAppSelector(state => state.counterReducer.counter);
  const dispatch = useAppDispatch();

  return (
    <>
      <main>
        <h2 className="text-xl">Counter Component</h2>
        <div className="mt-16 flex flex-col border border-red-500">
          <span>total: {count}</span>
          <button onClick={() => { dispatch(increment()) }}>Increment</button>
          <button onClick={() => { dispatch(decrement()) }}>Decrement</button>
        </div>
      </main>
    </>
  )
}

export default Counter;
