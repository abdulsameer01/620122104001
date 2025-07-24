import React from "react";
import axios from "axios";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UrlShortener from "./pages/UrlShortener";
import RedirectPage from "./pages/RedirectPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UrlShortener />} />
        <Route path="/:shortId" element={<RedirectPage />} />
      </Routes>
    </Router>
  );
}

export default App;
