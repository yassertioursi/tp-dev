import React, { useState } from 'react';


function Counter() {
	const [count, setCount] = useState(0);
	const [inputValue, setInputValue] = useState(0);

	const handleInputChange = (e) => {
		setInputValue(e.target.value);
	};

	const handleSetValue = () => {
		const value = parseInt(inputValue, 10);
		if (!isNaN(value)) {
			setCount(value);
		}
	};

	return (
		<div>
			<h2>Counter</h2>
			<p>Value: {count}</p>
			<button onClick={() => setCount(count + 1)}>+1</button>
			<button onClick={() => setCount(count - 1)}>-1</button>
			<button onClick={() => setCount(0)}>reset 0</button>
			<div style={{ marginTop: '10px' }}>
				<input
					type="number"
					value={inputValue}
					onChange={handleInputChange}
					style={{ marginRight: '8px' }}
				/>
				<button onClick={handleSetValue}>set to value</button>
			</div>
		</div>
	);
}

export default Counter;
