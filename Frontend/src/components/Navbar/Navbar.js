import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import "./NavbarStyles.css";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavbarItems">
        <h1>
          <a className="navbar-logo" href="/">
            Casa Mia
          </a>
        </h1>
        <div className="menu-icons" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>

        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            if (item.dropdown) {
              return (
                <li key={index} className="nav-item dropdown">
                  <span className={item.cName}>
                    <i className={item.icon}></i>
                    {item.title}
                  </span>
                  <ul className="dropdown-menu">
                    {item.dropdown.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link className={subItem.cName} to={subItem.url}>
                          {subItem.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            }

            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
