import {useState} from 'react';
import './form.css';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Form = ()=>{
    const history = useHistory();
    const [title, setTitle] = useState("");
    const [contend, setContend] = useState("");

    async function handleSubmit(props){
        const res = await axios.post('http://localhost:3333/post', { 
            "title": title,
            "contend": contend
         });
        if(res.status === 200){
            alert(`O post foi cadastrado com sucesso!`);
        }
        history.push('/');
    }

    return(
        <div className="formPage d-flex">
            <h5>NOVA PUBLICAÇÃO</h5>
            <input type="text" onChange={e=>{setTitle(e.target.value)}} className="form-input" placeholder="Título" name="title"/>
            <textarea name="contend" onChange={e=>{setContend(e.target.value)}} className="form-input" id="contend" placeholder="Conteúdo"/>
            <div className="botoes">
                <Button variant="contained" onClick={handleSubmit} type = "submit" color="primary">Salvar</Button>
                <Button variant="contained" href="/">Cancelar</Button>
            </div>
        </div>
    );
}

export default Form