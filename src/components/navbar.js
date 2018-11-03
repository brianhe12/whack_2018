import React, { Component } from 'react';

import musicBoi from '../images/musicBoiLogo2.png';

class Navbar extends Component {
  mainTab = function() {
    this.props.mainTab(this.state.view);
    this.setState({view: 1});
  }

  render() {
    return(
      <div className="navbar">
        <a className="logo">
          <p>Stock FindAR</p>
        </a>
        <div>
          <form>
            <input
              type="text"
              placeholder="Search..."
              className="search"
            />
          </form>
        </div>
        <div className="navTab">
          <a onClick={this.props.changeStockFindAR}>
            <p> Stock FindAR </p>
          </a>
        </div>
        <div className="navTab">
          <a onClick={this.props.changeUseCases}>
            <p> Use Cases </p>
          </a>
        </div>
        <div className="navTab">
          <a onClick={this.props.changeResources}>
            <p> Resources </p>
          </a>
        </div>
        <div className="navTab">
          <a onClick={this.props.changeAbout}>
            <p> About </p>
          </a>
        </div>
        <div className="loginContainer">
          <form>
            <input type="text" name="username" placeholder="username" className="username"/>
            <input type="password" name="password" placeholder="password" className="password"/>
            <input type="submit" value="Submit" className="submit"/>
          </form>
        </div>
      </div>
    );
  }
}

export default Navbar;