import { Route, Routes } from "react-router";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import NotFoundPage from "./pages/NotFoundPage";
import Home from "./pages/Home";

export const RouteConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default RouteConfig;
