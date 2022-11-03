import Home from "./components/home";
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";

import "./assets/scss/main.scss"

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
