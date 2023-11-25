import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);
    const incrementNum = () => {
        setCount(count + 1);
    }
    const [num, setNum] = useState(0);
    const decrementNum = () => {
        setNum(num - 1);
    }

    const styles = {color: Math.abs(num) !== Math.abs(count) ? "red" : "green" }
    return (
        <div>
            <p>Upvotes: {count}</p>
            <button onClick={incrementNum}>Upvote+</button>
            <p>Downvotes: {num}</p>
            <button onClick={decrementNum}>Downvote-</button>
            <p style={styles}>Balance of votes: {count + num}</p>
        </div>
    )
}