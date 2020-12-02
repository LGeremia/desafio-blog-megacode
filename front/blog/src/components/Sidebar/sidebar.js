import react from 'react';
import './sidebar.css';

const Sidebar = ()=>{
    return(
        <div className="sidebar">
            <ul className="post-list">
                <li>Aqui vai o último Post</li>
                <li>Aqui vai o peúltimo Post</li>
                <li>Aqui vai o anteúltimo Post</li>
                <li>Aqui vai o ... Post</li>
                <li>Aqui vai o .... Post</li>
            </ul>
        </div>
    );
}

export default Sidebar;