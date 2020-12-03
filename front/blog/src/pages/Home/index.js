import {useState, useEffect} from 'react';
import Post from '../../components/Post/post';
import Header from '../../components/Header/header';
import Sidebar from '../../components/Sidebar/sidebar';
import './home.css';
import axios from 'axios';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(async()=>{
    try {
      const res = await axios.get('http://localhost:3333/posts');
      setPosts(...posts, res.data);
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  },[]);

  async function handleDeletPost(id){
    try {
      await axios.delete(`http://localhost:3333/post/${id}`);
      setPosts(posts.filter(post=>post._id !== id))
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="Home">
      <Header />
      <div className="title">
        <h1>BLOG DA MEGACODE</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8">
            {posts.map(post=>(
              <div key={String(post._id)} className="d-flex post">
                <div className="d-flex post-header">
                  <h5 className="post-title">
                      <b >
                          {post.title}
                      </b>
                  </h5>
                  <div className="post-actions">
                    <button>
                        E
                    </button>
                    <button onClick={()=>handleDeletPost(post._id)}>
                        X
                    </button>
                  </div>
                </div>
                <span>
                    11/11/2020 16:48
                </span>
                <p key={post.id} className="post-text">
                    {post.contend}
                    {post.id}
                </p>
              </div>
            ))}
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