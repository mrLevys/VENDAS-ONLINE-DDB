import { useState } from 'react';
import { Button } from "antd";
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import { styled } from 'styled-components';

function App() {
  const [count, setCount] = useState(0);

  return (
    <StyledDiv isBlue={count > 3}>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button type='primary' onClick={() => setCount((count) => count + 1)}>count is {count}</Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </ StyledDiv>
  );
}

interface PStyledDiv {
  isBlue?: boolean;
}

const StyledDiv = styled.div<PStyledDiv>`
  color: ${props => props.isBlue ? '#BF4F74' : '#fff'};
  font-weight: bold;
`;

export default App;
