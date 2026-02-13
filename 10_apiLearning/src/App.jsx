import { BrowserRouter, Routes, Route } from "react-router-dom";
import ApiDemo from "./Pages/ApiDemo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/api-demo" element={<ApiDemo />} />
        <Route path="*" element={<ApiDemo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;