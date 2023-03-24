import React from 'react';

class Navbar extends React.Component {
    state={
        nav : ["Home","about","Link"]
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Navbar</a>
                    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {this.state.nav.map((item,index) => (
                                <li className="nav-item" key={index}>
                                <a href="/" className="nav-link" aria-current="page">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;
