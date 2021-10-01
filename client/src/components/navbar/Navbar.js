import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {NavbarData} from '../../data/NavbarData';
import '../../css/navbar/Navbar.css';
import {IconContext} from 'react-icons';
import Profile from "./Profile";

function Navbar() {
    const onMenuClickHandler = (item, index) => {
        if (item.children) {
            if (document.getElementById(index).style.display === "none") {
                document.getElementById(index).style.display = "block"
            } else {
                document.getElementById(index).style.display = 'none'
            }
        }
    }

    return (
        <>
            <IconContext.Provider value={{color: '#fff'}}>
                <nav className={'nav-menu col-md-2'}>
                    <Profile/>
                    <ul className="nav-menu-items">
                        {NavbarData.map((item, index) => {
                            return (
                                <div key={`div${index}`}>
                                    <li key={index} className={item.cName}
                                        onClick={() => onMenuClickHandler(item, index)}>
                                        {item.children &&
                                        <Link to={"#"}>
                                            {item.icon}
                                            <span>{item.title}</span>
                                        </Link>
                                        }
                                        {!item.children &&
                                        <Link to={item.path}>
                                            {item.icon}
                                            <span>{item.title}</span>
                                        </Link>
                                        }
                                    </li>
                                    <ul id={index}>
                                        {Object.values(item.children).map((value =>
                                                <li key={value} className={"nav-text"}>
                                                    <Link to={`${item.path}/${value}`}>
                                                        <span>{value}</span>
                                                    </Link>
                                                </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    );
}

export default Navbar;
