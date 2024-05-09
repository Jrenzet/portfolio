import { Route, Routes } from "react-router";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import NotFoundPage from "./pages/NotFoundPage";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import ContactMe from "./pages/ContactMe";

export const RouteConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/contact" element={<ContactMe />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default RouteConfig;
