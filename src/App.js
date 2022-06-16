import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import {Route, Routes} from "react-router-dom";

import Home from "./Pages/Home/home";
import {Layout} from "./Components/Layout/Layout";


function App() {
  return (

    <div className="App">
      <Layout>
        <Routes>
          <Route path='/' element={<Home />}/>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
