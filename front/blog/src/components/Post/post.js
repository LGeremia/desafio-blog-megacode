import './post.css';
import react from 'react'

const Post = ()=>{
    return(
        <div className="d-flex post">
            <div className="d-flex post-header">
                <h5 className="post-title">
                    <b>
                        Isso é um título de Post!
                    </b>
                </h5>
                <div className="post-actions">
                    <button>
                        E
                    </button>
                    <button>
                        X
                    </button>
                </div>
            </div>
            <span>
                11/11/2020 16:48
            </span>
            <p className="post-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed sollicitudin, ex quis sagittis fermentum, quam tortor 
                commodo purus, molestie rutrum est nulla sit amet magna. 
                Vestibulum erat massa, dictum et semper in, pulvinar vitae risus. 
                Integer quam augue, bibendum rhoncus est et, scelerisque interdum 
                purus. Ut eu leo velit. Duis dapibus justo suscipit, eleifend mauris et, 
                fermentum justo. Fusce sit amet bibendum justo, non consectetur mauris. 
                Phasellus diam velit, vehicula sit amet vehicula et, gravida 
                in nibh. In massa augue, tincidunt vel laoreet sed, congue 
                sed justo. Donec non erat neque.
            </p>
        </div>
    );
}

export default Post;