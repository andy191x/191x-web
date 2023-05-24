import { Dispatch, SetStateAction, useState } from "react";

// https://usehooks-ts.com/react-hook/use-counter

interface UseCounterOutput {
    count: number;
    increment: () => void;
    decrement: () => void;
    reset: () => void;
    setCount: Dispatch<SetStateAction<number>>;
}

export function useCounter(initialValue?: number): UseCounterOutput {
    const [count, setCount] = useState(initialValue || 0);

    const increment = () => setCount((x) => x + 1);
    const decrement = () => setCount((x) => x - 1);
    const reset = () => setCount(initialValue || 0);

    return {
        count,
        increment,
        decrement,
        reset,
        setCount,
    };
}
