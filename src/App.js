import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import Home from "./Pages/News";
import { Layout } from "./Components/Layout";
import Bookmarks from "./Pages/Bookmarks";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
