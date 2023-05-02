import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { GlobalStyle } from "./GlobalStyle";
import Router from "./routes"

function App() {

  return (
    <>
    <GlobalStyle />
    <Router />
    <ToastContainer />
    </>
  )
}

export default App
