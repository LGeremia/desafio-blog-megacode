import React from 'react';
import './header.css';
import Button from '@material-ui/core/Button';

const Header = () =>{
    return(
        <header className="Header">
            <div className="container-fluid Teste">
                <div className="row">
                    <div className="col-6 col-md-9 d-flex add-post">
                        <Button variant="outlined" href="/CreatePost">
                            NOVA PUBLICAÇÃO
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