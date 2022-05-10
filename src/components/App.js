import { useEffect, useState } from 'react';
import { getPosts } from '../api';
import { Home, Login } from '../pages';
import Loader from './Loader';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useAuth } from '../hooks';
import Signup from '../pages/Signup';
const Page404 = () => {
  return <div>404</div>;
};
function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const auth = useAuth();
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await getPosts();
      console.log('response', response);
      if (response.success) {
        setPosts(response.data.posts);
      }
      setLoading(false);
    };

    fetchPosts();
  }, []);

  if (auth.loading) {
    return <Loader />;
  }
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home posts={posts} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
