import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { AppState } from 'store';
import { increment, decrement, random } from 'api/counter';

const Counter: React.FC = () => {

    const dispatch = useDispatch();

    const count = useSelector((state: AppState) => state.counter.count);

    return (
        <div className="flex-col">
            <div className="flex-row">
                <button onClick={e => dispatch(increment(1))}>{">"}</button>
                <div>{count}</div>
                <button onClick={e => dispatch(decrement(1))}>{"<"}</button>
            </div>
            <button onClick={e => dispatch(random())}>Random</button>
        </div>
    )
}

export default Counter;