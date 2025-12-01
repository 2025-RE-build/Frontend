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
import MyLetters from "./pages/Secret/Secret1";
import MyComments from "./pages/Secret/Secret2";
import Signup from "./pages/SignUp/Signup";
import KakaoTalk from "./pages/Letter/KakaoTalk";
import CommunityWrite from "./pages/Community/CommunityWrite";
import PostList from "./pages/Community/PostList";
import Comments from "./pages/Community/Comments";

function App() {
  return (
    <BrowserRouter>
      <AppContainer>
        <Routes>
          <Route path="/" element={<OnBoarding />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/kakao" element={<KakaoTalk />} />
          <Route path="/home" element={<Home />} />
          <Route path="/start" element={<Start />} />
          <Route path="/mainpage" element={<MainPage />} />
          <Route path="/community/write" element={<CommunityWrite />} />
          <Route path="/community/postlist" element={<PostList />} />
          <Route path="/community/comments/:id" element={<Comments />} />
          <Route path="/letter" element={<Letter />} />
          <Route path="/letterwrite" element={<LetterWrite />} />
          <Route path="/letterdetail" element={<LetterDetail />} />
          <Route path="/call" element={<CallPage />} />
          <Route path="/calling" element={<Calling />} />
          <Route path="/secret" element={<SecretLockPage />} />
          <Route path="/mysecret" element={<MySecret />} />
          <Route path="/my-letters" element={<MyLetters />} />
          <Route path="/my-comments" element={<MyComments />} />
        </Routes>
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
