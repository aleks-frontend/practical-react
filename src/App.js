import "./App.css";

import { IconContext } from "react-icons";
import Counter from "./components/Counter";
import Toaster from "./components/Toaster/index";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import ModalTester from './components/ModalTester/index';
import ReactModal from 'react-modal';

ReactModal.setAppElement("#root")
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
        <ModalTester />
      </div>
    </IconContext.Provider>
  );
}

export default App;
