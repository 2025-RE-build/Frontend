import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppContainer from "./components/common/AppContainer";

import OnBoarding from "./pages/OnBoarding/OnBoarding";
import Home from "./pages/Home/Home";
import Start from "./pages/Home/Start";
import MainPage from "./pages/Home/MainPage";
import Letter from "./pages/Letter/LetterSelectPage";
import LetterWrite from "./pages/Letter/LetterWritePage";
import LetterDetail from "./pages/Letter/LetterDetailPage";
import CallPage from "./pages/Call/CallPage";
import Calling from "./pages/Call/Calling";
import SecretLockPage from "./pages/Secret/SecretLockPage";
import MySecret from "./pages/Secret/MySecret";
import Signup from './components/Signup'
import KakaoTalk from './components/KakaoTalk'

function App() {
  return (
    <BrowserRouter>
      <AppContainer>
        <Routes>
          <Route path="/" element={<OnBoarding />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Kakao" element={<KakaoTalk />} />
          <Route path="/home" element={<Home />} />
          <Route path="/start" element={<Start />} />
          <Route path="/mainpage" element={<MainPage />} />
          <Route path="/letter" element={<Letter />} />
          <Route path="/letterwrite" element={<LetterWrite />} />
          <Route path="/letterdetail" element={<LetterDetail />} />
          <Route path="/call" element={<CallPage />} />
          <Route path="/calling" element={<Calling />} />
          <Route path="/secret" element={<SecretLockPage />} />
          <Route path="/mysecret" element={<MySecret />} />
        </Routes>
      </AppContainer>
    </BrowserRouter>
  );
}