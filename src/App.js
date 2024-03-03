import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'devextreme/dist/css/dx.light.css';
import Login from './MH/pages/Login/login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route exact path="/MH/login" element={<Login />} />
          <Route exact path="/MJ/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
