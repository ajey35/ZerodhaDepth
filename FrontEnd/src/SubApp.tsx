import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./pages/signup";
import Home from "./pages/home";
import About from "./pages/about";
import Explore from "./pages/explore";
import Profile from "./pages/profile";
import DepthComp from "./pages/depth";
import { ThemeProvider, useTheme } from "./components/theme-provider";

export function SubApp() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="depth-app-theme">
      <ThemedApp />
    </ThemeProvider>
  );
}

function ThemedApp() {
  const { theme } = useTheme();
  console.log(theme);
  
  return (
    <div className={`${theme === "light" ? "bg-white text-black" : "bg-black text-white"} min-h-screen`}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/depth" element={<DepthComp />} />
          <Route path="/about" element={<About />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}
