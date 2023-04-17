import "./App.css";
import styled from "styled-components";
import { IconContext } from 'react-icons'
import { FaApple } from "react-icons/fa";
import { MdAssuredWorkload } from "react-icons/md";
import Counter from "./components/Counter";

const IconWrapper = styled.div`
  margin: 20px;
`;

function App() {
  return (
    <IconContext.Provider value={{
      color: '#bada55',
      size: '5rem'
    }}>
    <div className="App">
      <IconWrapper>
        <FaApple />
        <MdAssuredWorkload />
      </IconWrapper>
      <Counter />
    </div>
    </IconContext.Provider>
  );
}

export default App;
