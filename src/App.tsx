import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
// import ProductPage from "./pages/ProductPage";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;