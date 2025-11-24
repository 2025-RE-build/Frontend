import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppContainer from "./components/common/AppContainer";

import Home from "./pages/Home/Home";
// import OnBoarding from "./pages/OnBoarding/OnBoarding";

function App() {
  return (
    <BrowserRouter>
      <AppContainer>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* <Route path="/onboarding" element={<OnBoarding />} /> */}

          {/* <Route path="/login" element={<Login />} /> */}
          {/* <Route path="/profile" element={<Profile />} /> */}
        </Routes>
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
