import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Header = () => {
    return (
        <div>
            <div className="text-center">
                <h2>BRFC Football League</h2>
                <h5>Choose the best players to make the best team</h5>
            </div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
                        <a className="nav-link" href="/players">Players</a>
                        <a className="nav-link" href="/goalkeeper">goalkeepers</a>
                        
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;