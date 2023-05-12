import { GlobalStyle } from "./styles/index";
import "./App.css";
import Home from "./pages/home/home";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Home/>
    </div>
  );
}

export default App;