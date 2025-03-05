import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import LoggedIn from "./LoggedIn.jsx";
import ProtectedRoute from "./Components/ProtectedRoute.jsx";
import ToDo from "./Components/ToDo.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/*<App />*/}

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/admin/" element={<ProtectedRoute />} >
        {/* <Route path="loggedin" element={<LoggedIn />} /> */}
          <Route path="ToDo" element={<ToDo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
