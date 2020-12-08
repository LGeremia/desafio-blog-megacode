import React from 'react';
import './header.css';
import Button from '@material-ui/core/Button';
import { Add } from '@material-ui/icons';


const Header = () =>{
    return(
        <header className="Header">
            <div className="container-fluid Teste">
                <div className="row">
                    <div className="col-6 col-md-9 d-none d-md-flex add-post">
                        <Button variant="outlined" href="/CreatePost">
                            NOVA PUBLICAÇÃO
                        </Button>
                    </div>
                    <div className="col-6 col-md-9 d-md-none d-sm-flex add-post">
                        <Button variant="outlined" href="/CreatePost">
                            <Add />
                        </Button>
                    </div>
                    <div className="col-6 col-md-3 d-flex user-status">
                        <span>
                            USUÁRIO LOGADO
                        </span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;