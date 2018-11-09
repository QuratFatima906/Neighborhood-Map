import React, { Component } from 'react';
import '../styles/Header.css';
import FontAwesome from 'react-fontawesome';

export default class Header extends Component {

    handleClick = () => {
        this.props.toggleMenu(this.props.showMenu);
    };

    render() {
        return (
            <header className="site-header">
                <button
                    // type="button"
                    name="Toogle Button"
                    className="menu-toggle-btn"
                    onClick={this.handleClick}>
                    <FontAwesome
                        name="bars"
                        size="2x"
                        className="menu-icon" />
                </button>
                <h1>Neighborhood Map</h1>
            </header>
        )
    }
}