import './App.css';
import React from 'react';
import Header from './component/Header';
import Sidebar from './component/Sidebar';
import SearchPage from "./component/SearchPage";
import RecommendedVideos from './component/RecommendedVideos';
import { BrowserRouter as Router ,Route ,Routes} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
         <Route path="/search/:searchTerm"
          element={<div className="app_sidebar">
          <Sidebar />
          <SearchPage />
          </div>} />
          <Route path="/" element={
      <div className="app_sidebar">
      <Sidebar />
      <RecommendedVideos />
      <div>
      <div>
    </div>
    </div>
      </div>} />
        
        </Routes>
      </Router>
      
      
    </div>
  );
}

export default App;
