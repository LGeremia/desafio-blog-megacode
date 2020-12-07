import {useState, useEffect} from 'react';
import Header from '../../components/Header/header';
import Sidebar from '../../components/Sidebar/sidebar';
import './home.css';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Pagination from "react-js-pagination";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const postsPerPage = 4;
  const [ activePage, setCurrentPage ] = useState( 1 );

  useEffect(()=>{
    async function fetchData(){
      try {
        const res = await axios.get('http://localhost:3333/posts');
        setPosts(res.data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  },[]);

  async function handleDeletPost(id){
    try {
      await axios.delete(`http://localhost:3333/post/${id}`);
      setPosts(posts.filter(post=>post._id !== id))
    } catch (err) {
      console.log(err)
    }
  }

  const indexOfLastPost  = activePage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = posts.slice( indexOfFirstPost, indexOfLastPost );

  const handlePageChange = ( pageNumber ) => {
    setCurrentPage( pageNumber );
  };
  
  return (
    <div className="Home">
      <Header />
      <div className="title">
        <h1>BLOG DA MEGACODE</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8">
            {currentPost.map(post=>(
              <div key={String(post._id)} className="d-flex post">
                <div className="d-flex post-header">
                  <h5 className="post-title">
                      <b >
                          {post.title}
                      </b>
                  </h5>
                  <div className="post-actions">
                    <Link to={`/EditPost/${post._id}`}>
                      <button>
                      E
                      </button>
                    </Link>
                    <button onClick={()=>handleDeletPost(post._id)}>
                        X
                    </button>
                  </div>
                </div>
                <span>
                    {post.created_date}
                </span>
                <p key={post.id} className="post-text">
                    {post.contend}
                    {post.id}
                </p>
              </div>
            ))}
            <div className="pagination">
              <Pagination
                activePage={ activePage }
                itemsCountPerPage={ 4 }
                totalItemsCount={ posts.length }
                pageRangeDisplayed={ 4 }
                onChange={ handlePageChange }
              />
            </div>
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

/*{posts.map(post=>(
              <div key={String(post._id)} className="d-flex post">
                <div className="d-flex post-header">
                  <h5 className="post-title">
                      <b >
                          {post.title}
                      </b>
                  </h5>
                  <div className="post-actions">
                    <Link to={`/EditPost/${post._id}`}>
                      <button>
                      E
                      </button>
                    </Link>
                    <button onClick={()=>handleDeletPost(post._id)}>
                        X
                    </button>
                  </div>
                </div>
                <span>
                    {post.created_date}
                </span>
                <p key={post.id} className="post-text">
                    {post.contend}
                    {post.id}
                </p>
              </div>
            ))}*/