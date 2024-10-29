import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import './App.css';
import HomePage from './pages/home/HomePage';
import AboutPage from './pages/about/AboutPage'; 
import ExplorePage from './pages/explore/ExplorePage';
import ExperienceDetailPage from './pages/experienceDetail/ExperienceDetailPage';
import BlogPage from './pages/blog/BlogPage'; 
import ArticleDetailPage from "./pages/articleDetail/ArticleDetailPage";
import LoginPage from './pages/login/LoginPage';
import RegisterPage from './pages/register/RegisterPage';
import UserDashboardPage from './pages/userDashboard/UserDashboardPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/explore/:id" element={<ExperienceDetailPage />} />
        <Route path="/blog" element={<BlogPage />} /> 
        <Route path="/blog/:id" element={<ArticleDetailPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/userDashboard/*" element={<UserDashboardPage />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;