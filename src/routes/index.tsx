import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "../pages";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element="aa" />
      </Routes>
    </BrowserRouter>
  );
};
