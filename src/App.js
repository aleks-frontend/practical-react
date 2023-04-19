import "./App.css";

import { IconContext } from "react-icons";
import Counter from "./components/Counter";
import Toaster from "./components/Toaster/index";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <IconContext.Provider
      value={{
        color: "#bada55",
        size: "5rem",
      }}
    >
      <div className="App">
        <Counter />
        <Toaster />
        <ToastContainer />
      </div>
    </IconContext.Provider>
  );
}

export default App;
