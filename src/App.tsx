import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Header from '../src/components/Header'
import NavBar from './components/NavBar'
import Signup from './components/Signup'
import KakaoTalk from './components/KakaoTalk'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Kakao" element={<KakaoTalk />} />
       </Routes>
  </BrowserRouter>
  );
};

export default App
