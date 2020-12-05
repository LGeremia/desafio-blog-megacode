import Axios from 'axios';
import {useState, useEffect} from 'react';
import './sidebar.css';

const Sidebar = ()=>{
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        async function fetchData(){
        try {
            const res = await Axios.get('http://localhost:3333/latestPosts');
            setPosts(res.data);
        } catch (err) {
            console.error(err);
        }
        }
        fetchData();
    },[]);

    return(
        <div className="sidebar">
            <ul className="post-list">
                {posts.map(post=>(
                    <li key={String(post._id)}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default Sidebar;