import Header from '../../components/Header/header';
import {useState, useEffect} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import './edit-post.css';
import Button from '@material-ui/core/Button';


const EditPost = ({ match })=>{
    const history = useHistory();
    const [title, setTitle] = useState("");
    const [contend, setContend] = useState("");

    useEffect(()=>{
        async function fetchData(){
        try {
            const res = await axios.get(`https://evening-harbor-32020.herokuapp.com/post/${match.params.id}`);
            setTitle(res.data.title);
            setContend(res.data.contend);
        } catch (err) {
            console.error(err);
        }
        }
        fetchData();
    },[match.params.id]);

    async function handleSubmit(props){
        const res = await axios.patch(`https://evening-harbor-32020.herokuapp.com/post/${match.params.id}`, { 
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
                            <input type="text" value={title} onChange={e=>{setTitle(e.target.value)}} className="form-input" placeholder="Título" name="title"/>
                            <textarea name="contend" value={contend} onChange={e=>{setContend(e.target.value)}} className="form-input" id="contend" placeholder="Conteúdo"/>
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