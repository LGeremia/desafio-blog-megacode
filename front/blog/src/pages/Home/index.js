import react from 'react';
import Post from '../../components/Post/post';
import Header from '../../components/Header/header';
import Sidebar from '../../components/Sidebar/sidebar';
import './home.css';

const Home = () => {
  return (
    <div className="Home">
      <Header />
      <div className="title">
        <h1>BLOG DA MEGACODE</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8">
            <Post />
          </div>
          <div className="col">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;