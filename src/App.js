import './App.css';
import Header from './Header';
import RecommendedVideos from './RecommendedVideos';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app">
      <Header/>
      <div className="app__main">
        <Sidebar/>
        <RecommendedVideos/>
      </div>
    </div>
  );
}

export default App;
