import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Details from "./components/Details";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/details/:id" element={<Details />} />
          <Route path='/*' element={<Home />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
