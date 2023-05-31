import React, { useState } from 'react'

function Contador() {
    const [count, setCount] = useState(0)

    const handleCount = () => {
        setCount(count + 1)
    }

    return (
        <button onClick={handleCount}>Click counter: {count}</button>
    )
}

export default Contador