import "./App.css";
import { ThemeProvider } from "next-themes";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";

import Register from "./pages/Register";
import Navigation from "./components/navigation";
import Footer from "./components/footer";

const AppContent = () => {
  const location = useLocation();

  // Hide navbar and footer on signup page
  const hideLayout = location.pathname === "/signup";

  return (
    <>
      {!hideLayout && <Navigation />}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/signup" element={<Register />} />
      </Routes>
      {!hideLayout && <Footer />}
    </>
  );
};

const App = () => (
  <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/signup" element={<Register />} />
        {/* <AppContent /> */}
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
