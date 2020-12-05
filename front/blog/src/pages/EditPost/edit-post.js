import Header from '../../components/Header/header';
import {useState} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const EditPost = ()=>{
    const history = useHistory();
    const [title, setTitle] = useState("");
    const [contend, setContend] = useState("");

    async function handleSubmit(props){
        const res = await axios.patch(`http://localhost:3333/post/${id}`, { 
            "title": title,
            "contend": contend
         });
        if(res.status === 200){
            alert(`O post foi atualizado com sucesso!`);
        }
        history.push('/');
    }

    return(
        <div>
            <Header />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="formPage d-flex">
                            <h5>NOVA PUBLICAÇÃO</h5>
                            <input type="text" onChange={e=>{setTitle(e.target.value)}} className="form-input" placeholder="Título" name="title"/>
                            <textarea name="contend" onChange={e=>{setContend(e.target.value)}} className="form-input" id="contend" placeholder="Conteúdo"/>
                            <div className="botoes">
                                <Button variant="contained" onClick={handleSubmit} type = "submit" color="primary">Salvar</Button>
                                <Button variant="contained" href="/">Cancelar</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditPost