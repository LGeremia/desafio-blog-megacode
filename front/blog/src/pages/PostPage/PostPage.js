import react from 'react';
import Form from '../../components/Form/form';
import Header from '../../components/Header/header'

const PostPage = ()=>{
    return(
        <div>
            <Header />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <Form />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostPage;